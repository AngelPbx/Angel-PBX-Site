// reducer.js
const token = "";
const thankYouMessage = "";
const invoiceLink = "";

const initialState = {
  token,
  thankYouMessage,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_THANKYOUMESSAGE":
      return { ...state, thankYouMessage: action.thankYouMessage };
    case "SET_INVOICE":
      return { ...state, invoiceLink: action.invoiceLink };
    default:
      return state;
  }
};

export default counterReducer;
