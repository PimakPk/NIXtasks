function findChrom(str) {
    let reqExp = /хром/;
    return str.search(reqExp);
}

//test
// console.log(findChrom('Ми знаємо, що монохромний колір – це градації сірого'));