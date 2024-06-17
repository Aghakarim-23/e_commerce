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

})

const faShoppingCard = document.querySelector(".fa-cart-shopping")
const overlay = document.getElementById("overlay")
faShoppingCard.addEventListener("click", () =>{
    overlay.classList.toggle("bg-gray-200")
    console.log(faShoppingCard);
})