document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const checkVisibility = () => {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
            if (inView) {
                item.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
