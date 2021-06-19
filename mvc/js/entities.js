function Festival() {
    this.listOfCreatedMovies = [];
    this.listOfCreatedPrograms = [];    
}
function Movie (title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.upperCase = function() {
        return (this.genre[0] + this.genre[this.genre.length -1]).toUpperCase();
    }
    this.getData = function() {
        return this.title + ', ' + this.length +  ' min, ' + this.upperCase();
    };
}

function Program (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.addMovie = function(movie) {
        return this.listOfMovies.push(movie)
    };
    this.numberOfMovies = function() {
        return this.listOfMovies.length;
    };
    
    this.getDateOfFestival = function() {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var completeDate = day + '.' + month + '.' + year;
        return completeDate;
    }
    this.getData = function() {
        var allMovieLength = 0;
        this.listOfMovies.forEach(function (movieElement) {
            allMovieLength += parseInt (movieElement.length);
        });
       
        return this.getDateOfFestival() + ', ' + this.listOfMovies.length + ' movies, program duration ' + allMovieLength;
        
    };
    
}

