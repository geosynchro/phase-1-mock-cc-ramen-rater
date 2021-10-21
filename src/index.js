// write your code here
const url = 'http://localhost:3000/ramens'

//DOM selectors 

const menu = document.querySelector('#ramen-menu')
const details = document.querySelector('ramen-detail')
const form = document.querySelector('#new-ramen')


// listeners
 
menu.addEventListener('click', () => displayDetails())

//GET source using FETCH
function getAllRamen(){
    fetch(url)
    .then(resp => resp.json())
    .then(json => json)
    .then(renderAllRamen)
}
//Display all ramens in img tags in the div with id "ramen-menu" after page has loaded

function renderAllRamen(ramenArr){
    ramenArr.forEach(renderOneRamen)
}

function renderOneRamen(ramenObj){
    let ramenPic = document.createElement('img')
    ramenPic.src = ramenObj.image
    ramenPic.id = ramenObj.id
    menu.appendChild(ramenPic)
}

//When img is clicked from the "#ramen-menu" div, displays comment, rating, and image inside div "#ramen-detail"

function displayDetails(){
    console.log("clicked")
    // details.innerHTML = `
    //     <img class="detail-image" src= alt="Insert Name Here" />
    //     <h2 class="name">$</h2>
    //     <h3 class="restaurant">$</h3>
    //    ` 
}
//Create new ramen after submitting 'new-ramen' form.  Adds new ramen to "#ramen-menu" div (no persistence)



//eventlisteners
getAllRamen();

/* example object
{
"id": 1,
"name": "Shoyu Ramen",
"restaurant": "Nonono",
"image": "./assets/ramen/shoyu.jpg",
"rating": 7,
"comment": "Delish. Can't go wrong with a classic!"
},
*/