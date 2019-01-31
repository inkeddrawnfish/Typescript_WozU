function Person (first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

var myFather = newPerson("John", "Doe", "50", "blue")
var myMother = newPerson("Sally", "Rally", "48", "green")

class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
}

const Rectangle = class {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};

const Rectangle = class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};

class Rectangle {
    height: number;
    width: number;

    constructor(height: number, width: number){
        this.height = height;
        this.width = width;

        perimeter(): number {
            return (this.height * 2) + (this.width * 2)
        }
    }
}

var square = new Rectangle(2,2);
console.log(square.perimeter());