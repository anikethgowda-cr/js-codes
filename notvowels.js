const str="javascript";
let out="";
let vowels="aeiou";
for(let i=0;i<str.length;i++){
    //if(str[i]!="a"&&str[i]!="e"&&str[i]!="i"&&str[i]!="o"&&str[i]!="u"){
    //if(vowels.includes(str[i])==false){
    if(!vowels.includes(str[i])){
        out+=str[i];
    }
}
console.log(out);


// PRINT VOWELS IN STRING0
// const str="javascript";
// let out="";
// let vowels="aeiou";
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         out+=str[i];
//     }
// }
// console.log(out);

