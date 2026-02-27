import { calculateChart } from './lib/astrology';
import { getLocalInterpretation } from './lib/localInterpretation';
import * as fs from 'fs';

async function main() {
    const log: string[] = [];
    log.push('1. Starting calculation...');
    try {
        const data = await calculateChart({
            date: '1990-03-15',
            time: '14:30',
            latitude: 40.7128,
            longitude: -74.0060,
        });
        log.push('2. Chart Success! Planets count: ' + data.planets.length);

        log.push('3. Starting interpretation... data exists: ' + !!data);
        try {
            const interpretation = getLocalInterpretation(data, { name: 'Gustavo' });
            log.push('4. Interpretation Success! Length: ' + interpretation.length);
        } catch (e: any) {
            log.push('LOCAL INTERP ERROR: ' + e.message + '\n' + e.stack);
        }

    } catch (err: any) {
        log.push('5. Error: ' + err.message);
    }

    fs.writeFileSync('test_output.txt', log.join('\n'));
}

main().then(() => console.log('Done!'));
