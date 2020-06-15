
import {} from 'path/to/module/filename';

export class Student extends Person{
    constructor(name, email, age){
        super();
        this.name = name;
        this.email = email; 
        this.age = age;
    }

    getDetails(){
        return "Name : " + this.name +"\nEmail : " + this.email + "\nAge : " + this.age;
    }
}

class Person{

}