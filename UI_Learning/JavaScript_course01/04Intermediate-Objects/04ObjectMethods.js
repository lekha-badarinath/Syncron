//My observation - JavaScript object is slowly beginning to take the shape of a class
let toDo = {
    day: "Monday",
    meetingsCount: 0,
    meetingsDone: 0,

    testMethod: function(){
        return "Hey there!"
    },

    display: function(){
        console.log(this)
    },

    addMeeting: function(num=0){
        this.meetingsCount = this.meetingsCount + num
    },

    daySummary: function(){
        return `You have ${this.meetingsCount - this.meetingsDone} meetings left for the day!`
    },

    dayReset: function(){
        this.meetingsCount = 0
        this.meetingsDone = 0
    }
}
console.log(toDo.addMeeting())  //will log "Hey there!"
toDo.display()                  //will log the entire object
toDo.addMeeting(2)
console.log(toDo)
console.log(toDo.daySummary())