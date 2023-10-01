const name = document.querySelector("#name");
const nick = document.querySelector("#nick");
const passwordInput = document.getElementById("password");
const passwordCheck = document.querySelector("#passwordCheck");
const nameF = document.querySelector(".nameF");
const nameT = document.querySelector(".nameT");
const nickF = document.querySelector(".nickF");
const nickT = document.querySelector(".nickT");
const email = document.querySelector("#email");
const emailF = document.querySelector(".emailF");
const emailT = document.querySelector(".emailT");
const passwordF = document.querySelector(".passwordF");
const passwordT = document.querySelector(".passwordT");
const passwordCheckF = document.querySelector(".passwordCheckF");
const passwordCheckT = document.querySelector(".passwordCheckT");
const joinButton = document.querySelector(".join_button");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

//이름
name.addEventListener("keyup", function () {
    if (name.value.trim() !== "") {
        nameT.classList.remove("hide");
        nameF.classList.add("hide");
    } else {
        nameT.classList.add("hide");
        nameF.classList.remove("hide");
    }
});

//닉네임


nick.onkeyup = function() {
    if(isBetween2And5Length(nick.value)){
        nickT.classList.remove("hide");
        nickF.classList.add("hide");
    }
    else{
        nickF.classList.remove("hide");
        nickT.classList.add("hide");
    }
}
function isBetween2And5Length(value) {
    return value.length >= 2 && value.length <= 5;
}
//이메일
email.addEventListener("keyup", function () {
    if (isValidEmail(email.value)) {
        emailT.classList.remove("hide");
        emailF.classList.add("hide");
    } else {
        emailT.classList.add("hide");
        emailF.classList.remove("hide");
    }
});

function isValidEmail(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailValue);
}
//비밀번호 유효성
passwordInput.addEventListener("keyup", function() {
    const password = passwordInput.value;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;

    if (passwordPattern.test(password)) {
        passwordT.classList.remove("hide");
        passwordF.classList.add("hide");
    } else {
        passwordF.classList.remove("hide");
        passwordT.classList.add("hide");
    }
});

//비밀번호 확인
passwordCheck.onkeyup = function(){
    if(isMatch(password.value,passwordCheck.value)){
        passwordCheckF.classList.add("hide");
        passwordCheckT.classList.remove("hide");
    }
    else{
        passwordCheckF.classList.remove("hide");
        passwordCheckT.classList.add("hide");
    }
}

function isMatch(password1, password2){
    if(password1===password2){
        return true;
    }
    return false;
}

//비어있을 때
joinButton.addEventListener("click", function () {
    if (name.value.trim() === "") {
        nameF.classList.remove("hide");
        nameT.classList.add("hide");
    } else {
        nameT.classList.remove("hide");
        nameF.classList.add("hide");
    }
    
    
});

//모달
joinButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  