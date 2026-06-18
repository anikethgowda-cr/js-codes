function arrange(arr){
    const evens=arr.filter(ele=>ele%2==0);
    const odds=arr.filter(ele=>ele%2==1);
    //return {evens:evens,odds:odds}
    //es6  feature-concise propert->when property name&varibale name is the same ,we can make use or this
    return {evens,odds}
}
console.log((arrange([10,11,12,13,14])));