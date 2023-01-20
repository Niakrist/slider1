// Элементы на странице

const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);

const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

sliderItems.forEach(function (slide, index) {

    // Скрываем все слайды кроме первого
    if (index != 0) slide.classList.add('hidden');

    // Добавляем index атрибут
    slide.dataset.index = index;

    // Клик по слайдам
    slide.addEventListener('click', function () {

        // скрываем текущий слайд
        this.classList.add('hidden');

        // расчитываем индекс следующего слайда
        let nextSlideIndex = Number(slide.dataset.index) + 1 === sliderItems.length ? 0 : Number(slide.dataset.index) + 1;

        // Находим элемен со следующим слайдом и показываем его
        const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
        nextSlide.classList.remove('hidden');
    });
})