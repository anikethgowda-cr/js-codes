// function namesUpper(strArr){
//     let result=[];
//     strArr.forEach((value)=>{
//         result.push(value.toUpperCase());
//     });
//     return result
// }
//console.log(namesUpper(["virat","rohith","msd"]));

// let namesUpper=strArr=>{
//     let result=[]
//     strArr.forEach(v=>{
//         result.push(v.toUpperCase())
//     })
//     return result
// }
// console.log(namesUpper(["virat","rohith","msd"]));


// let nameUpper=strArr=>{
//     let result=strArr.map(n=>{

//         return n.toUpperCase()
        
//     });
//     return result;
// }
// console.log(nameUpper(["virat","rohith","msd"]));


// arr=['virat','rohith','msd']
// let result=[]
// for(let val of arr){
//     result.push(val.toUpperCase())
// }
// console.log(result);

// arr=['virat','rohith','msd']

// let result=[]
// for(let i=0;i<arr.length;i++){
//        result.push(arr[i].toUpperCase())
// }
// console.log(result);


// let check=(array)=>{
//     let result=array.filter((x)=>{
//         return x%2==0;
//     })
//     return result;
// }
// console.log(check([1,2,3,4,5,6,7,8,9,10]));


// function hasA(strArr){
//     result=[]
//     strArr.forEach(ele => {
//         if(ele.includes("a")){
//             result.push(ele)
//         }     
//     });
//     return result;
// }
// console.log(hasA(["adam","sara","nicks","robin","aniketh"]));

// let hasA=(strArr)=>{
//     let result=strArr.filter((x)=>{
//         return x.includes("a")
//     })
//     return result
// }
// console.log(hasA(["adam","sara","nicks","robin","aniketh"]));


// //return the first elemnets in array which satisfy the condition 
// let greater30=arr=>{
//     let result=arr.find(ele=>{
//         return ele>=30;
//     })
//     return result;
// }
// console.log(greater30([10,20,30,40,50,60]));

// //return the index number of the element which satisfy the condtion 
// let arr=[10,20,30,40,50,60]
// const idx=arr.findIndex(function(ele){
//     return ele>=25;
// })
// console.log(idx);


// let number=[10,20,30,40,50,60]
// let res=number.some(x=>x>120)
// console.log(res)

// console.log(number.every(x=>x>9));


// let truthyValues=arr=>{
//     let result=arr.filter((ele)=>{
//         return Boolean(ele);
//     })
//     return result
// }
// console.log(truthyValues([10,0,-1,'',"dct",null,NaN,[]]));


// let jackPort=arr=>{
//     let result=arr.every(val=>{
//         return val===arr[0]

//     })
//     return result
// }
// console.log(jackPort(['@','@','@','@']));
// console.log(jackPort(["$$",'$$$','$$$','$$']));

// function jackPort(arr){
//     for(let val of arr){
//         if(val !=arr[0]){
//             return false
//         }
//     }
//     return true
// }
// console.log(jackPort(['@','@','@','@']));
// console.log(jackPort(["$$",'$$$','$$$','$$']));
// console.log(jackPort(['@','@','@','@@']));



// function sumEvenIndex(arr){
//     let result=arr.filter(val=>{
//         return val%2==0
//     }).reduce((sum,ele)=>{
//         return sum+ele
//     })
// return result
// }
// console.log(sumEvenIndex([98,1,99,100,36,43]))
// let arr=[98,1,99,100,36,43]
// const result=arr.reduce((acc,ele)=>{
//     if(ele%2==0){
//         return acc+ele
//     }
// },0);
// console.log(result);




function evenNumber(arr){
    let result=arr.reduce((acc,ele)=>{
        if(ele%2==0){
            acc.push(ele)
            
        }
        return acc;

    },[])
return result
}


console.log(evenNumber([11,12,14,13,14,15,16]));
