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

    // Добавляем data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');

    // Клик по слайдам
    slide.addEventListener('click', function () {

        // скрываем текущий слайд
        this.classList.add('hidden');
        this.removeAttribute('data-active');

        // расчитываем индекс следующего слайда
        let nextSlideIndex = Number(slide.dataset.index) + 1 === sliderItems.length ? 0 : Number(slide.dataset.index) + 1;

        // Находим элемен со следующим слайдом и показываем его
        const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });

});

btnNext.onclick = function () {

    // Скрываем текущий слайд
    const currentSlide = document.querySelector('[data-active]');
    const currentSlideIndex = Number(currentSlide.dataset.index);
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показать следующий слайд
    let nextSlideIndex = (currentSlideIndex + 1 === sliderItems.length) ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

};

btnPrev.addEventListener('click', function () {

    // Скрываем текущий слайд
    const currentSlide = document.querySelector('[data-active]');
    const currentSlideIndex = Number(currentSlide.dataset.index);
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показать следующий слайд
    let prevSlideIndex = (currentSlideIndex - 1 < 0) ? sliderItems.length - 1 : currentSlideIndex - 1;
    console.log(prevSlideIndex);
    const prevSlide = slider.querySelector(`[data-index="${prevSlideIndex}"]`)
    prevSlide.classList.remove('hidden');
    prevSlide.setAttribute('data-active', '');

});