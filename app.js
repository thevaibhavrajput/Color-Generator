let btnclick= document.getElementById("btn");
let textPara= document.getElementById("text-para");

let main=document.querySelector(".main");



btnclick.addEventListener('click',()=>{
    let rbgValue= randomColor();
    textPara.innerText=rbgValue;
    main.style.backgroundColor=rbgValue;
    

})



function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color= `rgb(${red},${green},${blue})`;
    return color;
};


console.log(clicked);

