function checkDate(str) {
    const reqExp = /\d{1,2}-\d{1,2}-\d{4}/;
    console.log(reqExp.test(str));
}