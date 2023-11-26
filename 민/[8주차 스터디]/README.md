# 8주차 실습

state를 활용해서 로그인 화면을 구성해주세요.

- Open Weather Map API 가입 후 API_KEY 발급 받기
- 도시명과 API_KEY를 통해 날씨 정보를 받아올 수 있도록 하는 url 선언하기
- axios라이브러리 다운 받기
- location(city name) 입력 받을 입력창 만들기
- 해당 입력창을 통해 Data를 받아올 수 있도록 코드 구성하기
- input에 입력된 값이 Data에 있는 것과 동일할 경우 받아오고 싶은 data(도시명, 온도, 날씨)를 보여주도록 코드 작성하기
- 화씨 온도로 받아온 data 섭씨 온도로 변환해주기

### | 실습 완성본

![screen 2](https://github.com/UMC-SMWU/5th_UMC_Web_B/assets/121474189/e161e95f-35ca-498a-bb55-03128cca1c9b)

<br>

## 미션

- Redux를 활용할 것
- 아이디와 비밀번호를 *state*, *input*으로 관리할 것
- 로그인 버튼 클릭 시 빈 값이 하나라도 있다면, `alert()`로 *submit event*를 종료시킬 것
- *axios*를 통신하는 동안 버튼이 클릭되지 않도록 할 것
- *axios* 통신이 끝난 후 1.5초까지 'Loading...'을 출력할 것

### | 미션 완성본

![screen1](https://github.com/UMC-SMWU/5th_UMC_Web_B/assets/121474189/adc49ad7-e50f-4335-9aca-e2356c3a2684)
