
// ES6 way - setup the babel config
// import {} from 'path/to/module/filename';

// ES5 way
// module.exports = {}
// require();


class Person{
    constructor(){}
}

class Student extends Person{
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

let foo = new Student("Foo Bar", "foo@test.com", 34);
console.log(foo.getDetails());
