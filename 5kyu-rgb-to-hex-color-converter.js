function rgb(r, g, b) {
    let rgbColor = [r, g, b].map(x => x / 16);

    const matcher = num => {
        return num <= 0 ? '0' : num === 14 ? 'E' : num === 10 ? 'A' : num === 11 ? 'B' : num === 12 ? 'C' : num === 13 ? 'D' : num >= 15 ? 'F' : num;
    };

    const hex = rgbColor.map(x => {
        if (x * 16 >= 255) {
            return 'FF';
        } else if (x * 16 <= 0) {
            return '00';
        }

        if (Number.isInteger(x)) {
            let v = x <= 0 ? '00' : x === 14 ? 'E0' : x === 10 ? 'A0' : x === 11 ? 'B0' : x === 12 ? 'C0' : x === 13 ? 'D0' : x === 11 ? 'B0' : `${x}0`;
            return v;
        } else {
            const bit = x.toString().split('.');
            let bit1 = matcher(bit[0] * 1);

            let bit2 = matcher('.'.concat(bit[1]) * 1 * 16);

            return bit1.toString().concat(bit2.toString());
        }
    });

    return hex.join('').toUpperCase();
}

console.log(rgb(142, 148, 224));

const b1 = (document.querySelector('#b1').style.backgroundColor = 'rgba( 142,148,224)');
const b2 = (document.querySelector('#b2').style.backgroundColor = `#${rgb(142, 148, 224)}`);
