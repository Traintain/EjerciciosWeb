import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
import { Student } from './student.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let sudentTbody: HTMLElement = document.getElementById('student')!;
let nombre: HTMLElement = document.getElementById('nombre')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnFilterByCredit: HTMLElement = document.getElementById("button-filterByCredit")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchMin: HTMLInputElement = <HTMLInputElement> document.getElementById("search-min")!;
const inputSearchMax: HTMLInputElement = <HTMLInputElement> document.getElementById("search-max")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnFilterByCredit.onclick = () => applyFilterByCredit();

renderCoursesInTable(dataCourses);

renderStudentInfo(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentInfo(students: Student[]): void {
  console.log('Desplegando info del esudiante');
  students.forEach((student) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Código</td>
                          <td>${student.codigo}</td>`;
    sudentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Cédula</td>
                          <td>${student.cedula}</td>`;
    sudentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Edad</td>
                          <td>${student.edad} años</td>`;
    sudentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Dirección</td>
                          <td>${student.direccion}</td>`;
    sudentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Telefono</td>
                          <td>${student.telefono}</td>`;
    sudentTbody.appendChild(trElement);
    nombre.innerHTML = `${student.nombre}`;
  });
}

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function applyFilterByCredit() { 
  let min = inputSearchMin.valueAsNumber;
  let max = inputSearchMax.valueAsNumber;
  min = (min==null) ? 0 : min;
  max = (max==null) ? 100 : max;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredit(min, max, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByCredit(minCred: number, maxCred: number, courses: Course[]) {
  return minCred === 0 ? dataCourses : courses.filter( c => 
    c.credits >= minCred && true);
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}
