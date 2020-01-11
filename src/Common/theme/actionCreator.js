export const actionType = {
  UPDATE_MODE: 'UPDATE_MODE',
};

export function updateMode(mode) {
  return {
    type: actionType.UPDATE_MODE,
    mode,
  };
}
