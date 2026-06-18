const str='javascript';
let out="";
for(let i=0;i<str.length;i++){
//for(let i of str){
    if(str[i]=="a"){
    //if (i=="a"){
        out+=str[i];
        out+=i; // this will add the index of the character as well
    }   
}
console.log(out);