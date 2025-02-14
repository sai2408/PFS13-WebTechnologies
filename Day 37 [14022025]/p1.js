var mypromise = new Promise((resolve,reject)=>{
    var res = true;
    setTimeout(()=>{
        if(res==true){
            resolve("Operation sucess");
        }
        else{
            reject("Operation Failed");
        }
    }),1000
});