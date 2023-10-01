const signUpBtn = document.getElementById("signUpBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.querySelector(".modal-container");
const [name, nickname, email, password, pwCheck] =
  document.getElementsByTagName("input");
const [nameMsg, nicknameMsg, emailMsg, passwordMsg, pwCheckMsg] =
  document.getElementsByTagName("span");

/* ----- 버튼 click event ----- */
signUpBtn.onclick = (e) => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  document.signUpForm.submit(); // form submitted
};

/* ----- 버튼 disabled or enabled ----- */
const vaildation = {
  name: false,
  nickname: false,
  email: false,
  password: false,
  pwCheck: false,
};

// 사용자가 폼 내에 입력을 할 때마다 체크
document.signUpForm.onkeyup = () => {
  Object.values(vaildation).filter((v) => v === true).length === 5
    ? (signUpBtn.disabled = false)
    : (signUpBtn.disabled = true);
};

/* ----- 이름 체크 (빈 값인지 검사) ----- */
name.onkeyup = () => {
  if (name.value === "") {
    nameMsg.innerText = "필수 입력 항목입니다.";
    nameMsg.style.color = "rgb(200, 0, 0)";
    vaildation.name = false;
  } else {
    nameMsg.innerText = "멋진 이름이네요!";
    nameMsg.style.color = "rgb(25, 220, 74)";
    vaildation.name = true;
  }
};

/* ----- 닉네임 체크 (2~5글자) ----- */
nickname.onkeyup = () => {
  const len = nickname.value.length;
  if (len < 2 || len > 5) {
    nicknameMsg.innerText = "닉네임은 2~5글자로 구성해주세요.";
    nicknameMsg.style.color = "rgb(200, 0, 0)";
    vaildation.nickname = false;
  } else {
    nicknameMsg.innerText = "멋진 닉네임이군요!";
    nicknameMsg.style.color = "rgb(25, 220, 74)";
    vaildation.nickname = true;
  }
};

/* ----- 이메일 체크 (형식 검사) ----- */
email.onkeyup = () => {
  const regExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (regExp.test(email.value)) {
    emailMsg.innerText = "올바른 메일 형식입니다!";
    emailMsg.style.color = "rgb(25, 220, 74)";
    vaildation.email = true;
  } else {
    emailMsg.innerText = "올바른 이메일 형식이 아닙니다.";
    emailMsg.style.color = "rgb(200, 0, 0)";
    vaildation.email = false;
  }
};

/* ----- 비밀번호 체크 (영문+숫자+특수문자 포함 8~15자리) ----- */
password.onkeyup = () => {
  const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  if (regExp.test(password.value)) {
    passwordMsg.innerText = "안전한 비밀번호입니다!";
    passwordMsg.style.color = "rgb(25, 220, 74)";
    vaildation.password = true;
  } else {
    passwordMsg.innerText = "영문+숫자+특수문자를 조합하여 작성해주세요.";
    passwordMsg.style.color = "rgb(200, 0, 0)";
    vaildation.password = false;
  }
};

/* ----- 비밀번호 체크 (영문+숫자+특수문자 포함 8~15자리) ----- */
pwCheck.onkeyup = () => {
  if (password.value === pwCheck.value && password.value !== "") {
    pwCheckMsg.innerText = "비밀번호가 일치합니다!";
    pwCheckMsg.style.color = "rgb(25, 220, 74)";
    vaildation.pwCheck = true;
  } else {
    pwCheckMsg.innerText = "비밀번호가 일치하지 않습니다.";
    pwCheckMsg.style.color = "rgb(200, 0, 0)";
    vaildation.pwCheck = false;
  }
};
