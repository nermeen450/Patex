// form validation
let userName = document.querySelector("[name = 'username']");
let userPhone = document.querySelector("[name = 'userphone']");
let usrEmail = document.querySelector("[name = 'useremail']");
let subject = document.querySelector("[name = 'subject']");
document.forms[0].onsubmit = function (e){
    let userValid = false;
    let phoneValid = false;
    let emailValid = false;
    let subjectValid = false;
    if(userName.value !== ""){
        userValid = true;
    }
    if(userPhone.value !== ""){
        phoneValid = true;
    }
    if(usrEmail.value !== ""){
        emailValid = true;
    }
    if(subject.value !== ""){
        subjectValid = true;
    }
    if(userValid === false || phoneValid === false || emailValid ===false || subjectValid === false){
        e.preventDefault();
        console.log("no")
    }
};
//switcher
const switcher = document.querySelector("#switcher");
const body = document.querySelector("#body");
switcher.addEventListener("click", function(e){
    console.log("pressed");
    body.classList.toggle("dark");

})

