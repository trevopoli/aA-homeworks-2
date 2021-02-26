function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
}

Student.prototype.name = function () {
    return this.firstName.concat(" ", this.lastName);
}

const jeff = new Student("Jeff", "Walker");

console.log(jeff.name());

Student.prototype.enroll = function (course) {
    if (this.courses.includes(course)){
        return;
    } else {
        this.courses.push(course);
        course.addStudent(this);
    }
}

Student.prototype.courseLoad = function () {
    let courseLoad = 0;

    this.courses.forEach(course => {
        courseLoad = courseLoad + course.credits;
    });

    return courseLoad;
}

function Course(title, department, credits) {
    this.title = title;
    this.department = department;
    this.credits = credits;
    this.students = [];
}

Course.prototype.addStudent = function (student){
    this.students.push(student);
}

const algebra = new Course("Algebra", "Math", 4);

jeff.enroll(algebra);

console.log(jeff.courseLoad());
console.log(algebra.students[0].courses);