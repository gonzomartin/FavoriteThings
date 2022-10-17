import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired');

    let popUpTemplate = document.querySelector("#popUpTemplate"),
        buttonContainer = document.querySelector('#buttonContainer'),
        theItems = document.querySelector('.popUp'),
        popUpClose = theItems.querySelector('.close');

    const icons = document.querySelectorAll('button');
    console.log(icons);


    function createButtons(info){
        const items = Object.keys(info);
        items.forEach(item => {
            let button = document.createElement("button");
            button.classList.add("icon");

            button.addEventListener('click', function(event) {
                openPopUp(event, info[item]);
            })  

            let img = document.createElement("img");
            img.src="images/" + info[item]["icon"];
            img.alt=item + " Icon";

            button.appendChild(img);
            buttonContainer.appendChild(button);
        })

    }
    
    // function displayFt(info) {

    //     //ftInfo = info;

    //     const items = Object.keys(info);

    //     items.forEach(item => {
           
    //         let panel = popUpTemplate.cloneNode(true);
           
    //         let containers = panel.firstElementChild.children;
               
    //         containers[0].querySelector('img').src = `images/${info[item].bannerImg}`;
    //         containers[0].querySelector('img').id = item;
    //         containers[0].querySelector('img').addEventListener('click', function(event) { 
    //             openPopUp(event, info[item]);
    //         })

    //         containers[1].textContent = info[item].titleFt;
    //         containers[2].textContent = info[item].favoriteThing;
    //         containers[3].textContent = info[item].ftdesc;

    //         containers[4].querySelector('img').src = `images/${info[item].icon}`;
    //         containers[4].querySelector('img').id = item;
    //         containers[4].querySelector('img').addEventListener('click', function(event) {
    //             openPopUp(event, info[item]);
    //         })

    //         containers[5].querySelector('img').src = `images/${info[item].close}`;
    //         containers[5].querySelector('img').id = item;
    //         containers[5].querySelector('img').addEventListener('click', function(event) {
    //             openPopUp(event, info[item]);
    //         })  

    //         theItems.appendChild(panel);
    //     }) 
    // }

    // function showItem () {
    //     // let currentItem = ftInfo[this.id]; 
    // }

    getData('./data.json', createButtons);
    // getData('./data.json', displayFt);

    function openPopUp(event, elementData) {
        
        let popUpInfo = document.querySelector('.popUpInfo');
        popUpInfo.classList.add('show-popUp');
        popUpInfo.querySelector("#banner").src = `images/${elementData.bannerImg}`;
        popUpInfo.querySelector(".ftTitle").textContent = elementData.titleFt;
        popUpInfo.querySelector(".favoriteThing").textContent = elementData.favoriteThing;
        popUpInfo.querySelector(".ftDescription").textContent = elementData.ftdesc;
        popUpInfo.querySelector("#fIcon").src = `images/${elementData.icon}`;
        popUpInfo.querySelector("#modalClose").addEventListener('click', function(event) {
            popUpInfo.classList.remove('show-popUp');
        })  
        // showItem();
    }



    // icons.forEach(icon => icon.addEventListener('click', openPopUp));

    //popUpClose.addEventListener('click', closePopUp);

})();