class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public printInfo(): void {
    console.log(`Tên nhân viên: ${this.name}, Lương: ${this.salary}`);
  }
}

const emp = new Employee("Alice", 2000);
emp.printInfo(); // Cho phép in ra thông tin lương thông qua phương thức nội bộ

// console.log(emp.salary);
