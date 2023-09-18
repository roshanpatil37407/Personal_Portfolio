const closeNavEl = document.getElementById("close-nav");
const openNavEl = document.getElementById("open-nav");
const navEl = document.getElementById("nav")
const navLink = document.querySelectorAll(".nav_link")

closeNavEl.addEventListener("click",()=>{
    console.log("close Nav")
    navEl.classList.toggle("hide-nav")
    navEl.classList.toggle("show-nav")
})

openNavEl.addEventListener("click",()=>{
    navEl.classList.toggle("hide-nav")
    navEl.classList.toggle("show-nav")
})

navLink.forEach(element => element.addEventListener("click",()=>{
        navEl.classList.toggle("hide-nav")
        navEl.classList.toggle("show-nav") 
    })
)
   
