const faBars = document.querySelector(".fa-bars")
const mobileMenu = document.querySelector(".mobile-menu")
faBars.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})

const faChevronDown = document.querySelector(".fa-chevron-down")
const currencyMenu = document.getElementById("currencyMenu")
faChevronDown.addEventListener("click", () => {
    faChevronDown.classList.toggle("rotate-180");
    currencyMenu.classList.toggle("hidden")
    overlay.classList.remove("bg-gray-200")
})

const faShoppingCard = document.querySelector(".fa-cart-shopping")
const overlay = document.getElementById("overlay")
faShoppingCard.addEventListener("click", () =>{
    overlay.classList.toggle("bg-gray-200")
})

document.addEventListener("click", (e) =>{
    if(!currencyMenu.contains(e.target) && (!faChevronDown.contains(e.target))){
        currencyMenu.classList.add("hidden")
        faChevronDown.classList.remove("rotate-180");
    }

    if(!faShoppingCard.contains(e.target)){
        overlay.classList.remove("bg-gray-200")
    }
})

let navLinks = document.querySelectorAll("#currencyMenu li a")
let money = document.getElementById("money");
navLinks.forEach(link =>{
    link.addEventListener("click", () => {
        currencyMenu.classList.add("hidden")
        faChevronDown.classList.remove("rotate-180");
        money.innerText  = link.text.slice(0,1)
    })
})
