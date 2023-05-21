class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

let employee1 = new Employee("Areeb", "Data Engineer", 120523);
console.log(employee1.getSalary());


let employee2 = new Employee("Ramiz", "Bank Investor", 95236);
console.log(employee2.getSalary());