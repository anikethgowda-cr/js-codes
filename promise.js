//Promise -Object representing the eventual completion, (success) or (failure) of an asynchronous operation. It acts as a placeholder for a value that will be available in the future. 

//State
//pending - initial
//fulfiled - Successful completed operation
//reject - error in the operation

//2 Parts of Promise Object
//1. Promise Producing Code -Create promise Object
const myPromise=new Promise((resolve/* dataType(Function) */,reject/* dataType(Function) */)=>{
    let done=true
    if(done){
        resolve("completed")
    }
    else{
        reject("failed")
    }

})


//2. Promise Consuming Code -Handling promise Object Using then and catch methods 
//90% - promise consuming code(API fetching)
myPromise
.then((sucessMsg)=>{
    console.log(sucessMsg);
})
.catch((failureMSg)=>{
    console.log(failureMSg);
    
})