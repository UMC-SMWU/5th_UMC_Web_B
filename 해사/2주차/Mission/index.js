const form = document.getElementById('form');
const wrapper = document.getElementById('wrapper');
const name = document.getElementById('name');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');
const messages = document.getElementsByClassName('message');
const button = document.getElementById('submit');
const modalWrapper = document.getElementById('modal-wrapper');
const close = document.getElementById('close');

const pass = {
  name: '멋진 이름이네요!',
  nickname: '멋진 닉네임이군요!',
  email: '올바른 메일 형식입니다!',
  password: '안전한 비밀번호 입니다!',
  ['password-check']: '비밀번호가 일치합니다.',
};
const fail = {
  name: '필수 입력 항목입니다!',
  nickname: '닉네임은 2~5글자로 구성해주세요!',
  email: '올바른 메일 형식이 아닙니다!',
  password: '영어+숫자+특수문자를 조합하여 작성해주세요.',
  ['password-check']: '비밀번호가 일치하지 않습니다.',
};
const expression = {
  name: () => name.value !== '',
  nickname: () => nickname.value.length >= 2 && nickname.value.length <= 5,
  email: () => /^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/.test(email.value),
  password: () =>
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/.test(password.value),
  ['password-check']: () => password.value === passwordCheck.value,
};

wrapper.addEventListener('input', (e) => {
  const target = e.target.id;
  showValidateMessage(target);
  allPass();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  modalWrapper.style = 'display: flex';
});

close.addEventListener('click', () => (modalWrapper.style = 'display: none'));

function allPass() {
  const allPass = [...messages]
    .map((message) => [...message.classList][1]) // ['name', 'nickname', 'email', 'password', 'password-check']
    .every((id) => expression[id]());
  button.disabled = allPass ? false : true;
}

function showValidateMessage(target) {
  const message = findMessage(target);
  message.innerText = expression[target]() ? pass[target] : fail[target];
  message.classList.remove('pass', 'fail');
  message.classList.add(`${expression[target]() ? 'pass' : 'fail'}`);
}

function findMessage(element) {
  return [...messages].find((message) =>
    [...message.classList].includes(element)
  );
}
