# English Vocabulary Entry Generator
This simple code will generate a JSON containing an JS object of English vocabulary entries. The entries here refer to words and phrases such as 'apple', 'a great deal', 'according to' and the like.

## Installation
Just clone this repo.
```
git clone https://github.com/dayliver/English-Vocabulary-Entry-Generator
```
No other commands are required becuse this project does NOT depend on any external modules.

## Execution
Change the path of the output file inside the 'entrizer.js' to your taste.
```
let filepath = 'R:/entries.txt' // this is the default value
```
Run the entrizer with the command below, and then you can get the JSON.
```
node ./entrizer.js
```

## Structure
The main object consists of a lot of entries.
```
let Entries = {
  ...
  loves: {
    NoP: [
      { rep: 'love', freq: 1 }
    ],
    Verb: [
      { rep: 'love', freq: 12 }
    ]
  }
  ...
}
```

## Usage
Refer to test.js. It shows how a sentence is structured.

## References
Corpus data was collected from http://ucrel.lancs.ac.uk/bncfreq/.



