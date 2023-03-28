


//Variables and Functions
const dogBar = document.getElementById("dog-bar");
let pups
const dogInfo = document.getElementById("dog-info");
console.log(dogInfo)

//DOM manipulators
function createSpan(pup) {
  
  let s = document.createElement("span");
  s.textContent = pup.name;
  dogBar.appendChild(s);
  s.addEventListener("click", (e) => {
    console.log("clicked");
    e.preventDefault();
    const img = document.createElement("img");
        img.src = pup.image
    dogInfo.append(img)
  })
}




//FETCH requests

fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then((pupsInfo) => {
    
    pups = pupsInfo;
   
    pups.forEach(createSpan);
  });
  


