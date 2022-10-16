import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    let theTemplate = document.querySelector("#popUpTemplate").content,
        theItems = document.querySelector('.popUp'),
        popUpClose = theItems.querySelector('.close'),
        ftInfo;

    const icons = document.querySelectorAll('button');
    
    console.log(icons);

    
    function displayFt(info) {

        //ftInfo = info;

        const items = Object.keys(info);

        items.forEach(item => {
           
            let panel = theTemplate.cloneNode(true);
           
            let containers = panel.firstElementChild.children;
               
            containers[0].querySelector('img').src = `images/${info[item].bannerImg}`;
            containers[0].querySelector('img').id = item;
            containers[0].querySelector('img').addEventListener('click', function(item) { 
                openPopUp(info[item]);
            })

            containers[1].textContent = info[item].titleFt;
            containers[2].textContent = info[item].favoriteThing;
            containers[3].textContent = info[item].ftdesc;

            containers[4].querySelector('img').src = `images/${info[item].icon}`;
            containers[4].querySelector('img').id = item;
            containers[4].querySelector('img').addEventListener('click', function(item) {
                openPopUp(info[item]);
            })

            containers[5].querySelector('img').src = `images/${info[item].close}`;
            containers[5].querySelector('img').id = item;
            containers[5].querySelector('img').addEventListener('click', function(item) {
                openPopUp(info[item]);
            })  

            theItems.appendChild(panel);
        }) 
    }

    function showItem () {
        let currentItem = ftInfo[this.id]; 
        
    }

    getData('./data.json', displayFt);

    function openPopUp(item) {
        
        let theLigthbox = document.querySelector('.lightbox');
        theLigthbox.classList.add('show-popUp');
        showItem();
    }

    function closePopUp(){
        theLigthbox.classList.remove('show-popUp');
    }

    icons.forEach(icon => icon.addEventListener('click', openPopUp));

    // popUpClose.addEventListener('click', closePopUp);

})();