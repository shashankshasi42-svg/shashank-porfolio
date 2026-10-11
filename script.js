const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

// Mobile navigation
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuBtn.textContent = navLinks.classList.contains("open")
        ? "✕"
        : "☰";
});

// Close the mobile menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Filter projects
filters.forEach(button => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filters.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(card => {
            const category = card.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();