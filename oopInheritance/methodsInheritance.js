/*
Employees and Managers
1. Create constructor functions with properties representing the following:
    ○ Person: name, surname
    ○ Employee: inherits Person and has job and salary
    ○ Developer: inherits from Employee and has specialization
    ○ Manager: inherits from Employee and has department
2. All developers should inherit method:
    ○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
    ○ getDepartment which prints out the name of the department
    ○ changeDepartment which sets the department value on the given value
4. All employees should inherit methods:
    ○ getData which returns the name, surname and salary
    ○ getSalary which prints out the salary
    ○ increaseSalary which increases the salary by 10%

*/
/// PERSON //////

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}
// EMPLOYEE //////

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;


}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function() {
    return this.getFullName() + ' salary: ' + this.salary;
}
Employee.prototype.getSalary = function() {
    console.log('Salary is: ' + this.salary);
}
Employee.prototype.increaseSalary = function() {
    return 'Increased salary is:' + ((this.salary * 10) / 100 + this.salary); 
}
var employee = new Employee('Pera', 'Peric', 'Frontend', 500);
console.log(employee.getData());

// DEVELOPER ////

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
 
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function() {
    console.log('Name of the specialization: ' + this.specialization);
};
var developer = new Developer('Milos', 'Kuzmic', 'Backend', 800, 'NodeJS');
console.log(developer.getData());
console.log(developer.increaseSalary());
// MANAGER ////

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;

}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function() {
    console.log('Name of departmen: ' + this.department);
}
Manager.prototype.changeDepartmen = function(newDepartmen) {
    this.department = newDepartmen;
};
var manager = new Manager('Ime', 'Prezime', 'PR', 1500, 'Local department');
manager.changeDepartmen('Human resorce');
console.log(manager.department);
console.log(manager.getData());
console.log(manager.increaseSalary());
/*
Applications:
1. Create constructor functions with properties representing the following:
    ○ WebApp: name, url, technologies, licence, stars
    ○ MobileApp: name, platforms, licence, stars
2. All web applications should inherit methods:
    ○ getData which prints out all the information
    ○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
    ○ getData which prints out all the informations
    ○ forAndroid which checks if one of the platforms the application is developed for is
        Android

4. Both web and mobile applications should inherit methods:
    ○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
    ○ like which increases the number of stars by one
    ○ showStars which prints out the number of stars
    dodati construktorsku funciju APP pa da se od nje nasledjuje

*/

///// WEB APP/////
console.log('------Aplication excercise------');
function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars)
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.getData = function(){
    console.log(this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.licence + ' ' + this.stars);
}

WebApp.prototype.reactBased = function() {
    if (this.technologies === 'React') {
        return true;
    }
    return false;
}
WebApp.prototype.isCCLicence = function() {
    if (this.licence === 'CC') {
        return true;
    }
    return false;
}
WebApp.prototype.like = function() {
   return this.stars++;
}
WebApp.prototype.showStars = function() {
    return console.log('Number of stars: ' + this.stars);
}
var web = new WebApp('Google', 'google.rs', 'React', 'AA', 4);
console.log('---WebApp---');
web.getData();
console.log('Done in React: ' + web.reactBased());
console.log('Is licence CC: ' + web.isCCLicence());
web.like();
web.showStars();

/// MOBILE APP ///


function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars );
    this.platforms = platforms;  
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp
MobileApp.prototype.getData = function() {
    console.log(this.name + ' ' + this.platforms + ' ' + this.licence +  ' ' + this.stars);
}

MobileApp.prototype.forAndroid = function() {
    if (this.platforms === 'Android') {
        return true;
    }
    return false;
}
MobileApp.prototype.isCCLicence = function() {
    if (this.licence === 'CC') {
        return true;
    }
    return false;
}
MobileApp.prototype.like = function() {
   return this.stars++;
}
MobileApp.prototype.showStars = function() {
    console.log('Number of stars: ' + this.stars);
}
var mob = new MobileApp('Calculator', 'Android', 'CC', 4);
console.log('---MobApp---');
mob.getData();
console.log('Developed for Android: ' + mob.forAndroid());
console.log('Is licence CC: ' + mob.isCCLicence());
mob.like();
mob.showStars();