// complete the function
function solution(string) {
    let finString = string !== '' ? string : '';
    let pattern = /[A-Z]/g;

    if (finString !== '') {
        let cam = finString.match(pattern);

        finString = finString.split('').map(cha => {
            if (cam !== null && cam.includes(cha)) {
                return ` ${cha}`;
            }
            return cha;
        });
        finString = finString.join('');
    }

    return finString;
}

console.log(solution('hello'));
