function substrCount(input, needle, offset, length) {
    if (length < offset || input.length < needle.length) {
        return false;
    }
    let counter = 0;
    let res = 0;
    for (let i = offset; i < length; i++) {
        if (input[i] === needle[counter]) {
            if (counter === needle.length - 1) {
                res++;
                counter = 0;
                continue;
            }
            counter++
        } else {
            counter = 0;
        }
    }
    return res;
}

//test

// console.log(substrCount('dgfchcigsjvkvc', 'c', 0, 21));