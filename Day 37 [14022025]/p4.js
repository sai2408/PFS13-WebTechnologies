var mypromise = new Promise((resolve,reject) => {
    let value = true;
    setTimeout(() => {
        if(value){
            resolve(10);
        } else {
            reject("Rejection Applied");
        }
    },3000)
});
mypromise
.then((result)=>{
    console.log(result);
    return result + 10;
})
.then((result2)=>{
    console.log(result2);
    return result2+10;
})
.then((result3)=>{
    console.log(result3);
})