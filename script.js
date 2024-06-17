const faBars = document.querySelector(".fa-bars")
const mobileMenu = document.querySelector(".mobile-menu")
faBars.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})
