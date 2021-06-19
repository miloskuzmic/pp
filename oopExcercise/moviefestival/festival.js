"use strict";
(function (){
////GENRE//////
function Genre(name) {
    this.name = name;
    this.getData = function() {
        var firstAndLastLetter = (this.name[0] + this.name[this.name.length -1]).toUpperCase();
        return firstAndLastLetter;
    }
}
//// MOVIE /////
function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function() {
        return this.title + ', ' + this.length + ' min, ' + this.genre.getData();
    }
}
//// PROGRAM ////
function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumbersOfMovies = 0;
    this.addMovie = function(movie) {
        this.listOfMovies.push(movie);
    }
    this.getData = function() {
        var lengthOfMovies = this.listOfMovies.map(function(el){
            return el.length;
        });
        
        var total  = 0;
        lengthOfMovies.forEach(function(el){
            total = total + el;
        });
        var list = '';
         this.listOfMovies.forEach(function(elem){
            return list += '\n\t\t' + elem.getData();
        });
        var nekaglupost = '\t' + this.date + ', program length from all movies ' + total + list;
        return nekaglupost;
    }
}
///// FESTIVAL /////
function Festival(name, numberOfMoviesAllPrograms) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMoviesAllPrograms = numberOfMoviesAllPrograms;
    this.addProgram = function(program) {
        this.listOfPrograms.push(program);
    }
}
////test////
var action = new Genre('action');
var movie1 = new Movie('The Shawshank Redemption', action, 130);
var movie2 = new Movie('Neki film', action, 100)
var program1 = new Program('20.12.2321');
program1.addMovie(movie1);
program1.addMovie(movie2);
console.log(program1.listOfMovies);
console.log(program1.getData());
//console.log(action.getData());
//console.log(movie1.getData());


})()