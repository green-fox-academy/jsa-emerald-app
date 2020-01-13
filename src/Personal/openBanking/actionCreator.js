const basicToken = 'Basic ZTlhYzQ1YmItZGQ4Mi00NWEwLWEwOTItYzVhMWJmMzk4NTgxOmRjNmYwNzU3LTZmZDktNGFkOS1hY2M2LTI4NzgyZTI3YjNjNQ==';

export const actionType = {
  SET_BANK_LIST: 'SET_BANK_LIST',
  SET_BANK_ID_CODE: 'SET_BANK_ID_CODE',
  SET_BANK_ACCESS_TOKEN: 'SET_BANK_ACCESS_TOKEN',
  SET_ACCOUNT_LIST: 'SET_ACCOUNT_LIST',
  SET_ACCOUNT_TRANSACTION: 'SET_ACCOUNT_TRANSACTION',
};

export const setBankList = (list) => ({
  type: actionType.SET_BANK_LIST,
  payload: list,
});

export const setBankIDCode = (id, code) => ({
  type: actionType.SET_BANK_ID_CODE,
  payload: { id, code },
});

export const setAccountAccessToken = (token) => ({
  type: actionType.SET_BANK_ACCESS_TOKEN,
  payload: token,
});

export const setAccountList = (list) => ({
  type: actionType.SET_ACCOUNT_LIST,
  payload: list,
});

export const setTransactions = (list) => ({
  type: actionType.SET_ACCOUNT_TRANSACTION,
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
    .then((response) => { dispatch(setBankList(response.data)); });
};

const encodeFormData = (data) => Object.keys(data)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');

export const loadTransactions = (token, id, accountID) => (dispatch) => {
  fetch(`https://api-sandbox.fintecture.com/ais/v1/customer/${id}/accounts/${accountID}/transactions`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => dispatch(setTransactions(response.data)));
};

export const loadAccountList = (token, account) => (dispatch) => {
  fetch(`https://oauth-sandbox.fintecture.com/ais/v1/customer/${account}/accounts/`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch(setAccountList(response.data));
      dispatch(loadTransactions(token, account, response.data[0].id));
    });
};

export const getAccessToken = (code, id) => (dispatch) => {
  fetch('https://oauth-sandbox.fintecture.com/oauth/accesstoken', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      Authorization: basicToken,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encodeFormData({
      grant_type: 'authorization_code',
      code,
      scope: 'AIS',
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch(setAccountAccessToken(response.access_token));
      dispatch(loadAccountList(response.access_token, id));
    });
};
