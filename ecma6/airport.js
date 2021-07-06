"use strict";
(function (){
console.log('Hi');

////CONSTRUCTOR FUNCTION PERSON///////
function Person(name, surname) {
    if (!name || !surname){
        throw new Error('Field name and surname are required');
    };
    this.name =  name;
    this.surname = surname;
    this.getData = function(){
        return `${this.name} ${this.surname}`//this.name + ' ' + this.surname;
    }
}
////CONSTRUCTOR FUNCTION SEAT///////
function Seat(number, category = 'e') {
    
    number = number || Math.floor(Math.random() * 90 + 10);
    if (!['b', 'e'].includes(category)){
        throw new Error('Invalid category input');
    };
    this.number = number;
    this.category = category;
    this.getData = function(){
        return `${this.number}  ${this.category.toUpperCase()}`;
    }
}
////CONSTRUCTOR FUNCTION PASSENGER///////
function Passenger(person, seat){
    if (!person || !(person instanceof Person)){
        throw new Error('Invalid person input')
    };
    if (!seat || !(seat instanceof Seat)){
        throw new Error('Invalid seat input')
    };
    this.person = person;
    this.seat = seat;
    this.getData = function() {
        return `${this.seat.getData()}  ${this.person.getData()}` ;
    };
}
////CONSTRUCTOR FUNCTION FLIGHT///////
function Flight(relation, date, passengers){
    if (!relation || !date) {
        throw new Error('Field name and surname are required');
    };
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassenger = function(passanger){
        if (!passanger || !(passanger instanceof Passenger)){
            throw new Error('Invalid passenger data');
        };
        this.listOfPassengers.push(passanger);
    }
    this.getData = function(){
        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();
        //let rezult = '\t' + day + '.' + month + '.' + year + ',' + ' ' + this.relation + '\n' + '\t\t';
        let rezult = `${day}.${month}.${year}, ${this.relation}
        `;
        this.listOfPassengers.forEach(function(passanger){
           // rezult += '\t\t' + passanger.getData() + '\n';
           rezult += `\t\t${passanger.getData()}
        `;
        })
        return rezult;
    }
}
////CONSTRUCTOR FUNCTION FLIGHT///////
function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    this.addFlight = function(flight){
        if (!flight || !(flight instanceof Flight)){
            throw new Error('Invalid flight data');
        };
        this.listOfFlights.push(flight)
    }
    this.getPassengersNumber = function() {
        let count = 0;
        this.listOfFlights.forEach(function(flight) {
            count += flight.listOfPassengers.length
        })
        return count;
    }
    this.getData = function() {
        // result = 'Airport: ' + this.name + ', total passengers: ' + this.getPassengersNumber() + '\n';
        let result = `Airport ${this.name}, total passengers: ${this.getPassengersNumber()}
        `
        this.listOfFlights.forEach(function(flight) {
            result += flight.getData();
        })
        return result
    }
};
function createFlight(relation, date) {
    return new Flight(relation, date);
}
function createPassenger(firstName, lastName, seatNumber, category) {
    let person = new Person(firstName, lastName);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
}




////testing//////
try{
let nikolaTesla = new Airport();
let belgradeNewYork = createFlight('Belgrade - New York', 'Oct 25 2017');
let barcelonaBelgrade = createFlight('Barcelona - Belgrade', 'Nov 11 2017');
let passanger1 = createPassenger('Jonh', 'Snow', 1, 'b');
let passanger2 = createPassenger('Cersei', 'Lanister', 2, 'b');
let passanger3 = createPassenger('Daenerys', 'Targaryen', 14, );
let passanger4 = createPassenger('Tyron', 'Lannister',);
belgradeNewYork.addPassenger(passanger1);
belgradeNewYork.addPassenger(passanger2);
barcelonaBelgrade.addPassenger(passanger3);
barcelonaBelgrade.addPassenger(passanger4);
nikolaTesla.addFlight(belgradeNewYork);
nikolaTesla.addFlight(barcelonaBelgrade);
console.log(nikolaTesla.getData());
}catch (error){
    console.log('Error message:' + error.message);
}










}
)();