const btn=document.getElementById("btn");
const container=document.getElementById("container");

btn.addEventListener('click',()=>{
    const notify=document.createElement('div');

    notify.classList.add('toast');
    notify.innerText="Hey! Notification is working...";
    container.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },2500)

});
    