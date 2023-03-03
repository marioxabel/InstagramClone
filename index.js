const main = document.getElementById("main")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



function render(array){
    for (let i = 0; i < array.length; i++) {
        main.innerHTML += `
                            
                            <div class="postHeader">
                                <img class="avatar" src="${array[i].avatar}">
                                <div class="postTitle">
                                    <h1>${array[i].name}</h1>
                                    <p>${array[i].location}</p>
                                </div>
                            </div> 
                                <img class="post" src="${array[i].post}">
                            <div class="postBottom">
                                <img src="./images/icon-heart.png">
                                <img src="./images/icon-comment.png">
                                <img src="./images/icon-dm.png">
                                <h1 class="bottomText">${array[i].likes} likes</h1>
                                <p class="bottomText"><span>${array[i].username}</span> ${array[i].comment}</p>
                            </div>
                        
                        ` 
    }
}

render(posts)

