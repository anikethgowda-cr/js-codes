//es6-default function parameters
function add(a=10,b=5){
    //default argument is python concept duplicated in JS   
    //console.log(a,b);
    return a+b;
}
//console.log(add());//use default values as arguments
//console.log(add(12));// variable 'a' is override
//console.log(add(2,3));//both variable is overide

function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++){
    result += str[i] + str[i]   
  }
  return result
  
}
console.log(doubleChar("Hello World"));