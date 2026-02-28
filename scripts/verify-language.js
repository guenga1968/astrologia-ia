// Verificador de lenguaje: busca palabras en idiomas no deseados en textos renderizados
// Este script inspecciona archivos .ts/.tsx/.js en lib, components, app y scripts
// y reporta literales de texto que contengan palabras en inglés o redes de otros idiomas.

const fs = require('fs');
const path = require('path');

function walkDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      walkDir(full, fileList);
    } else if (e.isFile()) {
      if (full.endsWith('.ts') || full.endsWith('.tsx') || full.endsWith('.js')) {
        fileList.push(full);
      }
    }
  }
  return fileList;
}

const rootDirs = [
  path.resolve(__dirname, '..', 'lib'),
  path.resolve(__dirname, '..', 'components'),
  path.resolve(__dirname, '..', 'app'),
  path.resolve(__dirname, '..', 'scripts'),
];

const bannedPatterns = [
  /\bpassion\b/i,
  /\babove\b/i,
  /\bthink(s)?\b/i,
  /внутр|внутрен|внутренная/i,
  /核|中文|рус|русский|汉字/iu
];

const issues = [];

function extractStringLiterals(src) {
  const strings = [];
  const regex = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`/g;
  let m;
  while ((m = regex.exec(src)) !== null) {
    strings.push({ text: m[0], index: m.index, end: regex.lastIndex });
  }
  return strings;
}

for (const root of rootDirs) {
  if (!fs.existsSync(root)) continue;
  const files = walkDir(root);
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    const literals = extractStringLiterals(content);
    for (const lit of literals) {
      for (const ban of bannedPatterns) {
        if (ban.test(lit.text)) {
          // Estimar línea: contar saltos de línea hasta la posición inicial
          const before = content.substring(0, lit.index);
          const line = before.split(/\r?\n/).length;
          issues.push({ file: f, line, text: lit.text, rule: ban.toString() });
          break;
        }
      }
    }
  }
}

console.log(JSON.stringify({ issues }, null, 2));
