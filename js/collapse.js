document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("details.card");

    cards.forEach(card => {
        const content = card.querySelector("p");

        // Start collapsed
        content.style.opacity = 0;
        content.style.transition = "opacity 0.4s ease";

        card.addEventListener("toggle", () => {
            if (card.open) {
                // Fade in
                requestAnimationFrame(() => {
                    content.style.opacity = 1;
                });
            } else {
                // Fade out
                content.style.opacity = 0;
            }
        });
    });
});
