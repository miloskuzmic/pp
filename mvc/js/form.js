var festival = new Festival();
var nameOfMovie = document.querySelector('#name-of-movie');
var lengthOfMovie = document.querySelector('#lenght-of-movie');
var generOfMovie = document.querySelector('#gener-movie');
var createMovieButton = document.querySelector('.create-movie');
var listOfAddedMovies = document.querySelector('#addmovies');
var errorMessages = document.querySelector('.error-msg')
var programDate = document.querySelector('.program-date')
var addMovieToProgramButton = document.querySelector('.movie-to-program');
var uListOfCreatedPrograms = document.querySelector('.program-list-ul');
var selectProgramList = document.querySelector('#program-list');
var selectMovieToAdd = document.querySelector('#list-of-movies');
var createProgramButtons = document.querySelector('.create-program')
var addMovieBtnElement = document.querySelector('.movie-to-program');

function addMovieToList() {
    if (!nameOfMovie.value) {
      // return errorMessages.textContent = 'All Fields are requared'
     return alert('Title is empty')
    }
    if (!lengthOfMovie.value) {
      //  return errorMessages.textContent = 'All Fields are requared'
      return alert('Length of movie is empty')
    };
    if (generOfMovie.value === '-') {
      //  return errorMessages.textContent = 'All Fields are requared'
      return alert('Gener of movie is empty')
    };
    var movie = new Movie (nameOfMovie.value, lengthOfMovie.value, generOfMovie.value);
    var index = festival.listOfCreatedMovies.push(movie) - 1;
    //creating li and adding to ul
    var movieDataLi = document.createElement('li');
    movieDataLi.textContent = movie.getData();
    listOfAddedMovies.appendChild(movieDataLi);
    // adding movie to movie dropdown
    
    var movieOption = document.createElement('option');
    movieOption.textContent = movie.getData();
    movieOption.setAttribute('value', index);
    selectMovieToAdd.appendChild(movieOption);
    //reseting input
    nameOfMovie.value = '';
    lengthOfMovie.value = '';
    generOfMovie.value = '-';
    
}
function createProgram() {
    var newProgram = new Program(programDate.value);
    if(newProgram.date < new Date()) {
       return alert ('error');
    }
    var index = festival.listOfCreatedPrograms.push(newProgram) - 1;
 
    //adding created programs to list
    var liProgram = document.createElement('li');
    liProgram.textContent = newProgram.getData();
    uListOfCreatedPrograms.appendChild(liProgram);
    //adding program to select option in html
    var programOption = document.createElement('option');
    programOption.textContent = newProgram.getData();
    programOption.setAttribute('value', index);
  
    selectProgramList.appendChild(programOption);
    console.log(festival)

}
function addMovieToProgram() {

        var programListElements = document.querySelectorAll('.program-list-ul li');
        var programSelectorOptions = document.querySelectorAll('#program-list option');
      
        var movieValue = selectMovieToAdd.value;
        var programValue = selectProgramList.value;
        
        var movie = festival.listOfCreatedMovies[movieValue];
        var program = festival.listOfCreatedPrograms[programValue]
        
        var oldData = program.getData();
        program.addMovie(movie);
        //updating li list
        programListElements.forEach(function(li){
            if (li.textContent === oldData){
                li.textContent = program.getData()
            }
        });
        //updating selector option lists
        programSelectorOptions.forEach(function (option) {
            if (option.textContent === oldData) {
              option.textContent = program.getData();
            }
          });
            //reseting input
          selectProgramList.value = '-'
          selectMovieToAdd.value = '-'
       
      
    }
   
    






createMovieButton.addEventListener('click', addMovieToList);
createProgramButtons.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click', addMovieToProgram);
