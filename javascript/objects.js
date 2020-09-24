console.log("connected");

var objectSample = {
    fileName: "value"
}

console.log(objectSample["fileName"]);

var person = {
    name: "Thales",
    age: 24
}

console.log(person.name + " " + person.age);

console.log(person);

// in october

person.age += 1;

console.log(person.age);

// data can be added iteractively

var anotherPerson = new Object();
anotherPerson.name = "Gustavo";

console.log(anotherPerson);