const fs = require('fs')

// read JSON from entrizer.js
let rawdata = fs.readFileSync('r:/entries.txt')
let Entries = JSON.parse(rawdata);

let string = "He can love her scent."
let words = string.replace(/\.|\,|\:|\;|\"|\?|\!/g, '').replace(/\'/g, ' ').split(' ')
let res = []

function match(word){
  let res = false
  Object.keys(Entries).forEach((e) => {
    if(e == word){
      res = Entries[e]
    }
  })
  return res
}

words.forEach((word, i) => {
  if(i == 0){
    res.push(match(word) || match(word.toLowerCase()))
  }
  else {
    res.push(match(word))
  }
})

console.log(res)