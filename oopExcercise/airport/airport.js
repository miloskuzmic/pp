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
        return this.name + ' ' + this.surname;
    }
}
////CONSTRUCTOR FUNCTION SEAT///////
function Seat(number, category) {
    category = category || 'e';
    number = number || Math.floor(Math.random() * 90 + 10);
    if (!['b', 'e'].includes(category)){
        throw new Error('Invalid category input');
    };
    this.number = number;
    this.category = category;
    this.getData = function(){
        return this.number + ' ' + this.category.toUpperCase();
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
        return this.seat.getData() + ' ' + this.person.getData();
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
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var rezult = '\t' + day + '.' + month + '.' + year + ',' + ' ' + this.relation + '\n' + '\t\t';
        this.listOfPassengers.forEach(function(passanger){
            rezult += '\t\t' + passanger.getData() + '\n';
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
        var count = 0;
        this.listOfFlights.forEach(function(flight) {
            count += flight.listOfPassengers.length
        })
        return count;
    }
    this.getData = function() {
        var result = 'Airport: ' + this.name + ', total passengers: ' + this.getPassengersNumber() + '\n';
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
    var person = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
}




////testing//////
try{
var nikolaTesla = new Airport();
var belgradeNewYork = createFlight('Belgrade - New York', 'Oct 25 2017');
var barcelonaBelgrade = createFlight('Barcelona - Belgrade', 'Nov 11 2017');
var passanger1 = createPassenger('Jonh', 'Snow', 1, 'b');
var passanger2 = createPassenger('Cersei', 'Lanister', 2, 'b');
var passanger3 = createPassenger('Daenerys', 'Targaryen', 14, );
var passanger4 = createPassenger('Tyron', 'Lannister',);
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