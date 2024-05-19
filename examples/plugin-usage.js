const {run} = require("../dist/index.js");

console.log(run)


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
