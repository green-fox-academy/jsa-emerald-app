import { Alert, AsyncStorage } from 'react-native';

const StorageKeys = {
  transactionList: 'transactionList',
};

export async function loadTransactionList(callback) {
  const listStr = await AsyncStorage.getItem(StorageKeys.transactionList)
    .catch((err) => Alert(err));
  const list = JSON.parse(listStr);
  if (list) {
    callback(list);
  }
}

export async function saveTransactionList(item) {
  await AsyncStorage.setItem(StorageKeys.transactionList, JSON.stringify(item))
    .catch((err) => Alert(err));
}
