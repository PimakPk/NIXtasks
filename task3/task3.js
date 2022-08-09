class CircleArray {
    constructor() {
        this.arr = [];
    }
    add(str) {
        this.arr.push(str);
    }
    get(index) {
        // index = this.arr.length - 1 % index;
        if (index >= 0) {
            while (true) {
                if (index > this.arr.length - 1) {
                    index -= this.arr.length;
                } else {
                    break;
                }
            }
        } else {
            while (true) {
                if (index < 0) {
                    index += this.arr.length;
                } else {
                    break;
                }
            }
        }
        return this.arr[index];
    }
}

//test
const circleArray = new CircleArray();

circleArray.add('Kharkiv');
circleArray.add('Dnepr');
circleArray.add('Kiev');
circleArray.add('Lviv');

console.log(circleArray.get(1));