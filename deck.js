let deck = "abcdefghiabcdefghi"
// let deck2 = [
//   `<img src="./images/banana.jpg" width="50px" height="50px"/>`,
//   `<img src="./images/banana.jpg" width="50px" height="50px"/>`
// ]
var boo = new Audio("./boo.mp3")
var win = new Audio("./Applause.mp3")
var flips = [boo, win]
var resetButton
let counter //to stop the interval
let counter2 //to stop the interval
let secs = 0
// let sec=0
let turn = 0
let pairs = 0
let timerbonus = 0
let turnbonus = 0
let timerRunning = false
var startTime = new Date()
var result = timerbonus + turnbonus
var outcome = ""
