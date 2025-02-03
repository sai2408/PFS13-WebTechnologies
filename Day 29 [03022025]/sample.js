//Classification of functions
//Function Declaration
/*
//WOP - WOR
function abc(){
    console.log("Hello World");
}
abc();
//WP - WOR
function abc1(a,b){
    console.log(a+b);
}
abc1(10,20);
//WP - WR
function abc2(a,b){
    return a+b;
}
var res = abc2(100,200);
console.log(res);
//WOP - Wr
function abc3(){
    return 30;
}
var res1 = abc3();
console.log(res1);
*/
//Function Expression
/*
var factorial = function(n){
    res = 1;
    for(var i=1;i<=n;i++){
        res = res * i;
    }
    console.log(res);
}
factorial(5);
*/
//Arrow function
/*
var fun1 = () => {
    console.log("sample Output");
}
fun1();
var fun2 = (a,b) => {
    console.log(a+b);
}
fun2(10,20);
*/
//IIFE
/*
(
    function(){
        console.log("Hello Codegnan");
    }
)();
(
    function(a,b){
        console.log(a+b);
    }
)(120,80);
*/
//Named function Expression
/*
var ab = function example(a,b){
    console.log(a*b);
}
ab(2,4);
*/
//recursive functions
function factorial(n){
    if (n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var res = factorial(5);
console.log(res);