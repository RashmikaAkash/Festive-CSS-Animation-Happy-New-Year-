document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    // Generate multiple fireworks dynamically
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 80}vh`;
        firework.style.animationDelay = `${i * 0.5}s`;

        // Add crackers to each firework
        for (let j = 0; j < 12; j++) {
            const cracker = document.createElement("div");
            cracker.classList.add("cracker");
            firework.appendChild(cracker);
        }

        body.appendChild(firework);
    }
});
