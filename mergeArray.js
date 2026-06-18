function mergeArray(arr1,arr2){
    console.log([...arr1,...arr2])
    console.log(arr1.concat(arr2));
    

}
console.log((mergeArray([1,2,3],[4,5])));