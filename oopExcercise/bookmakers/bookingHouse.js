"use strict";
(function(){
function inicialLetters(string) {
    return (string[0] + string[2]).toUpperCase();
}
////CONSTRUCTOR FUNCTION COUNTRY///////
function Country(name, odds, continent){
    this.name = inicialLetters(name);
    this.odds = odds;
    this.continent = continent;
}
////CONSTRUCTOR FUNCTION PERSON///////
function Person(name, surname, dateOfBirth){
    this.name = name;
    this.surname = surname;
    this.date = new Date(dateOfBirth);
    this.formatedDateOfBirth = function() {
        var day = this.date.getDate();
        var month = this.date.getMonth + 1;
        var year = this.date.getFullYear();
        var rezult = day + '.' + month + '.' + year;
        return rezult;
    }
     this.yearOld = function(){
        var todayYear = new Date().getFullYear();
         var rezult = (todayYear - this.date.getFullYear()) + ' years';
         return rezult;
    }
}
////CONSTRUCTOR FUNCTION PLAYER///////
function Player(person, betAmount, country){
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.getData = function() {
        return this.country.name + ', ' + (this.country.odds * this.betAmount) + ', ' + (this.person.name.concat(' ', this.person.surname)) + ', ' + this.person.yearOld();
    }
}
////CONSTRUCTOR FUNCTION ADDRESS///////
function Address(country, city, postalCode, street, number) {
    this.country = inicialLetters(country);
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
    this.getData = function(){
        return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
    }


}
////CONSTRUCTOR FUNCTION BETTING PLACE/////// 
function BettingPlace(addres) {
    this.addres = addres;
    this.listOfPlayers = [];
    this.addPlayer = function(player){
        return this.listOfPlayers.push(player);
    }
    this.sumOfAllBets = function(){
        var rezult = 0;
        this.listOfPlayers.forEach(function(element){
            rezult += element.betAmount;
        });
        return rezult;
    }
    this.getData = function(){
        return this.addres.street + ', ' + this.addres.postalCode + ' ' + this.addres.city + ', sum of all bets: ' + this.sumOfAllBets();
    }
}
////CONSTRUCTOR FUNCTION BETTING HOUSE///////
function BettingHouse(competition, numberOfPlayers) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = numberOfPlayers;
}
var continent = {
    ASIA : 'AS',
    EUROPE : 'EU',
    AFRICA : 'AF',
    SOUTHAMERICA : 'SA',
    NORTHAMERICA : 'NA',
    AUSTRALIA : 'AU'

}
function createPlayer(firstName, lastName, dateOfBirth, betamount, name, odds, continent){
    var person = new Person(firstName, lastName,dateOfBirth);
    var country = new Country(name, odds, continent);
    return new Player(person,betamount, country);
}
function bettingPlaces(adress){
    return new BettingPlace(adress);
}


///testing
var pera = new Person('Pera', 'Peric', '11.01.1989');

var serbia = new Country('Serbia', 1.5, 'EuROPE');
var adresa = new Address('Serbia', 'Belgrade', 11000, 'Nemanjina', 4);
var person = new Player(pera, 1000, serbia);
console.log(person.getData())
var player1 = createPlayer('pera', 'peric', '11.01.1989', 1000, 'serbia', 3, continent.EUROPE);
console.log(player1);
//console.log(serbia);
//console.log(adresa.getData());





})()