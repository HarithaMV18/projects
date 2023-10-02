let sideMenu=document.querySelector(".open-sidebar");
let sideBar=document.querySelector(".side-bar");
let close_bar=document.querySelector("#close-bar");
sideMenu.addEventListener("click",function(){
   
    sideBar.style.width="250px"

})
close_bar.addEventListener("click",function(){
   
   sideBar.style.width="0px"

})