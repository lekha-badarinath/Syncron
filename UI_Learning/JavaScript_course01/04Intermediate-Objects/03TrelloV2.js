let toDo = {
    day: "Monday",
    meetings: 0,
    meetingsDone: 0
}

let addMeetings = function(list, newMeeting=0){
    list.meetings = list.meetings + newMeeting
}

let addMeetingsDone = function(list, newMeetingDone = 0){
    list.meetingsDone = list.meetingsDone + newMeetingDone
}

let restDay = function(list){
    list.meetings = 0
    list.meetingsDone = 0
}

let getSummary = function(list){
    let meetingSummary = list.meetings - list.meetingsDone
    return `You have ${meetingSummary} meeting left for the day.`
}

addMeetings(toDo,4)
addMeetingsDone(toDo,3)
console.log(getSummary(toDo))
