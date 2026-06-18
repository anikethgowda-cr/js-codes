const person={
    firstName:'John',
    lastName:"smith",
    fullName:function(){
        return this.firstName+'...'+this.lastName
    }
};
console.log(person.fullName());