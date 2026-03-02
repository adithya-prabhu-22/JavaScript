const class1 = {
    name: "Class 1",
    students: ["Alice", "Bob", "Charlie"],
    teacher: "Mr. Smith",
    getStudentCount: function() {
        return this.students.length;
    }
};

console.log(class1.name); // Output: Class 1
console.log(class1.getStudentCount()); // Output: 3

// Adding a new student to the class
class1.students.push("David");
console.log(class1.getStudentCount()); // Output: 4

// Changing the teacher of the class
class1.teacher = "Ms. Johnson";
console.log(class1.teacher); // Output: Ms. Johnson

// Adding a new method to the class
class1.getTeacherName = function() {
    return this.teacher;
};

console.log(class1.getTeacherName()); // Output: Ms. Johnson

