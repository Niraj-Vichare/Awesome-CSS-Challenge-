const text="Hello there we are learning something new...😍😍😍"

let index=0;
function AutoWrite(){
    document.body.innerHTML=text.slice(0,index);

    index++;
    if(index>text.length-1){
        index=0;
    }

}
setInterval(AutoWrite,100)