const navItems = document.querySelector(".nav_items");
const menuButton = document.querySelector(".mobile-nav-toggle");

menuButton.addEventListener("click", () => {
    const visibility = navItems.getAttribute("data-visible");

    if (visibility === "false") {
        navItems.setAttribute("data-visible", true);
        menuButton.setAttribute("aria-expanded", true);
    } else {
        navItems.setAttribute("data-visible", false);
        menuButton.setAttribute("aria-expanded", false);
    }
})