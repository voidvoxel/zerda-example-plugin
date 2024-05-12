/**
 * @type {import("chancellor")}
 */
let chancellor;

/**
 * @type {import("chancellor").flipcoin}
 */
let flipcoin;


async function initialize () {
    if (chancellor) return;

    chancellor = await import("chancellor");

    flipcoin = chancellor.flipcoin;
}


async function run (input) {
    await initialize();

    const x = input[0];
    const y = input[1];

    let output = [ x, y ];

    if (flipcoin()) {
        output[0] += y;
        output[1] *= 0.5;
    } else {
        output[0] *= 0.5;
        output[1] += x;
    }

    return output;
}


module.exports = run;
