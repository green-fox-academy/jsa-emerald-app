export const keyboardLayout = [
  [1, 4, 7, 'C'],
  [2, 5, 8, '0'],
  [3, 6, 9, '.'],
  ['+', '-', 'Remove', 'Add'],
];

const isNumber = (value) => !Number.isNaN(parseFloat(value));

const getLastNum = (str) => {
  let rst = '';
  for (let iter = str.length - 1; iter >= 0; iter -= 1) {
    if (['+', '-'].indexOf(str.charAt(iter)) >= 0) {
      break;
    }
    rst = `${str.charAt(iter)}${rst}`;
  }
  return rst;
};

export const push = (oriStr, newChar) => {
  const lastNum = getLastNum(oriStr);
  if (newChar === '.') {
    if (lastNum.indexOf('.') < 0) {
      return `${oriStr}.`;
    }
    return oriStr;
  }

  if (isNumber(newChar) && lastNum.indexOf('.') >= 0 && lastNum.split('.')[1].length === 2) {
    return oriStr;
  }

  return oriStr + newChar;
};

export const pop = (oriStr) => oriStr.slice(0, -1);

export const getResult = (oriStr) => {
  const operationArr = [];
  let temp = '';
  for (let i = 0; i < oriStr.length; i += 1) {
    if (['+', '-'].indexOf(oriStr.charAt(i)) >= 0) {
      operationArr.push(temp);
      operationArr.push(oriStr.charAt(i));
      temp = '';
    } else {
      temp += oriStr.charAt(i);
    }
  }

  if (temp !== '') {
    operationArr.push(temp);
  }

  let result = 0;
  let sign = 1;
  operationArr.forEach((i) => {
    if (i === '+') {
      sign = 1;
    } else if (i === '-') {
      sign = -1;
    } else {
      temp = parseFloat(i);
      result += sign * temp;
    }
  });

  return result.toFixed(2).toString();
};
