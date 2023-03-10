const menu = document.querySelector(".mobile-menu-nav");
const menuLi = document.querySelectorAll(".mm-li");
const button = document.querySelector(".menu-icon");
let isMenuShown = false;



    //height: 0;
	//visibility: hidden;


button.addEventListener("click",()=>{
    if(!isMenuShown) {
        menu.style.maxHeight = "900px";
        setTimeout(()=>{
            menuLi.forEach(li=> li.style.visibility = "visible");       
        },200);        
        isMenuShown = true;
    } else if(isMenuShown) {
        menu.style.maxHeight = "0";
        setTimeout(()=>{
            menuLi.forEach(li=> li.style.visibility =  "hidden");        
        },300)            
        isMenuShown = false;
    }
})



