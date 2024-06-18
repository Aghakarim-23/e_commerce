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
let price = document.querySelectorAll(".price")
navLinks.forEach(link =>{
    link.addEventListener("click", () => {
        currencyMenu.classList.add("hidden")
        faChevronDown.classList.remove("rotate-180");
        money.innerText  = link.text.slice(0,1) ;
    })
    console.log(price);
})

// for change all product currency 
navLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        price.forEach(priceLink =>{
            priceLink.innerText = link.text.slice(0,1) + "50.00";
        })
    })
})

// for currenclink bg-color
let navLinksColor = document.querySelectorAll("#currencyMenu li")
navLinksColor.forEach(coloredLink =>{
    coloredLink.addEventListener("click", () => {
        navLinksColor.forEach(coloredLink => coloredLink.classList.remove("bg-gray-200"))
        coloredLink.classList.add("bg-gray-200")
    })
})
// for desktop link color  
let leftSideNavlinks = document.querySelectorAll("#leftSideNavlinks a")
leftSideNavlinks.forEach(leftSideLink => {
    leftSideLink.addEventListener("click", () =>{
        leftSideNavlinks.forEach(leftSideLink => {
            leftSideLink.classList.remove("text-green-600", "border-green-300","border-b-2")
        })
        leftSideLink.classList.add("text-green-600", "border-green-300","border-b-2")
    })
})
// for mobileLink color  
let mobileMenuLinks = document.querySelectorAll(".mobile-menu a")
mobileMenuLinks.forEach(mobileMenuLink => {
    mobileMenuLink.addEventListener("click",() =>{
        mobileMenuLinks.forEach(mobileMenuLink => 
            mobileMenuLink.classList.remove("text-green-600"))
            mobileMenuLink.classList.add("text-green-600")   
    })
})