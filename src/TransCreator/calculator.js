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

export default class Calculator {
  constructor() {
    this.init();
  }

  init() {
    this.operation = '';
  }

  push(val) {
    const lastNum = getLastNum(this.operation);
    if (val === '.') {
      if (lastNum.indexOf('.') < 0) {
        this.operation += '.';
      }
      return;
    }

    if (isNumber(val) && lastNum.indexOf('.') >= 0 && lastNum.split('.')[1].length === 2) {
      return;
    }

    this.operation += val;
  }

  pop() {
    this.operation = this.operation.slice(0, -1);
  }

  getResult() {
    const operationArr = [];
    let temp = '';
    for (let i = 0; i < this.operation.length; i += 1) {
      if (['+', '-'].indexOf(this.operation.charAt(i)) >= 0) {
        operationArr.push(temp);
        operationArr.push(this.operation.charAt(i));
        temp = '';
      } else {
        temp += this.operation.charAt(i);
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
  }

  getOperation() {
    return this.operation;
  }
}
