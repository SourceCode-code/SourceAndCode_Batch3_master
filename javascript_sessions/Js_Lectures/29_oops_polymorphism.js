// ploymorphism --> this is a core oops concept which allows diiferent type of object and classes  to be treated as if they are same type 


//ploymirpohimh is a method which enables class with same name to behave differently 


class shape {
    getArea() {
        throw new Error("get arera method must be implement first")
    }
}


class circle extends shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }

}



class rectangle extends shape {
    constructor(height, width) {
        super()
        this.height = height
        this.width = width
    }
    getArea() {
        return this.width * this.height
    }
}
let newcr = new circle(10)

console.log(newcr.getArea())

let rec = new rectangle(10, 12)

console.log(rec.getArea())


