var mypromise = new Promise((resolve,reject)=>{
    var res = false;
    setTimeout(()=>{
        if(res){
            resolve("Operation sucess");
        }
        else{
            reject("Operation Failed");
        }
    },3000);
});
mypromise
.then((result1)=>{
    console.log(result1);
})
.catch((error)=>{
    console.log("Error Occured");
})
.finally(()=>{
    console.log("Operation Completed");
})