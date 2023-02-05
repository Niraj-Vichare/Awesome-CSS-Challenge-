const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    if(document.body.style.background=="white"){
        document.body.style.background="black";
    }
    else{
        document.body.style.background="white";
    }
})