// const myString="javascript";
// const char="a";
// let count=0;
// for(let i=0;i<myString.length;i++){
//     const ch=myString[i];
//     if(ch===char){
//         count+=1
//     }
// }
// console.log(count);

// const str="ASDFCcAWEDXEaWERDSAWt";
// const alp="abcdefghijklmnopqrstuvwxyz";
// let out="";
// for(let i=0;i<str.length;i++){
//     if(alp.includes(str[i])){
//         out+=str[i];
//     }
// }
// console.log(out);

const str="ASDFCcAWEDXEaWERDSAWt";
let out="";
for(let i=0;i<str.length;i++){
    if(str[i]>="a" && str[i]<="z"){
        out+=str[i];
    }
}
console.log(out); 


