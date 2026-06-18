const arr=["apple","banana","grapes","banana","apple","apple","grapes"]

let count=arr.reduce((acc,item)=>{
    acc[item]=(acc[item]||0)+1;
    return acc
}
,{})
console.log(count );