document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("details.card");

    cards.forEach(card => {
        const content = card.querySelector(".card-content");

        card.addEventListener("toggle", () => {
            if (card.open) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});
