let names=['abc','bcd','def']

Array.prototype.first=function(){
    return this[0]
}
console.log(names.first())
Array.prototype.last=function(){
    return this[this.length-1]
}
console.log(names.last())