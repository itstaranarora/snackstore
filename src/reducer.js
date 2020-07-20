export const initialState = {
  orderList: [],
  user: null,
};

export const getOrderTotal = (orderList) =>
  orderList?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_ORDERLIST":
      return { ...state, orderList: [...state.orderList, action.item] };
    case "REMOVE_FROM_ORDERLIST":
      let newOrderList = [...state.orderList];
      const index = state.orderList.findIndex((item) => item.id === action.id);
      index >= 0 && newOrderList.splice(index, 1);
      return { ...state, orderList: [...newOrderList] };
    default:
      return state;
  }
};

export default reducer;
