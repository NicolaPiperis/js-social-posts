

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


for (let i = 0; i < posts.length; i++) {
    let postIesimo = posts[i];
    let elAuthor = postIesimo.author;

    let postsContent = postIesimo.content;
    let postsMedia = postIesimo.media;
    let postsAuthorName = elAuthor.name;
    let postsAuthorImage = elAuthor.image;
    let postsLikes = postIesimo.likes;
    let postsCreated = postIesimo.created;
    



    let scheda = `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${postsAuthorImage}" alt="${postsAuthorName}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${postsAuthorName}</div>
                <div class="post-meta__time">${postsCreated}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${postsContent}</div>
    <div class="post__image">
        <img src="${postsMedia}" alt="">
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
                Piace a <b id="like-counter-1" class="js-likes-counter">${postsLikes}</b> persone
            </div>
        </div> 
    </div>            
</div>`

const elContainer = document.getElementById("container").innerHTML += scheda;
};

// variabili globali
let elLikesButton = document.querySelectorAll(".likes__cta");
let elLikesButtonText = document.querySelectorAll(".like-button");

let index = 0;
let totalLikes = 0

for (let i = 0 ; i < elLikesButton.length ; i++) {
    let elLikesButtonIesimo = elLikesButtonText[i];
    elLikesButtonIesimo.addEventListener("click",
        function(){
            if(index === i) {
                elLikesButtonIesimo.style.color = "red" ;
                index++;
                i++;
                totalLikes++;
                console.log(" Hai messo in totale " + totalLikes + " like");
                
            }
        }
    )
}