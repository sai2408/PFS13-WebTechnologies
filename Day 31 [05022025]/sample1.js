//Objects
//Creation
var ob1 = {
    10 : 200,
    20 : "Hello",
    name : "Abc"
};
console.log(ob1);
var ob2 = new Object();
ob2.name = "Hello";
ob2.age = 50;
console.log(ob2);
//Accessing
console.log(ob1.name);
console.log(ob1["10"]);

var ob1 = {
    name : "hello",
    age : 26
};
console.log(ob1);
//Insertion
ob1["10"] = 200;
console.log(ob1);
ob1.branch = "CSE";
console.log(ob1);
//Updation
ob1["10"] = 250;
console.log(ob1);
ob1.branch = "ECE";
console.log(ob1);
//Deletion
delete ob1["10"] ;
console.log(ob1);
delete ob1.name;
console.log(ob1);
//Methods
console.log(Object.keys(ob1));
console.log(Object.values(ob1));
console.log(Object.entries(ob1));