//RegExp
//Creation
//Literal Notation
/*
var re1 = /j.*t/;
console.log(re1);
console.log(re1.global);
console.log(re1.ignoreCase);
console.log(re1.multiline);
*/
/*
var re1 = /j.*t/gmi;
console.log(re1);
console.log(re1.global);
console.log(re1.ignoreCase);
console.log(re1.multiline);
*/
//Object Construtor
/*
var re2 = new RegExp("j.*t");
console.log(re2);
console.log(re2.global);
console.log(re2.ignoreCase);
console.log(re2.multiline);
*/
/*
var re2 = new RegExp("j.*t","img");
console.log(re2.global);
console.log(re2.ignoreCase);
console.log(re2.multiline);
*/
//Methods of RegExp
/*
var r1 = /j.*t/;
console.log(r1.test("javascript"));
var r1 = /j.*t/i;
console.log(r1.test("Javascript"));
*/
/*
var r1 = /j.*t/;
console.log(r1.exec("javascript"));
var r1 = /j.*t/i;
console.log(r1.exec("Javascript"));
*/
//Methods of String
//match
/*
var re = /j.*t/;
var s = "Javascript";
console.log(s.match(re));
var re = /j.*t/i;
var s = "Javascript";
console.log(s.match(re));
*/
//search
/*
var re = /j.*t/;
var s = "Javascript";
console.log(s.search(re));
var re = /j.*t/i;
var s = "abcJavascriptxyz";
console.log(s.search(re));
*/
//replace
/*
var re = /j.*t/;
var s = "abcJavascriptxyz";
console.log(s.replace(re,"python"));
var re = /j.*t/i;
var s = "abcJavascriptxyz";
console.log(s.replace(re," python "));
*/