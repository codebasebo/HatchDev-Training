class Car {
    public brand: string;
    public readonly color: string;
    private engineOn = false;

    constructor(brand: string, color: string) {
        this.brand = brand;
        this.color = color;
    }
    protected startEngine(): void {
        this.engineOn = true;
        console.log(`${this.brand} engine started`);
    }
}

class SpeedCar extends Car {
    public boost() {
        this.startEngine();
        console.log(`${this.brand} is boosting`);
    }
}

let car1 = new Car("Toyota", "Red");
console.log(car1); // Output: Car { brand: 'Toyota', color: 'Red' }

console.log(car1.brand); // Output: Toyota
console.log(car1.color); // Output: Red

let car2 = new SpeedCar("BMW", "Blue");
console.log(car2.brand); // Output: BMW
console.log(car2.color); // Output: Blue
car2.boost(); // Output: BMW engine started


class Person {
    height: number;
    complexion: string;
    name: string;

    constructor(height: number, complexion: string, name: string = "") {
        this.height = height;
        this.complexion = complexion;
        this.name = name;
    }

    sleep(): void {
        console.log(`${this.name} is sleeping`);
    }
}

const tade = new Person(5.9, "Fair", "Tade");
tade.sleep(); // Output: Tade is sleeping

const john = new Person(6.0, "Dark", "John");
john.sleep(); // Output: John is sleeping
const jane = new Person(5.5, "Medium", "Jane");
jane.sleep(); // Output: Jane is sleeping

class student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduce(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const student1 = new student("John", 20);
student1.introduce();

const student2 = new student("Jane", 22);
student2.introduce();

const student3 = new student("Doe", 19);
student3.introduce();

const student4 = new student("Smith", 21);
student4.introduce();

const student5 = new student("Emily", 23);
student5.introduce();

class Animal {
    public name: string;
    public skinType: string;

    constructor(name: string, skinType: string) {
        this.name = name;
        this.skinType = skinType;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}
const dog = new Animal("Dog", "Fur");
dog.makeSound(); // Output: Dog makes a sound
console.log(dog);
const cat = new Animal("Cat", "Fur");
cat.makeSound(); // Output: Cat makes a sound

class Dog extends Animal {
    breed: string;

    constructor(name: string, skinType: string, Breed: string) {
        // Call the parent constructor
        // using super() and pass the parameters
        // to the parent constructor
        super(name, skinType);
        this.breed = Breed;
    }
    bark(): void {
        console.log(`${this.name} barking woof woof`);
    }
    makeSound(): void {
        console.log(`${this.name} makes a whoof sound`);
    }
}

const dog1 = new Dog("Dog", "Fur", "German Shepherd");
console.log(dog1);
dog1.makeSound(); // Output: German Shepherd makes a whoof sound
dog1.bark(); // Output: German Shepherd barking woof woof

class Bird extends Animal {
    wingspan: number;

    constructor(name: string, skinType: string, wingspan: number) {
        super(name, skinType);
        this.wingspan = wingspan;
    }
    fly(): void {
        console.log(`${this.name} is flying`);
    }
}

const eagle = new Bird("Eagle", "Feathers", 2.5);
eagle.fly(); // Output: Eagle is flying

class User {
    public name: string;
    public role: string;
    public email: string;

    constructor(name: string, role: string, email: string) {
        this.name = name;
        this.role = role;
        this.email = email;
    }

    static createGuest(): User {
        const guest = new User("User", "guest", "guest@example.com");
        console.log(`${guest.name} is a ${guest.role}`);
        return guest;
    }
    static validEmail(email: string): void {
        if (email.includes("@")) {
            console.log("Valid email");
        } else {
            console.log("Invalid email");
        }
    }
}

User.createGuest(); // Output: User is a guest
const user1 = new User("John", "admin", "john@example.com");
console.log(user1); // Output: User { name: 'John', role: 'admin', email: 'john@example.com' }

