const dev={
    firstName:"steve",
    lastName:"jobs",
    skills:["js","java","py"],
    details:function(){
        //console.log(this); CURRENT OBJECT
        //this.skills.forEach((function(ele){
        //console.log(this);}) GLOBAL OBJECT
        this.skills.forEach((skill)=>{
            //console.log(this); CURRENT OBJECT 
            console.log(`${this.firstName} knows ${skill}`);
        })
    }
}
dev.details()


function unpack(obj){
    let res="";
    for(const ch in obj){
        res+=ch.repeat(obj[ch])
        // for(i=0;i<obj[ch];i++){
        //     res+=ch;
        // }
    }
    return res;
}

console.log(unpack({a:3,b:2,c:1}));

function sti(str){
    const obj={};
    for(let i=0;i<str.length;i++){
        const char=str[i];
        if(char in obj){
           obj[char].push(i);
        }
        
        else{
            obj[char]=[i];
        }
        
    }
    return obj;
}

console.log(sti("dctddcdt"))

function sti2(obj){
    const str=[];
    for(const i in obj){
        obj[i].forEach(ele => {
            str[ele]=i;
        });
       

    }
    return str.join('');
}

console.log(sti2({ d: [ 0, 3, 4, 6 ], c: [ 1, 5 ], t: [ 2, 7 ] }))