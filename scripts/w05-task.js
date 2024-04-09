/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
let templeList = new Array;

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach ((element) => {
        const article = document.createElement('article');
        const templeName = document.createElement('h3');
        templeName.innerText = element.templeName;
        const imageUrl = document.createElement('img');
        imageUrl.setAttribute('src', element.imageUrl);
        imageUrl.setAttribute('alt', element.location);
        article.appendChild(templeName);
        article.appendChild(imageUrl);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    if (response.ok) {
        templeList = await response.json();
        filterTemples(templeList);
    }
}

/* reset Function */

function reset() {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.lastChild);
    }
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector('#filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(templeList);
    } 
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});