//Variables and Functions
const dogBar = document.getElementById("dog-bar");
let pups;
const dogInfo = document.getElementById("dog-info");


//DOM manipulators
function createSpan(pup) {
  let s = document.createElement("span");
  s.textContent = pup.name;
  dogBar.appendChild(s);
  s.addEventListener("click", (e) => {
    e.preventDefault();
    dogInfo.innerHTML = "";
    const img = document.createElement("img");
    img.src = pup.image;
    const name = document.createElement("h2");
    name.textContent = pup.name;
    const button = document.createElement("button");
    
    if (pup.isGoodDog) {
      button.textContent = "Is Good Dog!";
    } else {
      button.textContent = "Is Bad Dog!";
    }
    

    dogInfo.append(img);
    dogInfo.append(name);
    dogInfo.append(button);
    
    button.addEventListener("click", (e) => {
         if (pup.isGoodDog) {

            pup.isGoodDog= false;
            fetch(`http://localhost:3000/pups/${pup.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                isGoodDog: false
            }),
            headers: {
                "Content-type": "application/json"
            }}) 
            button.textContent = "Is Bad Dog!";
        }else {
            pup.isGoodDog = true;
            fetch(`http://localhost:3000/pups/${pup.id}`, {
              method: "PATCH",
              body: JSON.stringify({
                isGoodDog: true
              }),
              headers: {
                "Content-type": "application/json",
              },
            });
            button.textContent = "Is Good Dog!";
          }
          
          });
       
    //     if(button.textContent === "Is Good Dog!") {
    //     button.textContent = "Is Bad Dog!";
    //    } else {
    //     button.textContent = "Is Good Dog!"
    //    }
    });
  };


//FETCH requests

fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then((pupsInfo) => {
    pups = pupsInfo;

    pups.forEach(createSpan);
  });
