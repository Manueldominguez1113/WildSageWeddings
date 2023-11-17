function parallaxDiv(){
    const div1= document.getElementById("blank"), div1S= document.getElementById("blankS"), div1L= document.getElementById("blankL"), div2= document.getElementById("blank2"), div2L= document.getElementById("blank2L"), div3= document.getElementById("blank3"), div4= document.getElementById("blank4");

    var yPos= 0-window.scrollY/13;
    div1.style.top = 20+ yPos/2+"%";
    div1L.style.top = 10+ yPos*0.5+"%";
    div2.style.top = 170+ yPos*1.2+"%";
    div2L.style.top = 180+ yPos*0.8+"%";
    div3.style.top = 170+ yPos/3+"%";
    div1S.style.top = -10+ yPos*0.8+"%";
    div4.style.top = 174+ yPos*1.2+"%";

}

window.addEventListener("scroll",function(){
    parallaxDiv();
});

function openNav(){
    var navmenu = document.getElementById("mNavMenu")
    const navToggle = 
    document.getElementById("mNav").querySelectorAll(".nav-burger").forEach(function(i){
        i.classList.toggle("nav-close")
    });

    if(navmenu.classList.contains("d-none")){
        navToggle;
        navmenu.classList.toggle("d-none");       
        setTimeout(()=>{
            navmenu.classList.toggle("closed-menu");
        },100);
    } else{
        navToggle;
        navmenu.classList.toggle("closed-menu");
        setTimeout(()=>{
            navmenu.classList.toggle("d-none");
        },100);
    }

}
function popupImg(element){
    var src= element.src, modal=document.getElementById("modal"), modalImg= document.getElementById("modal-img");
    modal.style.display="flex";
    modalImg.src=src;
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

document.querySelectorAll("#mNavMenu .navlink").forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        openNav();  
    })
})
