let names = []
let grades = []
let continueLoop = true
let gradeSum = 0
let arraysPosition = 0


while (continueLoop) {
    let insertName = prompt("What is the student's name?: ")
    let insertGrade = parseFloat(prompt("What is the student's grade?: "))
    names[arraysPosition] = insertName
    grades[arraysPosition] = insertGrade
    gradeSum += insertGrade
    arraysPosition++
    let continueOrNot = parseInt(prompt("If you want to stop type 1, otherwise just click ENTER."))
    if (continueOrNot === 1) {
        continueLoop = false
    }
}

for (i = 0; i < names.length; i++) {
    console.log("Student: ", names[i], ", Grade: ", grades[i])
}
console.log("Grade sum: ", gradeSum)
console.log("Average grade: ", gradeSum / arraysPosition)