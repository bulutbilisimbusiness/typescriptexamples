const person1 = {
    name: "Mark"
};
class LMSCalender {
    constructor(events) {
        this.events = events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const cohort14 = new LMSCalender(["HTML", "TS"]);
console.log(cohort14);
cohort14.addEvents("React");
console.log(cohort14);
