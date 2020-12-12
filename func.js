//object and properties
 var john ={
  name : 'John',
  birthOfYear : 1996,
  job : 'student'
};
 
//creating function constractor 

var Person = function(name,birthOfYear,job){

 this.name = name;
 this.birthOfYear = birthOfYear;
 this.job = job;
}

//using prototype

Person.prototype.calculateAge = 
function(){
 console.log(2020 - this.birthOfYear);
};

var muntaaha = new Person('Muntaaha', 1995 , 'Python Developer');
muntaaha.calculateAge();

// adding properties

Person.prototype.lastName ='Smith';
console.log(muntaaha.lastName);

//another way to create object

var personProto = {
 calculateAge : function(){
  console.log(2016 - yearOfBirth);
}
};

var rony = Object.create(personProto);
rony.name = 'rk';
rony.job = 'toto companir manager';
rony.yearOfBirth = 1996;

var rijon = Object.create(personProto,{
 name : {value : 'rijon'},
 yearOfBirth : {value : 1990},
 job : {value : 'Student'}
});

//Passing function as urgument

var years = [1996 , 1965 , 2005 , 1971 , 2000];
function calcage(arr , fn){
 var arrres=[];
 for(var i = 0; i < arr.length; i++){
  arrres.push(fn(arr[i]));
}
 return arrres;
}

function calculateAge(el){
 return 2020 - el;
}
var ages = calcage(years, calculateAge);
console.log(ages);

function isFullAge(el){
 return el >= 18;
}
var fullAges = calcage(ages, isFullAge);
console.log(fullAges);

//calculating maximum heartbeat of a person

function maxHeartBeat(el){

if(el >=18 && el <= 81)
{return Math.round(206.9 - (0.67 * el))}
else{
 return -1;
}
}
 var maxHeart = calcage(ages , maxHeartBeat);
console.log(maxHeart);

//function returning function

function interviewQuestion(job){
if(job === 'designer'){
  return function(name){
    console.log(name +', what do u design?');
}
}
else if(job === 'teacher'){
  return function(name){
    console.log('what do u teach ?' + name);
}
}
else{
 return function(name){
    console.log('what do u do for living ?' + name);
} 
}
}
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Ron');
interviewQuestion('designer')('John');

//IIFE-Imediately Invoked Function Expression
/*
function game(){
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/
(function game(goodLuck){
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

//closure-A inner function has always access to its outer function variables and parameters even after the outer function has return. 

function retirement(year){
var a =' years left until retirement';
return function(ageOfBirth){
var age = 2020 - ageOfBirth;
console.log(year - age + a);

}

}
retirement(65)(1996);
var retirementBd = retirement(64);
retirementBd(1996);

//call, bind , apply function
//call
var rony ={
 name : 'Rony',
 job :'student',
 age :'25',
 presentation : function(type , time){
if(type === 'formal'){
 console.log('Good' + time +'! I\'m ' +this.name+ ' who is your new ' + this.job +'.I\'m ' + this.age + ' years old.');
}else if(type === 'friendly'){
 console.log('Hey what\'s up everyone!Good ' + time +'! I\'m ' +this.name+ ' who is your new ' + this.job +'.I\'m ' + this.age + ' years old. ');
}
}
};

var munni ={
 name : 'Munni',
 job : 'teacher',
 age : 29 
};
rony.presentation('friendly', 'night');

rony.presentation.call(munni , 'formal' , 'morning'); 
//apply
/*
rony.presentation.apply(munni ,['formal' , 'afternoon']);
*/
//bind
var grettings = rony.presentation.bind(munni , 'friendly');
grettings('night');
var ronyFriendly = rony.presentation.bind(rony , 'friendly');
ronyFriendly('Evening');

//Question answer query for user in console
(function(){
var Question = function(question , answers , correct){
this.question = question;
this.answers = answers;
this.correct = correct;

}
Question.prototype.displayQuestion = function(){
 console.log(this.question);
 for( var i = 0 ; i < this.answers.length ; i++){
  console.log(i + ':' + this.answers[i]);
}
}

Question.prototype.checkAnswer = function(ans){
 if(ans === this.correct){
  console.log('Correct Answer');
}else{
  console.log('Wrong Answer! try again');
}
}

var q1 = new Question('What is the name of my favourite comic? ', ['Marvel' , 'Dc'], 0);
var q2 = new Question('Who is my favourite charector from marvel?', ['Thor' , 'Iron Man' , 'Hulk' , 'Black Widow'], 1);
var q3 = new Question('what is my favourite movie series from marvel univers?', ['Gardian of the galaxy' , 'Iron Man' , 'Hulk' , 'Captan America'],0);
var questions =[q1 , q2 , q3];
function nextQuestion(){
var n =Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
var answer = prompt('Please select the answer'); 
if(answer !== 'exit'){
questions[n].checkAnswer(parseInt(answer));
nextQuestion();
}
}
nextQuestion();
})(); 


