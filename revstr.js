function reverseMyString(str){
    let result=""
    for(let i=0;i<str.length;i++){
        result=str[i]+result
    }
    return result
}

console.log(reverseMyString("aniketh"));
console.log(reverseMyString("react"));