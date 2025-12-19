class Person { // Parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return "My name is " + this.name + " and I am " + this.age + " years old";
  }
}

class Employee extends Person { // Child class
  constructor(name, age, role) {
    super(name, age); // call parent constructor
    this.role = role;
  }

  showRole() {
    return this.introduce() + ", Role: " + this.role;
  }
}

class Teacher extends Employee { // Child of Employee
  constructor(name, age, subject) {
    super(name, age, "Teacher"); // role is fixed
    this.subject = subject;
  }

  showDetails() {
    return this.showRole() + ", Subject: " + this.subject;
  }
}

let teacher1 = new Teacher("Pihu",  25, "Mathematics");
console.log(teacher1.showDetails());
