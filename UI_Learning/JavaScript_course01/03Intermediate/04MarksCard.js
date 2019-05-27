let marksCard = function(marks, total){
    let percent = ((marks/total)*100).toFixed(2)
    let grade
    if (percent >= 90){
        grade = 'A'
    }
    else if (percent >= 80 && percent < 90){
        grade = 'B'
    }
    else if (percent >= 70 && percent < 80){
        grade = 'C'
    }
    else if (percent >= 60 && percent < 70){
        grade = 'D'
    }
    else if (percent >= 50 && percent < 60){
        grade = 'E'
    }
    else if (percent < 50){
        grade = 'Fail'
    }
    return `Percentage: ${percent}\nGrade: ${grade}`
}

console.log(marksCard(250,300))