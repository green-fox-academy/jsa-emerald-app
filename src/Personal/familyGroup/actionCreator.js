import { BACKEND_URL } from 'react-native-dotenv';
import { getFamilyTransactions } from '../../FamilyTrans/actionCreator';

export const actionType = {
  GET_MEMBER_LIST: 'GET_MEMBER_LIST',
  SEARCH_FAILED: 'SEARCH_FAILED',
  CONFIRM_FAMILY_MEMBER: 'CONFIRM_FAMILY_MEMBER',
  CANCEL_MEMBER_SEARCH: 'CANCEL_MEMBER_SEARCH',
  UPDATE_FAMILY_LIST_FAILED: 'UPDATE_FAMILY_LIST_FAILED',
};

export function getMemberList(payload) {
  return {
    type: actionType.GET_MEMBER_LIST,
    payload,
  };
}

export function searchFailed(payload) {
  return {
    type: actionType.SEARCH_FAILED,
    payload,
  };
}

export function confirmFamilyMember(payload) {
  return {
    type: actionType.CONFIRM_FAMILY_MEMBER,
    payload,
  };
}

export function cancelMemberSearch() {
  return {
    type: actionType.CANCEL_MEMBER_SEARCH,
  };
}

export function updateFamilyListFailed(error) {
  return {
    type: actionType.UPDATE_FAMILY_LIST_FAILED,
    error,
  };
}

export const searchMember = (keyword) => (dispatch, getState) => {
  const { accessToken } = getState().user;
  fetch(`${BACKEND_URL}/users?contain=${keyword}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 401) {
      dispatch(searchFailed(response.message));
      throw new Error(response.status);
    } else {
      return response.json();
    }
  }).then((response) => {
    dispatch(getMemberList(response));
  }).catch(() => {
    dispatch(searchFailed('Network error, Please try again later'));
  });
};

export const updateFamilyMember = () => (dispatch, getState) => {
  const { members } = getState().familyList;
  const { accessToken } = getState().user;
  const membersList = members.map((item) => item.username);
  fetch(`${BACKEND_URL}/family`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ members: membersList }),
  }).then((response) => {
    if (response.status !== 200) {
      return response.json();
    }
    dispatch(getFamilyTransactions());
  }).then((response) => {
    if (response === undefined) {
      dispatch(updateFamilyListFailed('Unauthorized error'));
    } else {
      dispatch(updateFamilyListFailed(response.message));
    }
  }).catch(() => {
    dispatch(updateFamilyListFailed('Network Error, Please try again later'));
  });
};
