
/* Mobile Navigation */
document.querySelectorAll(".site-header").forEach((header) => {
    const button = header.querySelector(".menu-toggle");
    const nav = header.querySelector("nav");

    if (!button || !nav) return;

    function closeMenu() {
        nav.classList.remove("open", "is-open");
        button.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");
    }

    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") !== "true";

        nav.classList.toggle("open", isOpen);
        nav.classList.toggle("is-open", isOpen);
        button.classList.toggle("active", isOpen);

        button.setAttribute("aria-expanded", String(isOpen));
        button.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".site-header").forEach((header) => {
            const button = header.querySelector(".menu-toggle");
            if (button) button.click();
        });
    }
});


/* Update Footer Year */
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* Menu Filter */
const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        menuCards.forEach((card) => {
            const matches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matches;
        });
    });
});


/* Gallery Lightbox */
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector("#galleryLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector(".lightbox-close");

let previousFocus = null;

function closeGalleryLightbox() {
    if (!lightbox || lightbox.hidden) return;

    lightbox.hidden = true;

    if (lightboxImage) {
        lightboxImage.src = "";
    }

    if (previousFocus) {
        previousFocus.focus();
    }
}

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const image = item.querySelector("img");

        if (!image || !lightbox || !lightboxImage) return;

        previousFocus = item;
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;

        if (closeLightbox) {
            closeLightbox.focus();
        }
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", closeGalleryLightbox);
}

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeGalleryLightbox();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeGalleryLightbox();
    }
});



