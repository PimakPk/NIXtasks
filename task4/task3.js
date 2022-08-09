function strPad(input, fulLen, fillStr, fillType = 'FILL_RIGHT') {
    let res = '';
    let str = '';
    while (res.length <= fulLen) {
        res += fillStr;
    }
    res.length = fulLen;

    if (fillType === 'FILL_RIGHT') {
        str = input + res.slice(0, fulLen - input.length);
    } else if (fillType === 'FILL_LEFT') {
        str = res.slice(0, fulLen - input.length) + input;
    } else if (fillType === 'FILE_BOTH') {
        str = res.slice(0, (fulLen - input.length) / 2) + input + res.slice(0, (fulLen - input.length) / 2);
    }
    console.log(str);
}

//test

strPad('star', 8, '*', 'FILE_BOTH');