/** ТАБЫ ДЛЯ БЛОКА "О НАС" */

const aboutTabsWrapper = document.querySelector('.about-tabs');
const aboutTabs = document.getElementsByClassName('about-tabs__tab');
const aboutTabContent = document.getElementsByClassName('about-content');

aboutTabsWrapper.addEventListener('click', aboutTabClick);


function aboutTabClick(event) {
    const tabId = event.target.dataset.id;
    [...aboutTabs].forEach((tab, i) => {
        tab.classList.remove('active');
        aboutTabContent[i].classList.remove('active');
    })

    aboutTabs[tabId - 1].classList.add('active');
    aboutTabContent[tabId - 1].classList.add('active');
}


/** ТАБЫ ДЛЯ БЛОКА "МЫ СТРОИМ ДОМА" */

const buildingButtonsButton = document.getElementsByClassName('building-buttons__button');

const buttons = document.querySelectorAll('.building-buttons__button')

for(let button of buttons) {
    button.addEventListener('click', function() {
        console.log(button);
        [...buildingButtonsButton].forEach((tab, i) => {
            tab.classList.remove('active');
        })
        button.classList.add('active')
    })
}


/** ТАБЫ ДЛЯ БЛОКА "ХОД СТРОИТЕЛЬСТВА" */

const progressTabsWrapper = document.querySelector('.progress-tabs');
const progressTabs = document.getElementsByClassName('progress-tabs__tab');
const progressTabContent = document.getElementsByClassName('progress-content');

progressTabsWrapper.addEventListener('click', progressTabClick);


function progressTabClick(event) {
    console.log(event.target);
    const tabId = event.target.dataset.id;
    [...progressTabs].forEach((tab, i) => {
        tab.classList.remove('active');
        progressTabContent[i].classList.remove('active');
    })

    progressTabs[tabId - 7].classList.add('active');
    progressTabContent[tabId - 7].classList.add('active');
}
