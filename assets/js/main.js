const nav = document.querySelector(".header--icon")

nav.addEventListener("click",chnageMenuState);

function chnageMenuState(){
    const headerMenu = document.querySelector("ul.header--menu");
    const navIcon = document.querySelectorAll(".navIcon") 
    headerMenu.classList.toggle("show");
    navIcon.forEach(icon =>{
        icon.classList.toggle("hidden")
    });

}

function onMenuClick(){
    const navlinks = document.querySelectorAll(".header--menu>li>a");
    for(let i = 0; i < navlinks.length;i++){
        navlinks[i].addEventListener("click",chnageMenuState);
    }
}

onMenuClick();