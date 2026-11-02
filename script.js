const form = document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const pass=document.querySelector('#password')
const repass=document.querySelector('#repassword')

form.addEventListener('submit', submit)

function error(input,text){
    input.className='form-control is-invalid'
    input.nextElementSibling.innerHTML=`<p>${text}</p>`
    input.nextElementSibling.className='invalid-feedback'
}
function success(input){
    input.className='form-control is-valid'
    input.nextElementSibling.innerHTML=''
    input.nextElementSibling.className=''
}

function ifelse(input,text){
    if(input.value == ''){
        error(input,text)
    }else{
        success(input)
    }
}

function validateEmail(email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function submit(event) {
    ifelse(username,'Please Enter Username')
    ifelse(email,"Please Enter Email")
    ifelse(pass,"Please Enter Password")
    ifelse(repass,"Please Enter Re-Password")

    if(repass !== "" && repass.value !== pass.value){
        error(repass,"The Passwords do not Match")
    }
    if(!validateEmail(email)){
        error(email,'Please use the @ symbol')
    }
    event.preventDefault();
}