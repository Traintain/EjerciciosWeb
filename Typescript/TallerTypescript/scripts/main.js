import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var sudentTbody = document.getElementById('student');
var nombre = document.getElementById('nombre');
var btnfilterByName = document.getElementById("button-filterByName");
var btnFilterByCredit = document.getElementById("button-filterByCredit");
var inputSearchBox = document.getElementById("search-box");
var inputSearchMin = document.getElementById("search-min");
var inputSearchMax = document.getElementById("search-max");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnFilterByCredit.onclick = function () { return applyFilterByCredit(); };
renderCoursesInTable(dataCourses);
renderStudentInfo(dataStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInfo(students) {
    console.log('Desplegando info del esudiante');
    students.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>C\u00F3digo</td>\n                          <td>" + student.codigo + "</td>";
        sudentTbody.appendChild(trElement);
        trElement = document.createElement("tr");
        trElement.innerHTML = "<td>C\u00E9dula</td>\n                          <td>" + student.cedula + "</td>";
        sudentTbody.appendChild(trElement);
        trElement = document.createElement("tr");
        trElement.innerHTML = "<td>Edad</td>\n                          <td>" + student.edad + " a\u00F1os</td>";
        sudentTbody.appendChild(trElement);
        trElement = document.createElement("tr");
        trElement.innerHTML = "<td>Direcci\u00F3n</td>\n                          <td>" + student.direccion + "</td>";
        sudentTbody.appendChild(trElement);
        trElement = document.createElement("tr");
        trElement.innerHTML = "<td>Telefono</td>\n                          <td>" + student.telefono + "</td>";
        sudentTbody.appendChild(trElement);
        nombre.innerHTML = "" + student.nombre;
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function applyFilterByCredit() {
    var min = inputSearchMin.valueAsNumber;
    var max = inputSearchMax.valueAsNumber;
    min = (min == null) ? 0 : min;
    max = (max == null) ? 100 : max;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredit(min, max, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByCredit(minCred, maxCred, courses) {
    return minCred === 0 ? dataCourses : courses.filter(function (c) {
        return c.credits >= minCred && true;
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
