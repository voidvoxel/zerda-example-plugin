const run = require("./src/index");


let input = [1, 2];

let output = input;

const LOOP_COUNT = 20;


async function main () {
    for (
        let i = 0;
        i < LOOP_COUNT;
        i++
    ) {
        console.log(output = await run(output));
    }
}


main();
