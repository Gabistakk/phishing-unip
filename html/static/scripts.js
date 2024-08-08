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