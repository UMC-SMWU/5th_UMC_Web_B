document.addEventListener("DOMContentLoaded", function () {
    // 이 함수 내에서 join_check 함수를 호출
    join_check();
});

function join_check() {
    let isNameValid = false;
    let isNicknameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;
    let isPasswordMatch = false;

    let uname=document.getElementById("uname");
    let unickname=document.getElementById("unickname");
    let uemail=document.getElementById("uemail");
    let upw=document.getElementById("upw");
    let upw_ck=document.getElementById("upw_ck");

    let nameResult = document.querySelector(".name_hide");
    let nicknameResult = document.querySelector(".nickname_hide");
    let emailResult = document.querySelector(".email_hide");
    let pwResult = document.querySelector(".password_hide");
    let pwckResult = document.querySelector(".password_ck_hide");

    // 각 항목별 유효성 검사
    uname.addEventListener("keyup", function () {
        if (uname.value.length <= 0) {
            nameResult.innerHTML = "필수 입력 항목입니다!";
            uname.focus();
            isNameValid = false;
        } else {
            nameResult.innerHTML = "멋진 이름이네요!";
            isNameValid = true;
        }
        enableSubmitButton();
    });

    unickname.addEventListener("keyup", function () {
        if (unickname.value.length < 2 || unickname.value.length > 5) {
            nicknameResult.innerHTML = "닉네임은 2~5글자로 구성해주세요!";
            unickname.focus();
            isNicknameValid = false;
        } else {
            nicknameResult.innerHTML = "멋진 닉네임이군요!";
            isNicknameValid = true;
        }
        enableSubmitButton();
    });

    uemail.addEventListener("keyup", function () {
        if (uemail.value.indexOf('@') == -1) {
            emailResult.innerHTML = "올바른 메일 형식이 아닙니다!";
            uemail.focus();
            isEmailValid = false;
        } else {
            emailResult.innerHTML = "올바른 메일 형식입니다!";
            isEmailValid = true;
        }
        enableSubmitButton();
    });

    upw.addEventListener("keyup", function () {
        let pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!pwCheck.test(upw.value)) {
            pwResult.innerHTML = "영어+숫자+특수문자를 조합하여 작성해주세요";
            upw.focus();
            isPasswordValid = false;
        } else {
            pwResult.innerHTML = "안전한 비밀번호입니다!";
            isPasswordValid = true;
        }
        enableSubmitButton();
    });
    
    upw_ck.addEventListener("keyup", function () {
        if( upw.value && upw_ck.value ) {
            if (upw_ck.value===upw.value) {
                pwckResult.innerHTML = "비밀번호가 일치합니다.";
                isPasswordMatch = true;
            } else {
                pwckResult.innerHTML = "비밀번호가 일치하지 않습니다";
                upw_ck.focus();
                isPasswordMatch = false;
        }
        }
        enableSubmitButton();
    });
    
    const joinup = document.getElementById("joinup");
    const close = document.getElementById("close");
    const popup = document.querySelector(".popup");

    function enableSubmitButton() {
        // 모든 항목의 유효성 검사를 통과했을 때만 submit 버튼을 활성화
        if (isNameValid && isNicknameValid && isEmailValid && isPasswordValid && isPasswordMatch) {
            joinup.disabled = false;
            joinup.style.background= "rgb(26,26,26)";
        } else {
            joinup.disabled = true;
        }
    }

    // 팝업창
    joinup.onclick = () => {
        popup.style.display = "flex";
        document.join_form.submit();
    };

    close.onclick = () => {
        popup.style.display = "none";
    };

    // submit 버튼을 초기에 비활성화
    joinup.disabled = true;
}