import { BACKEND_URL } from 'react-native-dotenv';

export const actionType = {
  GET_MEMBER_LIST: 'GET_MEMBER_LIST',
  SEARCH_FAILED: 'SEARCH_FAILED',
  CONFIRM_FAMILY_MEMBER: 'CONFIRM_FAMILY_MEMBER',
  CANCEL_MEMBER_SEARCH: 'CANCEL_MEMBER_SEARCH',
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
    // console.log(response);
    dispatch(getMemberList(response));
  }).catch(() => {
    dispatch(searchFailed('Network error, Please try again later'));
  });
};
