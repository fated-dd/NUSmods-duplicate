
// document.addEventListener("DOMContentLoaded" , function () {
//     let counter = document.getElementById('counter');
//     let increment = document.getElementById('increment-button');
//     let decrement = document.getElementById('decrement-button');
//     let reset = document.getElementById('reset-button');
//     let change = [-1 , 1];

//     function updatecounter(num) {
//         counter.innerText = parseInt(document.getElementById('counter').innerText) + change[num];
//     }

//     function resetcounter() {
//         counter.innerText = 0;
//     }

//     increment.addEventListener('click' , () => updatecounter(1));
//     decrement.addEventListener('click' , () => updatecounter(0));
//     reset.addEventListener('click' , resetcounter);
// })

document.addEventListener("DOMContentLoaded" , function () {
    let newelement = document.createElement("a");
    newelement.setAttribute("class" , "purple-link");
    newelement.setAttribute("href" , "https://orbital.comp.nus.edu.sg/");
    newelement.innerText = "Link to Orbital Page";

    let division = document.getElementById("main-div");
    let increment = document.getElementById('increment-button');
    let reset = document.getElementById('reset-button');
    
    division.replaceChild(newelement , reset);
})
