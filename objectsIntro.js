/*
1.vCreate an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/
var domacaKafa = {
    coffeName: 'Grand Kafa',
    strenght: 'Strong',
    milk: 'No milk',
    suggar: 'No suggar',
    dosage: 'Double dose',
}
/*
2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
*/
var favoriteMovie = {
    title: 'Lord of the Rings',
    actors: 'Sean Bean, Cate Blanchett, Orlando Bloom....',
    director: 'Peter Jackson',
    genre: 'Action, Adventure, Drama',
    popularity: 'Very popular',
    yearOfRelase: 2001,
}
/*
3. Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
*/
function project(desc, language, url, dev) {
    var projectObject = {
        description: desc,
        programingLanguage: language,
        gitRepository: url,
        development: dev,
        printRepository: function () {
            console.log(url);
        },
        isJavaScript: function () {
            return (language === "Java Script");
        },
        isDevelopment: function () {
            return (projectObject.development = dev) ? "project is in development" : "project is not in development";
        },

    };
    return projectObject;
}
var input = project('Web Shop', 'JavaScript', 'github.com', false);
console.log(input);
input.printRepository();
console.log(input.isJavaScript());
console.log(input.isDevelopment());

/*
4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
*/
function culinaryRecipe(name1, cuisine, difficulty, ingredient, time, instruction) {
    var dish = {
        nameOfRecipe: name1,
        typeOfCuisine: cuisine,
        complexity: difficulty,
        listOfIngredients: ingredient, // ovo je array i treba napisati funkciju koja brise jedan element iz array
        preparingTime: time,
        preparingInstruction: instruction,
        printIngredients: function () {
             console.log(listOfIngredients.ingredient);
        },
        checkTimeToPrepare: function () {
            return (time <= 15) ? 'Meal can be prepared in 15 min' : 'Meal cant be prepared in 15 min';
        },
        changeCuisene: function (newCuisien) {
            return dish.typeOfCuisine = newCuisien;
        },
        deleteIngredient: function (delIngredient) {
            var newlistOfIngredients = ingredient.filter(function (element) {
                return (element !== delIngredient)
            })
             listOfIngredients.ingredient = newlistOfIngredients;
        },


    }
    return dish;
};
var name1 = 'Neko jelo';
var cuisine = 'Balkanska kuhinja';
var difficulty = 3;
var ingredient = ['a', 'b', 'c', 'd'];
var time = 16;
var instruction = 'Ubaci a pa onda dodaj b, c, d i kuvaj 16 min';

var input = culinaryRecipe(name1, cuisine, difficulty, ingredient, time, instruction);
console.log(input);
input.printIngredients();
input.changeCuisene();
console.log(input.checkTimeToPrepare());
//second method Constructor function
/*
4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
*/
function Recipe(name1, cuisine, difficulty, ingredient, time, instruction) {
    this.nameOfRecipe = name1;
    this.typeOfCuisine = cuisine;
    this.complexity = difficulty;
    this.listOfIngredients = ingredient;
    this.preparingTime = time;
    this.preparingInstruction = instruction;
    this.printIngredients = function () {
         console.log(this.listOfIngredients);
    };
    this.checkTimeToPrepare = function () {
        return (time <= 15) ? 'Meal can be prepared in 15 min' : 'Meal cant be prepared in 15 min';
    };
    this.changeCuisene = function (newCuisien) {
         this.typeOfCuisine = newCuisien;
    };
    this.deleteIngredient = function (delIngredient) {
        var newIgredient = ingredient.filter(function (element) {
            return (element !== delIngredient)
        });
         this.listOfIngredients = newIgredient;
    };
};

var input = new Recipe(
    'Neko jelo',
    'Balkanska kuhinja',
    3,
    ['a', 'b', 'c', 'd'],
    16,
    'Ubaci a pa onda dodaj b, c, d i kuvaj 16 min',
);

console.log(input);
input.deleteIngredient('c');
console.log(input);
/*3. Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
*/
function Project(desc, language, url, dev) {
        this.description = desc;
        this.programingLanguage = language;
        this.gitRepository = url;
        this.development= dev;
        this.printRepository = function () {
            console.log(url);
        };
        this.isJavaScript = function () {
            return (language === "Java Script");
        };
        this.isDevelopment = function () {
            return (projectObject.development = dev) ? "project is in development" : "project is not in development";
        };
    
}
var input = project('Web Shop', 'JavaScript', 'github.com', false);
console.log(input);
input.printRepository();
console.log(input.isJavaScript());
console.log(input.isDevelopment());
/*
1.vCreate an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/
 function DomacaKafa () {
    this.coffeName = 'Grand Kafa';
    this.strenght ='Strong';
    this.milk = 'No milk';
    this.suggar = 'No suggar';
    this.dosage = 'Double dose';
}
/*
2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
*/
function FavoriteMovie () {
    this.title = 'Lord of the Rings';
    this.actors = 'Sean Bean, Cate Blanchett, Orlando Bloom....';
    this.director = 'Peter Jackson';
    this.genre = 'Action, Adventure, Drama';
    this.popularity ='Very popular';
    this.yearOfRelase = 2001;
}

