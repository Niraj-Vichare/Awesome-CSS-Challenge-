const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    document.body.style.background=ColorChange();
})

function ColorChange(){
    var random=Math.floor(Math.random()*360);
    color=`hsl(${random},100%,50%)`
    return color
}