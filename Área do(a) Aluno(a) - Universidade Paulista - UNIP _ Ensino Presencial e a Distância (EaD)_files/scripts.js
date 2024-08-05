const buttonEnter = document.getElementsByClassName('login-button')
const inputUser = document.getElementById('inputRA')
const inputPass = document.getElementById('inputSenha')

var isInputUserFilled = false
var isInputPassFilled = false

inputUser.addEventListener('keydown', (e) => {
    if(e.target.value.length > -1){
        isInputUserFilled = true
        if(isInputPassFilled){
            buttonEnter[0].removeAttribute("disabled")
        }
    }
    else{
        isInputUserFilled = false
        buttonEnter[0].setAttribute("disabled", "disabled")
    }
})

inputPass.addEventListener('keydown', (e) => {
    if(e.target.value.length > -1){
        isInputPassFilled = true
        if(isInputUserFilled){
            buttonEnter[0].removeAttribute("disabled")
        }
    }
    else{
        isInputPassFilled = false
        buttonEnter[0].setAttribute("disabled", "disabled")
    }

})

var form = document.getElementById('login-form');
form.onsubmit = function(event){
        var xhr = new XMLHttpRequest();
        var formData = new FormData(form);
        console.log(formData)
        //open the request
        xhr.open('POST','https://localhost/API-123123/index.php/user')
        xhr.setRequestHeader("Content-Type", "application/json");

        //send the form data
        xhr.send(JSON.stringify(Object.fromEntries(formData)));

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                form.reset(); //reset form after AJAX success or do something else
            }
        }
        return false; 
    }