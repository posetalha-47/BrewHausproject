
// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuToggle && navigation) {

    function closeMenu() {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        navigation.classList.remove("is-open");
    }

    menuToggle.addEventListener("click", () => {

        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isExpanded));

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );

        navigation.classList.toggle("is-open", !isExpanded);

    });


    // Close menu with Escape key

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            if (isOpen) {
                closeMenu();
                menuToggle.focus();
            }

        }

    });


    // Close mobile menu after selecting a link

    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", closeMenu);

    });


    // Reset menu when switching back to desktop layout

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeMenu();
        }

    });

}


// Update footer year

const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
