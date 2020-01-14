import { BACKEND_URL } from 'react-native-dotenv';
// const BACKEND_URL = 'http://10.72.160.173:8080';

export const actionType = {
  ADD_FAMILY_TRANS_FAILED: 'ADD_FAMILY_TRANS_FAILED',
  GET_FAMILY_TRANS_START: 'GET_FAMILY_TRANS_START',
  GET_FAMILY_TRANS: 'GET_FAMILY_TRANS',
  GET_FAMILY_TRANS_FAILED: 'GET_FAMILY_TRANS_FAILED',
  GET_FAMILY_TRANS_END: 'GET_FAMILY_TRANS_END',
};

export function addFamilyTransFailed(error) {
  return {
    type: actionType.ADD_FAMILY_TRANS_FAILED,
    error,
  };
}

export function getFamilyTransStart() {
  return {
    type: actionType.GET_FAMILY_TRANS_START,
  };
}

export function getFamilyTrans(dataSet) {
  return {
    type: actionType.GET_FAMILY_TRANS,
    dataSet,
  };
}

export function getFamilyTransFailed(error) {
  return {
    type: actionType.GET_FAMILY_TRANS_FAILED,
    error,
  };
}

export const addFamilyTransactions = ({ transaction }) => (dispatch, getState) => {
  const { accessToken } = getState().user;
  if (!accessToken) {
    dispatch(addFamilyTransFailed('Unauthorized token'));
    return;
  }
  fetch(`${BACKEND_URL}/family-transactions`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  }).then((response) => {
    if (response !== 200) {
      return response.json();
    }
  }).then((response) => {
    if (response === undefined) {
      dispatch(addFamilyTransFailed('Unauthroized error'));
    }
    dispatch(addFamilyTransFailed(response.message));
  }).catch(() => {
    dispatch(addFamilyTransFailed('Network error, please try again later'));
  });
};

export const getFamilyTransactions = () => (dispatch, getState) => {
  const { accessToken } = getState().user;
  dispatch(getFamilyTransStart());
  if (!accessToken) {
    dispatch(getFamilyTransFailed('Unauthorized token'));
    return;
  }
  fetch(`${BACKEND_URL}/family-transactions`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json();
  }).then((response) => {
    if (response === undefined) {
      dispatch(getFamilyTransFailed('Unauthorized error'));
    } else if (response.code === 200) {
      dispatch(getFamilyTrans(response.data));
    } else {
      dispatch(getFamilyTransFailed(response.message));
    }
  }).catch(() => {
    dispatch(getFamilyTransFailed('Network error, please try again later'));
  });
};
