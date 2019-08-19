export const TOGGLE_SELECT = 'TOGGLE_SELECT';
export const TOGGLE_CURRENCY = 'TOGGLE_CURRENCY';

export const toggleSelect = (idx) => {
  return {
    type: TOGGLE_SELECT,
    idx,
  };
};
export const toggleCurrency = () => {
  return {
    type: TOGGLE_CURRENCY,
  };
};
