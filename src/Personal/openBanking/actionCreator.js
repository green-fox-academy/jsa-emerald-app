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
      app_id: '8419189c-748e-4c3d-abd6-caa25f03917c',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => { dispatch(SET_BANK_LIST(response.data)); });
};
