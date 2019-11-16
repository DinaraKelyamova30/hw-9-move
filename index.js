const cat = document.querySelector('.cat');

function up() {
    let goUp = cat.offsetTop;
    if(goUp>150){
        cat.style.top = goUp - 10 + 'px';
    }
}

function down() {
    let goDown = cat.offsetTop;
    if(goDown<window.innerHeight-450){
        cat.style.top = goDown + 10 + 'px';
    }
}

function left() {
    let goLeft = cat.offsetLeft;
    if(goLeft>300){
        cat.style.left = goLeft - 10 + 'px';
    }
}

function right() {
    let goRight = cat.offsetLeft;
    if(goRight<window.innerWidth-1000){
    cat.style.left = goRight + 10 + 'px';
    }
}
