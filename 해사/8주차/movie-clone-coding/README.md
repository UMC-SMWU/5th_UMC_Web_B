# 🔥 미션: API와 서버 통신

### 미션 내용

- **실습 목표**
  - Redux를 활용할 것
  - 아이디와 비밀번호를 *state*, *input*으로 관리할 것
  - 로그인 버튼 클릭 시 빈 값이 하나라도 있다면, `alert()`로 *submit event*를 종료시킬 것
  - *axios*를 통신하는 동안 버튼이 클릭되지 않도록 할 것
  - *axios* 통신이 끝난 후 1.5초까지 'Loading...'을 출력할 것
- **유저 정보**
  ```
  id: 'umcweb',
  pw: '1234'
  ```
- **API 명세서**
  - 반드시 body(obj)를 같이 보내줄 것.
    - body.id : user.id
    - body.pw : user.pw
  - 로그인 실패시
    - code : 400 = body 값이 비어 있을 때
    - code : 404 = 아이디 또는 비밀번호가 틀렸을 때
  - 로그인 성공 시
    - code : 200
    - useInfo = object, user의 데이터가 넘어올 것

### 완성본

![api-server](https://github.com/UMC-SMWU/5th_UMC_Web_B/assets/34948133/7639fdf2-a9bd-442b-9ef3-3a76cedcc242)
