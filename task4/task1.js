function isPowOfTwo(count) {
    res = 2;
    while (res <= count) {
        if (count == res) {
            return true;
        }
        res <<= 1;
    }
    return false;
}

//test 

// console.log(isPowOfTwo(17));