let person={
    firstName:"aniketh",
    lastName:"gowda",
    fullName:function(){
        console.log(this);
        return this.firstName+this.lastName
    },
    full:()=>{
        console.log(this);
    }


}
//console.log(this);
//console.log(person.fullName());