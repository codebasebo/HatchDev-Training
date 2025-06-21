// let firstName: string = "John";

// let ingredients: (string | number)[] = ["flour", "sugar", "eggs"];

// ingredients.push(1);
// ingredients.push("milk");
// ingredients.push("butter");

// console.log(firstName);
// console.log(ingredients);

// interface ICar { 
//     color: string;
//     brandName?: string;
// }

// const myCar: ICar = {
//     color: "red",
//     brandName: "Toyota"
// };
// console.log(myCar);

class Car {
    name: string;
    color: string;
    brandName: string;

    constructor(name: string, color: string, brandName: string) {
        this.name = name;
        this.color = color;
        this.brandName = brandName;
    }
}

const bmw = new Car("BMW", "black", "BMW");
const audi = new Car("Audi", "red", "Audi");

console.log(bmw);
console.log(audi);