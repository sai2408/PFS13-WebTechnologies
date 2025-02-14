//promise.all()
Promise.all([
    Promise.resolve("Operation 1"),
    new Promise(resolve => setTimeout(() => resolve("Operation 2"),2000)),
    Promise.resolve("Operation 3"),
    //Promise.reject("Rejected Session")
])
.then(result =>{
    console.log(result);
})
.catch(()=>{
    console.log("Rejection Occured");
})