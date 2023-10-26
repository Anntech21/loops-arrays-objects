/********************** Exercise 1 ***********************/

// Given the following code, write a for loop that pushes the names of all the magazine editors into the array, magazineEditors.

// Log the magazineEditors array when you're done to make sure you got it!

let magazineEditors = [];
let magazines = [
  {
    name: "Variety",
    editor: "Judy White",
    publicationCity: "New York",
    numberOfReaders: 2348120,
  },
  {
    name: "Newsweek",
    editor: "William Randle",
    publicationCity: "Washington DC",
    numberOfReaders: 890761,
  },
  {
    name: "Entertainment Weekly",
    editor: "Franklin Post",
    publicationCity: "Los Angeles",
    numberOfReaders: 1457854,
  },
  {
    name: "People",
    editor: "Abigail Smithers",
    publicationCity: "New York",
    numberOfReaders: 3345765,
  },
];

for (i = 0; i < magazines.length; i++) {
  let editorName = magazines[i].editor;
  magazineEditors.push(editorName);
}

console.log(magazineEditors); 
//(4) ['Judy White', 'William Randle', 'Franklin Post', 'Abigail Smithers']


/********************** Exercise 2 ***********************/

let movieTheater = [
  {
    theater: "Theater1",
    movieName: "Titanic",
    duration: 190,
    genre: "Drama",
  },
  {
    theater: "Theater2",
    movieName: "Ace Ventura",
    duration: 90,
    genre: "Comedy",
  },
  {
    theater: "Theater3",
    movieName: "Inconvenient Truth",
    duration: 100,
    genre: "“Documentary”",
  },
  {
    theater: "Theater4",
    movieName: "The Notebook",
    duration: 120,
    genre: "Drama",
  },
  {
    theater: "Theater5",
    movieName: "Office Space",
    duration: 120,
    genre: "Comedy",
  },
  {
    theater: "Theater6",
    movieName: "Star Wars",
    duration: 140,
    genre: "Action",
  },
];

// Loop through this collection to log to the console all of the theaters that are playing a comedy.

for(let i=0; i<movieTheater.length; i++){
  if(movieTheater[i].genre === 'Comedy'){
    console.log(movieTheater[i].theater)
  }
}

// console log all theater names
let comedies = [];
for (i = 0; i < movieTheater.length; i++) {
{ console.log(movieTheater[i].theater)}
}

// console log comedy movies running in theater
comedies = [];
for (i = 0; i < movieTheater.length; i++) {
  if (movieTheater[i].genre === "Comedy") comedies.push(movieTheater[i]);
}
console.log(comedies);
  
//{theater: 'Theater2', movieName: 'Ace Ventura', duration: 90, genre: 'Comedy'}
//{theater: 'Theater5', movieName: 'Office Space', duration: 120, genre: 'Comedy'}
/********************** Exercise 3 ***********************/

let arrayNumbers = [0, 7, 10, 12, 13, 20, 23, 27, 30, 60, 67, 88];

// Loop through each of the elements in the array and only console log the numbers that are divisible by 10.

let divisibleArray = [];
for (i = 0; i < arrayNumbers.length; i++) {
  let numbers = arrayNumbers[i];
  if (numbers % 10 === 0)
  {
    divisibleArray.push(numbers);
  }
}
console.log(divisibleArray); //(5) [0, 10, 20, 30, 60]


/********************** Exercise 4 ***********************/

let arrayWords = [
  "To",
  "be",
  "or",
  "not",
  "to",
  "be,",
  "that",
  "is",
  "the",
  "question.",
];

// Use a loop to log this to the console as one string.

let sentence1 = "";
for (let i = 0; i < arrayWords.length; i++) {
  sentence1 += arrayWords[i] + " ";
}

console.log(sentence1.trim());//To be or not to be, that is the question.

//object in one line with spaces
let statement = "";
for (i = 0; i < arrayWords.length; i++) {
  statement += arrayWords[i] + " "; // 'To be or not to be, that is the question. '
}
console.log(statement);

//string without spaces
//statement = statement + arrayWords[i] + ""; //Tobeornottobe,thatisthequestion.

/********************** BONUS EXERCISES ***********************/

/********************** Exercise 5 ***********************/

// Create an array of objects, where each object describes a book and has 3 properties: title (a string), author (a string), alreadyRead (a boolean to note if you've read it yet).

// Iterate through the array of books. For each book, log the book title and its author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you've read it yet or not. If you've read it, log a string: 'You already read "The Hobbit" by J.R.R. Tolkien'; if not, log a string: 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let novels =[
  {
    title:"ABC",
    author:'BCD ',
    alreadyRead:true
  },
  {
    title:'EFG',
    author:"EGH",
    alreadyRead:false
  },
  {
    title:'IJK',
    author:"JKL ",
    alreadyRead:true
  }
];
for(let i=0;i<novels.length;i++){
  let novel = novels[i];
  let novelInfo = `"${novel.title}" by ${novel.author}`;
  if (novel.alreadyRead){
    console.log(`you already read ${novelInfo}.`)
  }else{
    console.log(`you still need to read ${novelInfo}.`)
  }
}
//you already read "ABC" by BCD .
//VM395:7 you still need to read "EFG" by EGH.
//VM395:5 you already read "IJK" by JKL .

/********************** Exercise 6 ***********************/

// Review the following code
let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Event schedule for each day
let eventSchedule = {
  Monday: "Yoga class at 8:00 AM",
  Tuesday: "Running club meetup at 6:30 PM",
  Wednesday: "Cooking workshop at 5:00 PM",
  Thursday: "Guitar lessons at 4:00 PM",
  Friday: "Movie night at 7:00 PM",
  Saturday: "Outdoor hike at 9:00 AM",
  Sunday: "Rest and relaxation day",
};

// Log the schedule for each day of the week.

console.log("Weekly Event Schedule\n");
for(let i = 0;i<daysOfWeek.length;i++){
  let day = daysOfWeek[i];
  let event = eventSchedule[day];
  console.log(`${day}: ${event}`);
}

//Weekly Event Schedule
//Monday: Yoga class at 8:00 AM
//VM440:4 Tuesday: Running club meetup at 6:30 PM
//VM440:4 Wednesday: Cooking workshop at 5:00 PM
//VM440:4 Thursday: Guitar lessons at 4:00 PM
//VM440:4 Friday: Movie night at 7:00 PM
//VM440:4 Saturday: Outdoor hike at 9:00 AM
//VM440:4 Sunday: Rest and relaxation day

/********************** Exercise 7 ***********************/

// Loop through the array to calculate the average score

let scores = [85, 92, 78, 90, 88, 95];
let totalScore = 0;

// Your for loop here
for(let i = 0;i<scores.length;i++){
  totalScore+= scores[i]
}

let averageScore = totalScore / scores.length;
console.log("Average Score:" + averageScore);//Average Score:88
