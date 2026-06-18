// const arr=["a","dc","xyz"]

// const acc={}
// for(let ele of arr){
//     acc[ele]=ele.length
// }
// console.log(acc);
// //......................................................................+

// const str="abc"                                                                        
// const acc={}
// for(let ele of str){                                                                         
//     acc[ele]=ele.toUpperCase()
// }
// console.log(acc);4
//  //......................................................................+
// function frequency(str){
//     count=1
//     const acc={}
//     for(const ele of str){
//         if(ele in acc){
//             acc[ele]+=count
//         } else {
//         acc[ele]=count
//         }
//     }
//     return acc
// }
// console.log(frequency("qwerty"));
//  //............................................................................

function repeatingChar(str){
    const result=[]
    const obj={}
    for(let val of str){
        // if(val in result){
        
        //     result[val]+=1
        // }  else{
        //     result[val]=1
        // } 
         result[val]=(result[val]?? 0)+1
    }
    for(let ele in obj){
        if(obj[ele]>1){
            result.push(ele)
        }
    }
    return result
}
console.log(repeatingChar("ababac"));
//  //............................................................





