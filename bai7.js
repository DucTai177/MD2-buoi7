class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() { }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log("Gau gau");
    }
}
const myDog = new Dog("Milu", "Corgi");
myDog.makeSound();
