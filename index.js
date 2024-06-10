// Your code goes here
// const pSel = document.querySelector("p")
// pSel.document.textContent = "This is really cool"

// const event1 = document.querySelector("#text") 


const event = document.addEventListener("DOMContentLoaded", (event)=> {
        const textChange = document.querySelector("#text");
        textChange.textContent = "This is really cool!";
       

    }
  
)
// const textChange = document.querySelector("#text p");
// p.document.textContent ="This is really cool!"
// const pSel = document.querySelector("#text")
//     pSel.document.textContent = "This is really cool!"

console.log("The DOM has loaded");
