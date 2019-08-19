import {TOGGLE_CURRENCY, TOGGLE_SELECT} from '../actions';

const initialState = {
  products: [
    {name: '거울', price: 10000, isSelected: false},
    {name: '김치라면', price: 1000, isSelected: false},
    {name: '너구리', price: 1200, isSelected: false},
    {name: '락앤락', price: 4000, isSelected: false},
    {name: '마우스', price: 12000, isSelected: false},
    {name: '사각', price: 1000, isSelected: false},
    {name: '사각형', price: 10020, isSelected: false},
    {name: '스탠드', price: 20000, isSelected: false},
    {name: '신라면', price: 1100, isSelected: false},
    {name: '유리', price: 1000, isSelected: false},
    {name: '진라면', price: 1000, isSelected: false},
    {name: '일본', price: 10, isSelected: false},
    {name: '캔버스', price: 10000, isSelected: false},
    {name: '판때기', price: 100, isSelected: false},
  ],
  currencyDollar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CURRENCY:
      return {
        ...state,
        currencyDollar: !state.currencyDollar,
      };
    case TOGGLE_SELECT:
      return {
        ...state,
        products: [
          ...state.products.slice(0, action.idx),
          Object.assign({}, state.products[action.idx], {
            isSelected: !state.products[action.idx].isSelected,
          }),
          ...state.products.slice(action.idx + 1),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
