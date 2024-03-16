const body = document.querySelector("body")
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;++i){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

console.log(randomColor());
let intervalId
const startChangingColor = function(){
    if(!intervalId)
    intervalId=setInterval(change,1000);
    function change(){
    document.body.style.backgroundColor = randomColor();
    }
}
const start = document.querySelector('#start').
addEventListener('click', startChangingColor )

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
const stop = document.querySelector('#stop').
addEventListener('click', stopChangingColor )