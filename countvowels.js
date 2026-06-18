const str="javascript";
const vowels="aeiouAEIOU";
let countVow=0
for(let i=0;i<str.length;i++){
   if(vowels.includes(str[i])){
        countVow+=1;
    }
}
console.log(countVow);
 