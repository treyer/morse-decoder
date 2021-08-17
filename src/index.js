const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let wardsArr = expr.split('**********');
    let res = '';
    for (let i = 0; i < wardsArr.length; i++){
        if (res.length > 0) res += ' ';

        if (wardsArr[i].length % 10 !== 0){
            wardsArr[i] = wardsArr[i].substring(0, -10) + "0" + wardsArr[i].substring(-9);
        }

        let symbolsArray = [];
        for (let j = 0; j < wardsArr[i].length / 10; j++){
            symbolsArray.push(wardsArr[i].substring(j * 10, j * 10 + 10));
        }

        for (let m = 0; m < symbolsArray.length; m++) {
            res = res + symbolTranslateFromDigits(symbolsArray[m]);
        }
    }
    return res;
}

let symbolTranslateFromDigits = (symbolInDigits) => {
    let symbolMorse = '';
    for (let j = 0; j < symbolInDigits.length; j += 2){
        if (symbolInDigits.substring(j, j + 2) === "10"){
            symbolMorse += '.';
        } else if (symbolInDigits.substring(j, j + 2) === "11"){
            symbolMorse += '-';
        }
    }
    return MORSE_TABLE[symbolMorse];            
}

module.exports = {
    decode
}