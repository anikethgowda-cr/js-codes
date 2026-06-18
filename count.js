const title="javascript"
let count=0
for(let i =0;i<title.length;i++){
    if(title[i]=="a"){
        count++
    }
}
//console.log(count)
function countchar(str,ch){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==ch){
            count+=1
        }
    }
    return count;
}
console.log(countchar("google",'o'));
console.log(countchar("facebook",'O'));