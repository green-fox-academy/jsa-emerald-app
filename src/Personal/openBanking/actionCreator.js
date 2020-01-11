export const actionType = {
  SET_BANK_LIST: 'SET_BANK_LIST',

};

export const SET_BANK_LIST = (list) => ({
  type: actionType.SET_BANK_LIST,
  payload: list,
});

export const loadBankList = () => (dispatch) => {
  fetch('https://oauth-sandbox.fintecture.com/res/v1/providers', {
    headers: {
      app_id: 'e9ac45bb-dd82-45a0-a092-c5a1bf398581',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => { dispatch(SET_BANK_LIST(response.data)); });
};
