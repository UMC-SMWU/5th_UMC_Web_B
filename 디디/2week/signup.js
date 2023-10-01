const form=document.getElementById("form")
const button=document.getElementById("button")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const nameInput=document.getElementById("name").value
    const nicknameInput=document.getElementById("nickname").value
    const emailInput=document.getElementById("email").value
    const pw1Input=document.getElementById("password1").value
    const pw2Input=document.getElementById("password2").value

    const f1= checkname(nameInput);
    const f2 = checkNickname(nicknameInput);
    const f3 = checkEmail(emailInput);
    const f4 = checkPassword(pw1Input);
    const f5 = checkPw(pw1Input, pw2Input);
  
    const modal=document.getElementById("modalback")

    if (f1&&f2&&f3&&f4&&f5) {
        modal.style.display="flex"
    }  
})


function checkname(name){
    if (name==""){
        document.getElementById("warning1").textContent="필수 입력 항목입니다!"
        return false;
    }
    else{
        document.getElementById("warning1").textContent="멋진 이름이네요!"
        document.getElementById("warning1").style.color="green"
        return true;
    }
}
//닉네임 박스에 2~5글자 제한
function checkNickname(nickname){
    const warning2=document.getElementById("warning2")
    if (nickname==""){
        warning2.textContent="필수 입력 항목입니다!"
        return false;
    }
    const check2=nickname.length>=2 && nickname.length<=5;
    warning2.textContent=check2?"멋진 닉네임이군요":"닉네임은 2~5글자여야 합니다"
    warning2.style.color=check2?"green":"red";
    return check2;
}

//이메일 박스 형식 갖추지 않으면 경고 메시지 표출
function checkEmail(email) {
    const warning3=document.getElementById("warning3")
    if (email==""){
        warning3.textContent="필수 입력 항목입니다!"
        return false;
    }
    const emailPattern =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const check3=emailPattern.test(email)
    warning3.textContent=check3?"멋진 이메일이군요":"유효한 이메일 주소를 입력하세요";
    warning3.style.color=check3?"green":"red";
    return check3;
  }

//비밀번호 박스에 영문,숫자,특수문자 이외의 것 작성되면 경고메시지
function checkPassword(password) {
    const warning4=document.getElementById("warning4")
    if (password==""){
        warning4.textContent="필수 입력 항목입니다!"
        return false;
    }
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    const check4=passwordPattern.test(password)
    warning4.textContent=check4?"안전한 비밀번호입니다!":"영어+숫자+특수문자를 조합하여 작성해주세요!";
    warning4.style.color=check4?"green":"red";
    return check4;
  }

//비밀번호 확인 박스에 비밀번호와 동일하지 않도록 작성되면 경고메시지 표출
function checkPw(password1,password2){
    const warning5=document.getElementById("warning5")
    if (password2==""){
        document.getElementById("warning5").textContent="필수 입력 항목입니다!"
        return false;
    }
    const check5=(password1===password2);
    warning5.textContent=check5?"비밀번호가 일치합니다":"비밀번호가 일치하지 않습니다";
    warning5.style.color=check5?"green":"red";
    return check5;
}




