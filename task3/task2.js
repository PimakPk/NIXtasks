function testString(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === ')' || str[i] === '[' || str[i] === ']') {
            newStr.push(str[i]);
        }
    }

    let stack = [];
    for (let k = 0; k < newStr.length; k++) {
        if (newStr[k] === '(' || newStr[k] === '[') {
            stack.push(newStr[k]);
            continue;
        }
        if (newStr[k] === ')') {
            if (stack[stack.length - 1] != '(')
                return false;
        }
        if (newStr[k] === ']') {
            if (stack[stack.length - 1] != '[')
                return false;
        }
        if (newStr[k] === ')' || newStr[k] === ']') {
            if (stack.length === 0)
                return false;
            stack.pop();
        }
    }
    if (stack.length != 0) {
        return false;
    }
    return true;
}

//test
// console.log(testString(']isu([syvstc]ts(crs))cs()['));
// console.log(testString('()([][]([()]))['));