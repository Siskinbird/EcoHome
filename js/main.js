const aboutTabsWrapper = document.querySelector('.about-tabs');


const aboutTabs = document.getElementsByClassName('about-tabs__tab');
const aboutTabContent = document.getElementsByClassName('about-content');

const test = document.getElementsByClassName('building-buttons')
const buildingTabsWrapper = document.querySelector('.building-buttons');
const buildingButtonsButton = document.getElementsByClassName('building-buttons__button');

const progressTabsWrapper = document.querySelector('.progress-tabs');

aboutTabsWrapper.addEventListener('click', aboutTabClick);
buildingTabsWrapper.addEventListener('click', buildingTabClick);
progressTabsWrapper.addEventListener('click', progressTabClick);







function aboutTabClick(event) {
    console.log(event.target);
    const tabId = event.target.dataset.id;
    [...aboutTabs].forEach((tab, i) => {
        tab.classList.remove('active');
        aboutTabContent[i].classList.remove('active');
    })

    aboutTabs[tabId - 1].classList.add('active');
    aboutTabContent[tabId - 1].classList.add('active');
}

function buildingTabClick(event) {
    console.log(event.target);
     const tabId = event.target.dataset.id;
     [...buildingButtonsButton].forEach((tab, i) => {
         tab.classList.remove('active');
         buildingButtonsButton[i].classList.remove('active');
     })
     buildingButtonsButton[tabId - 4].classList.add('active');
}


const progressTabs = document.getElementsByClassName('progress-tabs__tab');
const progressTabContent = document.getElementsByClassName('progress-content');


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
