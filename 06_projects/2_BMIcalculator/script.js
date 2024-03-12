const form = document.querySelector('form')

console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    
    if(height== '' || height<0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height'
    }
    else if(weight== '' || weight<0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight'
    }
    else{
        const bmi = (weight / ((height*height)/1000)).toFixed(2)
        const guide = document.querySelector("#weight-guide")
        const underwt = guide.children[1]
        const normalwt = guide.children[2]
        const overwt = guide.children[3]
        console.log(underwt);
        // log
        let res = ''
        if(bmi<18.6)
        {
            res = 'Underweight'
            guide.children[1].style.color = 'red'
        }
        
        else if(bmi>=18.6 && bmi<=24.9) res = 'Normal in Weight'
        else
        {
            res = 'Overweight'
            guide.children[3].style.color = 'red'
        }
        results.innerHTML = `<span>${bmi}</br>You are ${res}</span>`

    }
    
})