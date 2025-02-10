//Regular Expressions [ Patterns ]
//\d
/*
var pat = /\d/gi;
var txt = "The value is 25$ rupees_123";
var matches = txt.match(pat);
console.log(matches);
*/
//\D
/*
var pat = /\D/gi;
var txt = "The value is 25$ rupees_123";
var matches = txt.match(pat);
console.log(matches);
*/
//\s
/*
var pat = /\s/gi;
var txt = "The value is 25$ rupees_123";
var matches = txt.match(pat);
console.log(matches);
*/
//\S
/*
var pat = /\S/gi;
var txt = "The value is 25$ rupees_123";
var matches = txt.match(pat);
console.log(matches);
*/
//\w
/*
var pat = /\w/gi;
var txt = "The value is 25$ rupees_123";
var matches = txt.match(pat);
console.log(matches);
*/
//\W
/*
var pat = /\W/gi;
var txt = "The value is 25$ rupees_123";
var matches = txt.match(pat);
console.log(matches);
*/
//\b
/*
var pat = /\bvalue\b/gi;
var txt = "The value is 25$ rupees_123 values are value";
var matches = txt.match(pat);
console.log(matches);
*/


//dot
/*
var pat = /a.c/gi;
var txt = "ac abc abbc ax xc a2c a#c";
var matches = txt.match(pat);
console.log(matches);
*/
//^
/*
var pat = /^The/g;
var txt = "The value is the Value";
var matches = txt.match(pat);
console.log(matches);
var pat = /^The/g;
var txt = "the value is the Value";
var matches = txt.match(pat);
console.log(matches);
var pat = /^The/gi;
var txt = "the value is the Value";
var matches = txt.match(pat);
console.log(matches);
*/
//$
/*
var pat = /Value$/g;
var txt = "the value is the Value";
var matches = txt.match(pat);
console.log(matches);
var pat = /value$/g;
var txt = "the value is the Value";
var matches = txt.match(pat);
console.log(matches);
var pat = /value$/gi;
var txt = "the value is the Value";
var matches = txt.match(pat);
console.log(matches);
*/
//*
/*
var pat = /ab*c/g;
var txt = "ac abc abbc AC ABC ABBC abxc ABXC";
var matches = txt.match(pat);
console.log(matches);
var pat = /ab*c/gi;
var txt = "ac abc abbc AC ABC ABBC abxc ABXC";
var matches = txt.match(pat);
console.log(matches);
*/
//+
/*
var pat = /ab+c/g;
var txt = "ac abc abbc AC ABC ABBC abxc ABXC";
var matches = txt.match(pat);
console.log(matches);
var pat = /ab+c/gi;
var txt = "ac abc abbc AC ABC ABBC abxc ABXC";
var matches = txt.match(pat);
console.log(matches);
*/
//?
/*
var pat = /ab?c/g;
var txt = "ac abc abbc AC ABC ABBC";
var matches = txt.match(pat);
console.log(matches);
var pat = /ab?c/gi;
var txt = "ac abc abbc AC ABC ABBC";
var matches = txt.match(pat);
console.log(matches);
*/
//{}
/*
var pat = /ab{2}c/g;
var txt = "ac abc abbc AC ABC ABBC";
var matches = txt.match(pat);
console.log(matches);
var pat = /ab{2}c/gi;
var txt = "ac abc abbc AC ABC ABBC";
var matches = txt.match(pat);
console.log(matches);
*/
//[]
/*
var pat = /[ab]c/g;
var txt = "ac bc abc AC BC abxc";
var matches = txt.match(pat);
console.log(matches);
var pat = /[ab]c/gi;
var txt = "ac bc abc AC BC abxc";
var matches = txt.match(pat);
console.log(matches);
*/
// |
/*
var pat = /abc|xyz /g;
var txt = "abc mno xyz ABC MNO XYZ";
var matches = txt.match(pat);
console.log(matches);
var pat = /abc|xyz/gi;
var txt = "abc mno xyz ABC MNO XYZ";
var matches = txt.match(pat);
console.log(matches);
*/
/*
var pattern = new RegExp("\[ab]c","gi");
var text = "ac bc xyz";
console.log(text.match(pattern));
*/