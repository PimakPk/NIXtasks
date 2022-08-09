function isEven(count) {
    // if (count.toString(2)[count.toString(2).length - 1] == 1) {
    //     return false;
    // } else {
    //     return true;
    // }

    if (count & 1) {
        return false;
    } else {
        return true;
    }
}

//test

console.log(isEven(5));