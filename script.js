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
const shoppingCard = document.getElementById("shoppingCard")
faShoppingCard.addEventListener("click", () =>{
    overlay.classList.toggle("bg-gray-200")
    shoppingCard.classList.toggle("hidden")
})
document.addEventListener("click", (e) =>{
    if(!currencyMenu.contains(e.target) && (!faChevronDown.contains(e.target))){
        e.stopPropagation()
        currencyMenu.classList.add("hidden")
        faChevronDown.classList.remove("rotate-180");
    }

    if(!faShoppingCard.contains(e.target)){
        overlay.classList.remove("bg-gray-200")
        shoppingCard.classList.add("hidden")
    }
})

shoppingCard.addEventListener("click", (e)=>{
    e.stopPropagation()
})

const sizeLinks = document.querySelectorAll(".sizeLinks a")
sizeLinks.forEach(sizeLink => {
    sizeLink.addEventListener("click", ()=> {
        sizeLinks.forEach(link => link.classList.remove("text-white", "bg-black"))  
        sizeLink.classList.add("text-white", "bg-black") 
    })
})

const colorLinks = document.querySelectorAll(".colorLinks")
colorLinks.forEach(linkContainer =>{
    const links = linkContainer.querySelectorAll("a")
    links.forEach(link => {
        link.addEventListener("click", ()=>{
            links.forEach(l => l.classList.remove("border-4","border-green-300"))
            link.classList.add("border-4","border-green-300")
        })
    })
})

const product_count = document.querySelectorAll(".product-count")
const plus = document.getElementsByClassName("plus")
const minus = document.getElementsByClassName("minus")
plus[0].addEventListener("click",() =>{
    if(product_count.innerText <= 0){
        product_count.innerText++
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