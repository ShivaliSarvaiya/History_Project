document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("details.card");

    cards.forEach(card => {
        const content = card.querySelector(".card-content");

        card.addEventListener("toggle", (e) => {
            if (card.open) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = "1";
                return;
            }


            e.preventDefault();


            content.style.maxHeight = content.scrollHeight + "px"; //start height
            content.style.opacity = "0";

            requestAnimationFrame(() => {
                content.style.maxHeight = "0";
            });

            setTimeout(() => {
                card.open = false; //manually close it
            }, 450);
        });
    });
});
