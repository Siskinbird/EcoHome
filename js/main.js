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
