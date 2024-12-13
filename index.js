const bars =document.querySelector(".fa-bars");
const toggle =document.querySelector(" .links ul");
const img =document.querySelector(".hero .image img");




bars.addEventListener("click",()=>{
    console.log("Hello bars");
    toggle.classList.toggle("active2")

});

console.log("Hello");


let i = 0;
setInterval(()=>{
    if(i < 6){
        img.src=`./images/cofee_${i + 1}.png`;
        console.log("equal" + i);
        i=i+1;
        console.log("equal" + i);
    }else{
        i=0;
    }
    // console.log("hello");
},3000);