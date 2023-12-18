//로그인 결과에 따라 값 변경
import { createSlice } from "@reduxjs/toolkit";
//액션타입 자동으로 생성
const initialState = {
  token: "",
  id: "",
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { AccessToken, userId } = action.payload;
      //action.payload에는 response.data.result값 있음
      //그냥 이름에 맞춰서 분해 할당하면 됨
      state.token = AccessToken;
      state.id = userId;
      return state;
    },
  },
});
export const { loginUser } = login.actions;
export default login.reducer;
