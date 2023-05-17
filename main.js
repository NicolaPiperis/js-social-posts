// ARRAY DI OGGETTI
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// CICLO E CREAZIONE DELLE SCHEDE 
for (let i = 0; i < posts.length; i++) {
    let postIesimo = posts[i];

    // DESTRUTTURAZIONE
    let {id, content, media, author, created, likes} = postIesimo;
    let {name, image} = author ;


    let scheda =
`<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${image}" alt="${name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${name}</div>
                <div class="post-meta__time">${created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
        <img src="${media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`

// IMMETTI NELL'HTML
const elContainer = document.getElementById("container").innerHTML += scheda;
};

// VARIABILI GLOBALI
let elCounter = document.querySelectorAll(".js-likes-counter");
let arrayLikesButton = document.querySelectorAll(".like-button");
let arrayId = [];
let stateLike = false;

// CICLO PER RIPETERE AZIONI AL CLICK DEL MI PIACE
for (let i = 0 ; i < arrayLikesButton.length ; i++) {

    // DESTRUTTURAZIONE
    let postIesimo = posts[i];
    let {likes, id} = postIesimo;

    let arrayLikesButtonIesimo = arrayLikesButton[i];

    arrayLikesButtonIesimo.addEventListener("click",
        function(){
            if( stateLike === false ) {
                // CAMBIO COLORE
                arrayLikesButtonIesimo.classList.add("like-button--liked");
                stateLike = true;
                // AUMENTA I MI PIACE
                likes++
                // STAMPA IN PAGINA IL NUMERO AGGIORNATO
                elCounter[i].innerHTML = likes ;
                console.log(likes);
                // PUSHA ALL'INTERNO DELL'ARRAY VUOTO CREATO PRECEDENTEMENTE L'ID AL CLICK DEL MI PIACE AL DETERMINATO POST
                arrayId.push(id);
                console.log(arrayId);
            }
            else {
                // RIMUOVI COLORE
                arrayLikesButtonIesimo.classList.remove("like-button--liked");
                stateLike = false;
                // AL CLICK TOGLI IL MI PIACE PRECEDENTEMENTE AGGIUNTO
                likes--;
                // STAMPA IN PAGINA IL NUMERO AGGIORNATO
                elCounter[i].innerHTML = likes ;
                console.log(likes);
                // RIMUOVI L'ID DEL'ARRAY CHE HAI PRECEDENTEMENTE PUSHATO AL CLICK DEL MI PIACE
                arrayId.splice(arrayId.indexOf(id), 1);
            }        
        }
    )
}

