const form=document.getElementById("form")
const button=document.getElementById("button")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const fields=[
        {id:"name", warningId: "warning1", function:checkName},
        {id:"nickname", warningId: "warning2", function:checkNickname},
        {id:"email", warningId: "warning3", function: checkEmail},
        {id:"password1", warningId: "warning4", function:checkPassword},
        {id:"password2", warningId: "warning5", function:checkPw}
    ]
    let check = true;


    fields.forEach((field) =>{
        const inputElement=document.getElementById(field.id).value
        const warningMessage=document.getElementById(field.warningId)
        if (inputElement==""){
            warningMessage.textContent="필수 입력 항목입니다!"
            check=false;
        } 
        else{
            warningMessage.textContent=""
            if(field.function){
                const isValidField=field.function(inputElement)
                if (isValidField){
                warningMessage.style.color="green"}
              else{
                warningMessage.style.color="red"
                check=false;
                }
                }
        
        }})
     
    const modal=document.getElementById("modalback")

    if (check===true) {
        modal.style.display="flex"
    }  
})
function checkName(){
    if (document.getElementById("warning1").textContent===""){
        document.getElementById("warning1").textContent="멋진 이름이군요"
        return true;
    }
}

//닉네임 박스에 2~5글자 제한
function checkNickname(nickname){
    const warning2=document.getElementById("warning2")
    const check2=nickname.length>=2 && nickname.length<=5;
    warning2.textContent=check2?"멋진 닉네임이군요":"닉네임은 2~5글자여야 합니다"
    return check2;
}

//이메일 박스 형식 갖추지 않으면 경고 메시지 표출
function checkEmail(email) {
    const warning3=document.getElementById("warning3")
    const emailPattern =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const check3=emailPattern.test(email)
    warning3.textContent=check3?"멋진 이메일이군요":"유효한 이메일 주소를 입력하세요";
    return check3;
  }

//비밀번호 박스에 영문,숫자,특수문자 이외의 것 작성되면 경고메시지
function checkPassword(password) {
    const warning4=document.getElementById("warning4")
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    const check4=passwordPattern.test(password)
    warning4.textContent=check4?"안전한 비밀번호입니다!":"영어+숫자+특수문자를 조합하여 작성해주세요!";
    return check4;
  }

//비밀번호 확인 박스에 비밀번호와 동일하지 않도록 작성되면 경고메시지 표출
function checkPw(password2){
    const warning5=document.getElementById("warning5")
    const password1=document.getElementById("password1").value
    const check5=(password1===password2);
    warning5.textContent=check5?"비밀번호가 일치합니다":"비밀번호가 일치하지 않습니다";
    return check5;
}
