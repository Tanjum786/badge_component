var hid=document.querySelector(".btn_hide");
var badge=document.querySelector(".badge4");
hid.addEventListener("click",()=>{
    if(badge.style.display==="none"){
        badge.style.display="block"
    }
    else{
        badge.style.display="none"
    }
})