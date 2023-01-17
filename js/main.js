const aboutTabs = document.getElementsByClassName('about-tabs__tab');
const aboutTabContent = document.getElementsByClassName('about-content');
const progressTabs = document.getElementsByClassName('progress-tabs__tab');
const progressTabContent = document.getElementsByClassName('progress-content');

[...aboutTabs].forEach(tab => tab.addEventListener('click', tabClick));
// [...progressTabs].forEach(tab => tab.addEventListener('click', tabClick));
function tabClick(event) {
    const tabId = event.target.dataset.id;


    [...aboutTabs].forEach((tab, i) => {
        tab.classList.remove('active');
        aboutTabContent[i].classList.remove('active');
    })

    aboutTabs[tabId - 1].classList.add('active');
    aboutTabContent[tabId - 1].classList.add('active');

    // [...progressTabs].forEach((tab, i) => {
    //     tab.classList.remove('active-tab');
    //     progressTabContent[i].classList.remove('active-tab');
    //
    //
    // progressTabs[tabId - 1].classList.add('active-tab');
    // progressTabContent[tabId - 1].classList.add('active-tab')
// })
}



//     import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
//     const swiper = new Swiper('.swiper', {
//         direction: 'horizontal',
//         loop: true,
//         speed: 400,
//         slidesPerView: 3,
//         spaceBetween: 24,
//         effect: 'slide',
//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         }
//     });