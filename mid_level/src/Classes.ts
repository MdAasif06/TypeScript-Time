class Person {
  //properties
  private name: string;
  protected age: number;
  public email: string;

  ///constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  //method
  public introduce(): string {
    return `Hi I'm ${this.name} and I'm ${this.age} year old.`;
  }

  //getter
  public getName(): string {
    return this.name;
  }

  //setter
  public setName(name: string): void {
    this.name = name;
  }
}
const p1 = new Person("Asif", 22, "asif@gmail.com");
// console.log(p1)
// console.log(p1.introduce())
// console.log(p1.getName())
// p1.setName("alam");
// p1.setName("shah")
// console.log(p1.getName())

class Employee {
  constructor(
    private id: number,
    public name: string,
    protected deparment: string,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.deparment}`;
  }
}
// let EMP1=new Employee(101,"asif","Engineering")
// console.log(EMP1.getDetails())

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    deparment: string,
    private teamSize: number,
  ) {
    super(id, name, deparment);
  }
  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize} people`;
  }
}
const m1 = new Manager(1, "asid", "cse", 45);
// console.log(m1.getTeamInfo());
