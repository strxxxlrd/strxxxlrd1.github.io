document.addEventListener("DOMContentLoaded", () => {

    const roulete = document.querySelector(".roulete");
    const left = document.querySelector(".left-butt");
    const right = document.querySelector(".right-butt");
    const slides = roulete.querySelectorAll(".rectangle-roulete");

    const gap = parseFloat(getComputedStyle(roulete).gap) || 0;
    const slideWidth = slides[0].getBoundingClientRect().width + gap;

    right.addEventListener("click", () => {
        if (roulete.scrollLeft + roulete.clientWidth >= roulete.scrollWidth - 1) {
            roulete.scrollTo({ left: 0, behavior: "auto" });
        }
        roulete.scrollBy({ left: slideWidth, behavior: "smooth" });
    });

    left.addEventListener("click", () => {
        if (roulete.scrollLeft <= 0) {
            roulete.scrollTo({ left: roulete.scrollWidth, behavior: "auto" });
        }
        roulete.scrollBy({ left: -slideWidth, behavior: "smooth" });
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const roulete = document.querySelector(".roulete");
    const slides = document.querySelectorAll(".rectangle-roulete");
    const buttons = document.querySelectorAll(".roulete-num");
    const numsContainer = document.querySelector(".nums");

    let activeIndex = 0;

    function updateActive(index) {
        activeIndex = index;

        // 1️⃣ обновить цвет кнопок
        buttons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });

        // 2️⃣ переместить контейнер так, чтобы активная кнопка была в центре
        const shift = (buttons[0].offsetWidth + 50) * index;
        numsContainer.style.transform = `translateX(calc(50vw - 60px - ${shift}px))`;
        // 50vw — центр экрана, 60px — половина ширины кнопки
    }

    // 3️⃣ клики по кнопкам
    buttons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            // листаем карусель на нужный слайд
            const slideWidth = slides[0].offsetWidth + 24;  
            roulete.scrollTo({
                left: i * slideWidth,
                behavior: "smooth"
            });
            updateActive(i);
        });
    });

    // 4️⃣ отслеживание скролла карусели
    roulete.addEventListener("scroll", () => {
        const slideWidth = slides[0].offsetWidth + 24;
        const index = Math.round(roulete.scrollLeft / slideWidth);
        updateActive(index);
    });

    // начальная установка
    updateActive(0);
});






