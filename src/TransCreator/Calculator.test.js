import {
  keyboardLayout, append, removeLast, getResult,
} from './Calculator';

describe('Calculator Test', () => {
  it('keyboardLayout Check', () => {
    expect(keyboardLayout).toEqual([
      [1, 4, 7, 'C'],
      [2, 5, 8, '0'],
      [3, 6, 9, '.'],
      ['+', '-', 'Remove', 'Add'],
    ]);
  });

  it('append first period', () => {
    const res = append('120', '.');
    expect(res).toEqual('120.');
  });

  it('append second period', () => {
    const res = append('120.', '.');
    expect(res).toEqual('120.');
  });

  it('append number', () => {
    const res = append('120', '1');
    expect(res).toEqual('1201');
  });

  it('append number after period', () => {
    const res = append('120.', '1');
    expect(res).toEqual('120.1');
  });

  it('append number with decimal length > 2', () => {
    const res = append('120.12', '1');
    expect(res).toEqual('120.12');
  });

  it('append number to operation', () => {
    const res = append('10+120.1', '2');
    expect(res).toEqual('10+120.12');
  });

  it('remove last from NUMBER', () => {
    const res = removeLast('120.');
    expect(res).toEqual('120');
  });

  it('getResult with empty operation', () => {
    const res = getResult('');
    expect(res).toEqual('0.00');
  });

  it('getResult with single number', () => {
    const res = getResult('123');
    expect(res).toEqual('123.00');
  });

  it('getResult with multiple number', () => {
    const res = getResult('100+200+12.5');
    expect(res).toEqual('312.50');
  });

  it('getResult with multiple negative number i', () => {
    const res = getResult('100-200');
    expect(res).toEqual('-100.00');
  });
});
