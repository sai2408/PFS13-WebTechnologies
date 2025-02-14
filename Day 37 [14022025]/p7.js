//promise.allSettled()
Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve("Operation 1"),2000)),
    new Promise(resolve => setTimeout(() => resolve("Operation 2"),1000)),
    new Promise(resolve => setTimeout(() => resolve("Operation 3"),3000)),
    Promise.reject("Rejected Session")
])
.then(result =>{
    console.log(result);
})
.catch(()=>{
    console.log("Rejection Occured");
})