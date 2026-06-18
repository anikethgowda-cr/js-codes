class Player{
    constructor(name,runs){
        this.names=name
        this.runs=runs
    }
    details(){
        return `${this.names} has played ${this.runs.length} matches`
    }
    totalRuns=function(){
        return `${this.names} has scored  `+this.runs.reduce((acc,currVal)=>acc+currVal,0)+` in ${this.runs.length} matches`
    }
}
const p1=new Player("Virat Kohli",[100,97,45])
console.log(p1.totalRuns());
console.log(p1.details());
