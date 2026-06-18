//function decleration 
// function print(name){
//     return "hi"+name;
// }
// console.log(print("aniketh"));

//function expression =storing anonmyous to a variable and calling that varibale is called as functional expression  
//when a variable is assigned a function as its value
const print=(name)=>{  //anomyous function- function without name is called as anonmyous function 
    return "Hi! "+name;
}
console.log(print("Gowda:)"));


arr=["salt","virat","ddp","Rp","Js","Tim"]
arr.forEach((value,index,array)=>{
    console.log(index,value);
})

//find sum of array
array=[10,23,23,21,234,1234,45]
// let sum=0;
// array.forEach(function(v){//anomymous function(Es5 feature)
//     sum+=v;
    
// })
// console.log(sum);
let sum=0;
array.forEach((v)=>{//using arrow function(Es6 feature)
    sum+=v;
    
})
console.log(sum);