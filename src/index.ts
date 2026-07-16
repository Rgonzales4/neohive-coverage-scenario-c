import { greet } from './greeting.js';
import { add } from './math.js';
import { slugify } from './util.js';

export function main(): void {
    const total = add(2, 3);
    console.log(greet(slugify('Scenario C')), total);
}

main();
