import { BACKEND_URL, UPDATE_URL } from 'react-native-dotenv';

export const actionType = {
  // ADD_FAMILY_TRANS: 'ADD_FAMILY_TRANS',
  ADD_FAMILY_TRANS_FAILED: 'ADD_FAMILY_TRANS_FAILED',
  GET_FAMILY_TRANS: 'GET_FAMILY_TRANS',
};

// export function addFamilyTrans(type, date, amount, label) {
//   return {
//     type: actionType.ADD_FAMILY_TRANS,
//     data: {
//       type, date, amount, label,
//     },
//   };
// }

export function addFamilyTransFailed(error) {
  return {
    type: actionType.ADD_FAMILY_TRANS_FAILED,
    error,
  };
}

export function getFamilyTrans(dataSet) {
  return {
    type: actionType.RESTORE_TRANS,
    dataSet,
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
