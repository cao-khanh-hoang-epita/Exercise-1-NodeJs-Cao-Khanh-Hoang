const student = {
    name : "Marie",
    age : "20",
    courses : [],
}

student.age = 21
student.grade = "A"

student.courses.push("Math","Physics","Chemistry")

console.log(student)    

console.log(student.courses.indexOf("Physics"))

const Slicedcourse = student.courses.slice(0,2)

console.log(Slicedcourse)