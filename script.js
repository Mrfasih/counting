const increses = document.querySelector(".Increase");
const Decrease = document.querySelector(".Decrease");
const d1 = document.querySelector(".d1");

let count =1;

increses.addEventListener("click",()=>{
    count++;
    d1.value=count;
});
Decrease.addEventListener("click",()=>{
    console.log("clicked");
    count--;
    d1.value=count;
});