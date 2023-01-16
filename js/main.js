const tabs = document.getElementsByClassName('about-tabs__tab');
const tabContent = document.getElementsByClassName('about-content');

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
    const tabId = event.target.dataset.id;


    [...tabs].forEach((tab, i) => {
        tab.classList.remove('active');
        tabContent[i].classList.remove('active');
    })

    tabs[tabId - 1].classList.add('active');
    tabContent[tabId - 1].classList.add('active')
}



// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     speed: 400,
//     slidesPerView: 1,
//     spaceBetween: 10,
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });