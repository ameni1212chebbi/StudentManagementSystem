Amine-Ameni-objects2
 //Q2
 var numberOfStudents===0
 // Q2
var numberOfStudents = 0;
// Q3
function addStudent(){
numberOfStudents ++
}
// Q4
function getNumberOfStudents(){
    return numberOfStudents;
}
// Q5
var students = [];
// Q6
function addStudent(name) {
    students.push(name)
}
// Q7
["ameni", "slim", "ines", "alaya", "ouissal"]
// Q8
function clearStudents(name) {
    students.splice(0,students.length)
    numberOfStudents = 0;
}
// Q9
function addStudent(name) {
    students.push(name)
    numberOfStudents = students.length
    }
// Q10
function createFullName(firstName, lastName) {
        return firstName + " "+lastName
    }
// Q11
// Q12
function getStudentByInitials(name,intial){
    if( name[0]===intial){
        return true
    }
return false
}
// Q13
function isFullName(name) {
    if(name.split(' ').length >1){
     return true
 }
 return false}
//  Q14
function getStudentSByInitials(initial) {
    }
    