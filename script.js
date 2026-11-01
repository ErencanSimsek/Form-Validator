const form = document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const pass=document.querySelector('#password')
const repass=document.querySelector('#repassword')

form.addEventListener('submit',submit)

function error(error,text) {
    error.className='form-control is-invalid'
    error.nextElementSibling.innerHTML=`<p>${text}</p>`
    error.nextElementSibling.className='invalid-feedback'
}

function success(success) {
    success.className='form-control is-valid'
    success.nextElementSibling.innerHTML=`<p></p>`
    success.nextElementSibling.className=''
}

function validateEmail(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function submit(event) {
    if(username.value == ''){
        error(username,'Please Enter Your Username')
    }else{
        success(username)
    }

    if(email.value == ''){
        error(email,'Please Enter Your Email')
    }else if(!validateEmail(email.value)){
        error(email,'You have entered an incorrect email address.')
    }else{
        success(email)
    }

    if(pass.value == ''){
        error(pass,'Please Enter Your Password')
    }else{
        success(pass)
    }

    if(repass.value == ""){
        error(repass,'Please Enter Your Rep Password')
    }else{
        if(pass.value !== repass.value){
        error(repass,'Password do not match')
        }else{
            success(repass)
        }
    }
    event.preventDefault()
}