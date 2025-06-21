var firstName = "John";
var ingredients = ["flour", "sugar", "eggs"];
ingredients.push(1);
ingredients.push("milk");
ingredients.push("butter");
console.log(firstName);
console.log(ingredients);
var myCar = {
    color: "red",
    brandName: "Toyota"
};
console.log(myCar);
var Car = /** @class */ (function () {
    function Car(name, color, brandName) {
        this.name = name;
        this.color = color;
        this.brandName = brandName;
    }
    return Car;
}());
var bmw = new Car("BMW", "black", "BMW");
var audi = new Car("Audi", "red", "Audi");
console.log(bmw);
console.log(audi);
