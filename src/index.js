
//Initial Render

function init(){
    
}
//Variables
const dogBar = document.getElementById("dog-bar");


//DOM manipulators


//FETCH requests

console.log("before fetch");
// function getPups(){
fetch("http://localhost:3000/pups")
.then((res) => res.json())
.then((data) => console.log(data))
    
// }
