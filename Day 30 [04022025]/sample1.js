//Arrays
/*
//creation
var a = [10,20,30,40,50];
console.log(a);
var b = new Array(100,200,300,400,500);
console.log(b);

//Accessing
console.log(a[2]);
console.log(b[2]);

//Modify / Update
a[3] = 45;
console.log(a);
b[3] = 450;
console.log(b);
*/
//Methods
var a = [10,20,30,40];
console.log(a);
//push
a.push(50);
console.log(a);
//pop
a.pop()
console.log(a);
//shift
a.shift()
console.log(a);
//unshift
a.unshift(10);
console.log(a);
//Slice
console.log(a.slice(2,6));
//concat
var x = [10,20,30];
var y = [40,50,60];
console.log(x.concat(y));
console.log(y.concat(x));
//join
console.log(a);
console.log(a.join());
console.log(a.join(" $ "));
//indexOf
console.log(a.indexOf(30));
console.log(a.indexOf(300));
//foreach
var a = [1,2,3,,4,5,6];
var r1 = a.forEach(
    function(n){
        console.log("The number is: "+ n);
    }
);
//map
var a = [1,2,3,4,5,6];
var r2 = a.map(
    function(n){
        return n*2;
    }
);
console.log(r2);
//filter
var a = [1,2,3,4,5,6,7];
var r3 = a.filter(
    function(n){
        return n%2!=0;
    }
);
console.log(r3);
var a = [1,2,3,4,5];
var r4 = a.reduce(
    function(a,c){
        return a * c;
    },1
);
console.log(r4);