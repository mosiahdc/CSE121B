/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name:"John Ralph Mosiah Dela Cruz",
    photo:"images/profile.png",
    favoriteFoods:[
        'Spaghetti',
        'Steak',
        'Burger',
        'Ice Cream',
        'Ramen'
    ],
    hobbies:['Reading Books', 'Watching Anime', 'Cooking'],

    placesLived:[]
};


/* Populate Profile Object with placesLive objects */
let places = [
    { place: 'Negros Occidental, PH', length: '7 years' },
    { place: 'Cebu, PH', length: '6 months' },
    { place: 'Caraga Region, PH', length: '2 years' },
    { place: 'Bulacan, PH', length: '18 years' },
];

places.forEach(place => {
    myProfile.placesLived.push(place);
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = `Profile picture of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    dt.textContent = placesLived.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd')
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dd);
});
