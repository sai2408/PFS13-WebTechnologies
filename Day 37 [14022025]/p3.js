var mypromise = new Promise((resolve,reject) => {
    let value = true;

    setTimeout(() => {
        if(value){
            resolve("Operation sucess");
        } else {
            reject("Operation Failed");
        }
    },3000)
});

async function handleevents(){
    try{
        let result = await mypromise;
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
    finally{
        console.log("Operation Completed");
    }
}
handleevents();