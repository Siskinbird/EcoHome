const about = document.getElementById('about');
const firstSlide = document.getElementById('first-slide');
const secondSlide = document.getElementById('second-slide');
const thirdSlide = document.getElementById('third-slide')
const linkList = document.getElementsByClassName('link');

parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родителе на который мы нажали
    let target = event.target;
    console.log(target);

    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('link')) {
        for(let i = 0; i < linkList.length; i++) {
            // Убираем у других
            linkList[i].classList.remove('active');
        }
        // Добавляем тому на который нажали
        target.classList.add('active');
        for(let i = 0; i < linkList.length; i++) {
            if(linkList[0].classList.contains('active')) {
                // firstSlide.style.opacity = '1'
                firstSlide.style.display = 'grid'
                secondSlide.style.display = 'none'
                thirdSlide.style.display = 'none'
            }
            if(linkList[1].classList.contains('active')) {
                // firstSlide.style.opacity = '0'
                firstSlide.style.display = 'none'
                secondSlide.style.display = 'grid'
                thirdSlide.style.display = 'none'
            }
            if(linkList[2].classList.contains('active')) {
                firstSlide.style.display = 'none'
                secondSlide.style.display = 'none'
                thirdSlide.style.display = 'grid'
            }
        }


    }
});