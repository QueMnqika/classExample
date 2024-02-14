class Person {
    static count = 0 //
    constructor(){
        this.firstName = 'Provide first Name',
        this.lastName = 'Provide Last Name',
        this.age = 0,
        Person.count += 1 //accessing the count variable using the class name
    }
    set FirstName(value){
        this.firstName = value
    }
    get FirstName(){
        return this.firstName
    }
    set LastName(value){
        this.lastName = value
    }
    get LastName(){
        return this.lastName
    }
    set Age(value){
        this.age = value
    }
    get Age(){
        return this.age
    }
    // display method
    display(){
        console.log(`
        ID: ${Person.count}
        Name: ${this.FirstName}
        Surname: ${this.LastName}
        Age: ${this.Age}
        `);
    }
}
// export the class ALWAYS to be able to use it in your app
export{
    Person
}