//Strings
//creation
/*
var s1 = 'Hello World';
console.log(s1);
var s2 = "Hello world";
console.log(s2);
var s3 = new String('Hello World');
console.log(s3);
var s4 = new String("Hello World");
console.log(s4);
console.log(s4.length);
console.log(s1.length);
var s6 = "abcd";
console.log(s6[3]);
console.log(s6[13]);
*/
//String Methods
//charAt()
/*
var s1 = "Hello World";
console.log(s1.charAt(0));
console.log(s1.charAt(6));
console.log(s1.charAt(16));
*/
//charCodeAt()
/*
s = "abcdABCD";
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(4));\
*/
//concat()
/*
s1 = "Hello";
s2 = " ";
s3 = "World";
console.log(s1.concat(s2,s3));
console.log(s3.concat(s2,s1));
*/
//startswith()
/*
s1 = "Hello World";
console.log(s1.startsWith("H"));
console.log(s1.startsWith("Hello"));
console.log(s1.startsWith("World"));
*/
//endsWith()
/*
s1 = "Hello World";
console.log(s1.endsWith("d"));
console.log(s1.endsWith("World"));
console.log(s1.endsWith("Hello"));
*/
//includes()
/*
var s1 = "abc xyz mno";
console.log(s1.includes("abc"));
console.log(s1.includes("mno"));
console.log(s1.includes("xyz"));
console.log(s1.includes("hello"));
*/
//tolowercase()
/*
s1 = "Hello World";
console.log(s1.toLowerCase());
*/
//touppercase()
/*
var s1 = "Hello World";
console.log(s1.toUpperCase());
*/
//indexof()
/*
var s1 = "abcdabcd";
console.log(s1.indexOf("b"));
console.log(s1.indexOf("c"));
console.log(s1.indexOf("z"));
*/
//lastIndexof()
/*
var s1 = "abcdabcd";
console.log(s1.lastIndexOf("b"));
console.log(s1.lastIndexOf("c"));
console.log(s1.lastIndexOf("z"));
*/
//repeate()
/*
var x = "hello "
console.log(x.repeat(3));
*/
//replace()
/*
var x = "Hello";
console.log(x.replace("l","t"));
*/
//replaceall()
/*
var x = "hello";
console.log(x.replaceAll("l","t"));
*/
//slice()
/*
var x = "hello world";
console.log(x.slice(2,5));
console.log(x.slice(6,11));
console.log(x.slice(12,15));
*/
//split()
/*
var s1 = "hello,world,codegnan";
console.log(s1.split(","));
var s2 = "hello$worldcodegnan";
console.log(s2.split("$"));
*/
//trim()
/*
var x = "Hello";
console.log(x.trim());
var x1 = "Hello      ";
console.log(x1.trim());
var x2 = "       Hello";
console.log(x2.trim());
var x3 = "      Hello       world       ";
console.log(x3.trim());
*/