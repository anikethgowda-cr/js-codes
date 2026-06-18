function Person(name){
    
    console.log(this);
   
}
const p1=new Person("aniketh")
console.log(p1);
const p2=new Person("gowda")