/* ==========================================
   BREWHAUS - MAIN JAVASCRIPT UTILITIES
   ========================================== */

/* 1. Mobile Navigation */
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

    // Close mobile menu when clicking any navigation link
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu on screen resize if window expands past mobile breakpoint
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});

/* 2. Dynamic Footer Year */
const yearElement = document.querySelector("#current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* 3. Menu Category Filter */
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

/* 4. Gallery Lightbox */
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
        lightboxImage.alt = "";
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

/* 5. Unified Global ESC Key Handler (Closes Menu & Lightbox cleanly) */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        // Handle Lightbox Close
        if (lightbox && !lightbox.hidden) {
            closeGalleryLightbox();
            return;
        }

        // Handle Mobile Menu Close
        document.querySelectorAll(".site-header").forEach((header) => {
            const button = header.querySelector(".menu-toggle");
            const nav = header.querySelector("nav");

            if (button && nav && (nav.classList.contains("open") || nav.classList.contains("is-open"))) {
                nav.classList.remove("open", "is-open");
                button.classList.remove("active");
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", "Open navigation menu");
                button.focus(); // Return focus back to hamburger button
            }
        });
    }
});