const p1={
    name:"virat",
    score:[90,60,100,70,80],
    totalRuns:function(){
        let total=0
        let scores=this.score
        for(let val of scores){
            total+=val  
        }
        return total
    },
    highestScore:function(){
        let scores=this.score
        let high=scores[0]
        for(let val of scores){
            if(val>high){
                high=val
            }
        }
        return high
    }
}
console.log(p1.totalRuns());
console.log(p1.highestScore());