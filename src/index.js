


//Variables and Functions
const dogBar = document.getElementById("dog-bar");
let pups


//DOM manipulators
function createSpan(pup) {
  console.log(pup);
  let s = document.createElement("span");
  s.textContent = pup.name;
  dogBar.appendChild(s);
}




//FETCH requests

fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then((pupsInfo) => {
    
    pups = pupsInfo;
    console.log(pups);
    pups.forEach(createSpan);
  });


