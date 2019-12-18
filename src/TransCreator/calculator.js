
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
    return this.getResult();
  }

  push(val) {
    const lastNum = getLastNum(this.operation);
    if (val === '.') {
      if (lastNum.indexOf('.') < 0) {
        this.operation += '.';
      }
      return this.getResult();
    }

    if (isNumber(val) && lastNum.indexOf('.') >= 0 && lastNum.split('.')[1].length === 2) {
      return this.getResult();
    }

    this.operation += val;
    return this.getResult();
  }

  pop() {
    this.operation = this.operation.slice(0, -1);
    return this.getResult();
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
        return;
      }

      if (i === '-') {
        sign = -1;
        return;
      }
      temp = parseFloat(i);
      result += sign * temp;
    });

    return result.toString();
  }

  getOperation() {
    return this.operation;
  }
}
