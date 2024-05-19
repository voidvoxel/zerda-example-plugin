export async function run (
    input: number[]
) {
    const x = input[0];
    const y = input[1];

    let output = [ x, y ];

    // if (flipcoin()) {
    if (Math.random() >= 0.5) {
        output[0] += y;
        output[1] *= 0.5;
    } else {
        output[0] *= 0.5;
        output[1] += x;
    }

    return output;
}
