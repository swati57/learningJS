let addBtn = document.getElementById("add_btn")
addBtn.addEventListener('click',addChapter);

let parentList = document.getElementById('parentList')

function addChapter(e){
    console.log(parentList.children[0]);
    if(parentList.children[0].classList.contains("emptyMsg")) {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentChapter = currentInput.value
    if(currentChapter === '') return;
    let newLi = document.createElement('li')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = ` <h3 class="flex-grow-1">${currentChapter}</h3>
        <button class="btn btn-warning mx-3">Edit</button>
        <button class="btn btn-danger"  onClick=removeChapter(this)>Remove</button>`
    
    currentInput.value='';
    parentList.appendChild(newLi)
}

function removeChapter(currElement) {
    currElement.parentElement.remove()
    if(parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.className = "emptyMsg text-center"
        newEmptyMsg.textContent = "Nothing is here. Add a chapter!!"
        parentList.appendChild(newEmptyMsg)
    }
}

function editChapter(currElement) {
    if(currElement.textContent === "Done") {
        currElement.textContent = "Edit"
        let currChapterName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3')
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currChapterName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }
    else {
        currElement.textContent = "Done"
        let currChapterName = currElement.previousElementSibling.textContent
        let currInput = document.createElement('input')
        currInput.type = "text"
        currInput.className = "form-control"
        currInput.placeholder = "Chapter Name"
        currInput.value = currChapterName

        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}