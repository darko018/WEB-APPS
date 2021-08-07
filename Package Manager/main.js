let funnyWords = require('funny-words');
let randomWords = require('random-words');
let oneLinerJoke = require('one-liner-joke');
let figlet = require('figlet');




console.log(funnyWords("Don't worry, be happy!"));

console.log(randomWords(5));
['army', 'beautiful', 'became', 'if', 'actually']

let getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)


 
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


  console.log(
    figlet.textSync("Hello World!", {
      font: "3D-ASCII",
      horizontalLayout: "default",
      verticalLayout: "default",
      width:100,
      whitespaceBreak: true,
    })
  );