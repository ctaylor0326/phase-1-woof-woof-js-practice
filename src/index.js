//Variables and Functions
const dogBar = document.getElementById("dog-bar");
let pups;
const dogInfo = document.getElementById("dog-info");
console.log(dogInfo);

//DOM manipulators
function createSpan(pup) {
  let s = document.createElement("span");
  s.textContent = pup.name;
  dogBar.appendChild(s);
  s.addEventListener("click", (e) => {
    console.log("clicked");
    e.preventDefault();
    dogInfo.innerHTML = "";
    const img = document.createElement("img");
    img.src = pup.image;
    const name = document.createElement("h2");
    name.textContent = pup.name;
    const button = document.createElement("button");
    console.log(button);
    if (pup.isGoodDog) {
      button.textContent = "Is Good Dog!";
    } else {
      button.textContent = "Is Bad Dog!";
    }
    

    dogInfo.append(img);
    dogInfo.append(name);
    dogInfo.append(button);
  });
}

//FETCH requests

fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then((pupsInfo) => {
    pups = pupsInfo;

    pups.forEach(createSpan);
  });
