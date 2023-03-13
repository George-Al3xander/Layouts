const menu = document.querySelector(".mobile-menu-nav");
const menuLi = document.querySelectorAll(".mm-li");
const button = document.querySelector(".menu-icon");
let isMenuShown = false;

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

let valueDisplay = document.querySelector(".num");
let interval = 4000;

  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 2950.671875
    valueDisplay.textContent = startValue.toLocaleString();
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);




