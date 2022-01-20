function likeButton(){
    let coracao = document.querySelector('.coracao');
    let likes = document.querySelector('.likes');

    if(coracao.src.match("icons/coracao.png")){
        coracao.src = "icons/coracao(1).png";
        likes.innerHTML = '3,849 likes'
    }
    else{
        coracao.src = "icons/coracao.png";
        likes.innerHTML = '3,848 likes'
    }
}