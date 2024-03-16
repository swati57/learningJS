const card=document.getElementById('card')
const userId = document.querySelector('#inputId')

const processReq = function(e){
    const url = `https://api.github.com/users/${userId.value}`
    const xhr = new XMLHttpRequest();
    userId.value = ''
    xhr.open('GET', url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){  
            const data = JSON.parse(this.responseText)
            // console.log(data.avatar_url+" "+data.followers);
            card.innerHTML = `
                <div id="cardDetail">
                    <img src=${data.avatar_url} alt="Avatar">
                    <h3>Followers: ${data.followers}</h3>
                </div>
            `
        }
    }
    xhr.send()
}

document.querySelector('#submit').
addEventListener('click', processReq)