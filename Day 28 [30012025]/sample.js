//While Loop
/*
var x = 1;
while (x <= 10){
    console.log(x);
    x = x + 1;
}
*/
/*
var x = 1;
while (x<=50){
    console.log(x);
    x = x + 2;
}
*/
/*
var  n = 141;
var x = n;
var res = 0;
while (n>0){
    r = n%10;
    res = (res*10) + r;
    n = parseInt(n/10);
}
if (x==res){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome !");
}
*/
/*
var n = 1;
while(n<=10){
    console.log(n);
    n++;
}
var n = 1;
do{
    console.log(n);
    n++;
} while(n<=10);
*/
/*
var n = 141;
var x = n;
var res = 0;
do{
    r = n%10;
    res = (res*10)+r;
    n = parseInt(n/10);
}while (n>0);
if (res == x){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome !");
}
*/
/*
var i;
for(i=0;i<=10;i++){
    console.log(i);
}
*/
/*
for(var i=1;i<=10;i=i+2){
    console.log(i);
}
*/
/*
var x = [100,200,300,400,500];
var res = 0;
for(var i=0;i<5;i++){
    res = res + x[i];
}
console.log(res);
*/
/*
var obj = {1:100,2:200,3:300,4:400};
for (var k in obj){
    console.log(k);
}
var obj = {1:100,2:200,3:300,4:400};
for (var k in obj){
    console.log(obj[k]);
}
*/
/*
var x = [10,20,30,40,5];
for (var k of x){
    console.log(k);
}
var res = 0;
var x = [10,20,30,40,5];
for (var k of x){
    res = res + k;
}
console.log(res);
*/
//Loop control Statements
//Break
for(var i=0;i<=5;i++){
    if (i==3){
        break
    }
    console.log(i);
}
//Continue
for(var i=0;i<=5;i++){
    if (i==3){
        continue;
    }
    console.log(i);
}