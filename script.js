const increses = document.querySelector(".Increase");
const Decrease = document.querySelector(".Decrease");
const Reset = document.querySelector(".Reset");
const d1 = document.querySelector(".d1");

let count =0;

increses.addEventListener("click",()=>{
    count++;
    d1.value=count;
});
Decrease.addEventListener("click",()=>{
    console.log("clicked");
    count--;
    d1.value=count;
});
Reset.addEventListener("click",()=>{
    count=0;
    d1.value=count;
})