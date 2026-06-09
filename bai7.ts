class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {}
}

class Dog extends Animal {
  public breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  public makeSound(): void {
    console.log("Gau gau");
  }
}
const myDog = new Dog("thú", "chó");
myDog.makeSound();
