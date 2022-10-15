import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    let theTemplate = document.querySelector("#popUpTemplate").content,
        theItems = document.querySelector('.popUp'),
        popUpClose = theItems.querySelector('.close'),
        ftInfo;
    const icons = document.querySelectorAll('button');
    

    function displayFt(info) {

        ftInfo = info;

        const items = Object.keys(info);

        items.forEach(item => {
           
            let panel = theTemplate.cloneNode(true);
           
            let containers = panel.firstElementChild.children;
               
            containers[0].querySelector('img').src = `images/${info[item].bannerImg}`;
            containers[0].querySelector('img').id = item;
            containers[0].querySelector('img').addEventListener('click', showItem);

            containers[1].textContent = info[item].titleFt;
            containers[2].textContent = info[item].favoriteThing;
            containers[3].textContent = info[item].ftdesc;

            containers[4].querySelector('img').src = `images/${info[item].icon}`;
            containers[4].querySelector('img').id = item;
            containers[4].querySelector('img').addEventListener('click', showItem);

            containers[5].querySelector('img').src = `images/${info[item].close}`;
            containers[5].querySelector('img').id = item;
            containers[5].querySelector('img').addEventListener('click', showItem);

            theItems.appendChild(panel);
        }) 
    }

    function showItem () {
        let currentItem = ftInfo[this.id]; 
    }

    getData('./data.json', displayFt);

    function openPopUp() {
        theItems.classList.add('.show-popUp');
    }

    function closePopUp(){
        theItems.classList.remove('.show-popUp');
    }

    

    icons.forEach(icon => icon.addEventListener('click', openPopUp));

    popUpClose.addEventListener('click', closePopUp);

})();