var num = Math.random() * 10
var roundedNum = Math.round(num)

console.log(roundedNum)

var userInput = +prompt("Guess Secret Number, between 1 to 10")

if (userInput == roundedNum){
    alert("Kiya soch h re teri...🫡🫣")
} else{
    alert("Aap jao aap kaam kro...🤡🤝🏻")
}