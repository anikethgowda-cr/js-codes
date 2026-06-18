// let array=["apple","banana","mango","orange"];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// array.forEach(v=>{
//     console.log(v);
// })
// for(let i of array){
//     console.log(i);
// }


// let names=["chatgpt","claude","gemini"];

// for(let i=0;i<names.length;i++){
//     console.log(names[i].toUpperCase());
// }


// let apl=["ab","abc","ac"];
// let result=[];
// for(let i of apl){
//     result.push(i.toUpperCase())   
// }
// console.log(result);

// let names=["ab","abc","ac"];

// for(let i=0;i<names.length;i++){
//    names[i]=names[i].toUpperCase();
// }
// // console.log(names);


// const companies=["microsoft",'apple','google'];
// for(let i of companies){
// console.log(i[0]+i[i.length-1]);

// }

// const companies1=["microsoft",'apple','google'];
// for(let i=0;i<companies1.length;i++){
//     console.log(companies1[i][0]+companies1[i][companies1[i].length-1]);
// }



// 

let numbers=new Array()

for(let i=11;i<21;i++){
    numbers.push(i)
}
console.log(numbers);

let sum=0;
for(let i=0;i<numbers.length;i++){
    
    sum+=numbers[i]
}
console.log(`Total Sum =${sum}`);