interface Person{
    name:string;
}
const person1:Person={
    name:"Mark"
}
interface Calender {
    events:string[];
    addEvents(event:string):void;
}

class LMSCalender implements Calender{
    constructor(public events:string[]){
        
    }
    addEvents(event: string): void {
        this.events.push(event)
    }
}
const cohort14= new LMSCalender(["HTML","TS"])
console.log(cohort14)
cohort14.addEvents("React")
console.log(cohort14) 