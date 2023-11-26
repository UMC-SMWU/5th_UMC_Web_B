/* ----- 리덕스에서 관리 할 state 정의 ----- */
const initialState = {
  id: "",
  pw: "",
  loading: false,
};

/* ----- action type 정의 ----- */
const CHANGE_ID = "CHANGE_ID";
const CHANGE_PW = "CHANGE_PW";
const IS_LOADING = "IS_LOADING";

/* ----- reducer 만들기 ----- */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ID:
      return { ...state, id: action.payload };
    case CHANGE_PW:
      return { ...state, pw: action.payload };
    case IS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default reducer;
