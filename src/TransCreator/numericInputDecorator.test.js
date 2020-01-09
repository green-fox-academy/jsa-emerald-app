import decorator from './numericInputDecorator';

describe('numericInputDecorator', () => {
  it('with empty input', () => {
    const res = decorator('');
    expect(res).toEqual(null);
  });

  it('with integer', () => {
    const res = decorator('123');
    expect(res).toEqual('123');
  });

  it('with float', () => {
    const res = decorator('123.12');
    expect(res).toEqual('123.12');
  });

  it('with invalid number i', () => {
    const res = decorator('123.123');
    expect(res).toEqual('123.12');
  });

  it('with invalid number ii', () => {
    const res = decorator('.');
    expect(res).toEqual(null);
  });
});
