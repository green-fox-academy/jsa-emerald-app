import React from 'react';
import renderer from 'react-test-renderer';
import PageBanner from './PageBanner';

describe('<PageBanner/>', () => {
  it('render case 1', () => {
    const tree = renderer.create(<PageBanner
      transLabel={{
        name: '',
        icon: 'home',
        iconFamily: 'antdesign',
        color: '#08addb',
      }}
      transType="Expense"
      transAmount=""
      expStr=""
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render case 2', () => {
    const tree = renderer.create(<PageBanner
      transLabel={{
        name: 'House',
        icon: 'home',
        iconFamily: 'antdesign',
        color: '#08addb',
      }}
      transType="Income"
      transAmount="12.10"
      expStr=""
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render case 3', () => {
    const tree = renderer.create(<PageBanner
      transLabel={{
        name: 'House',
        icon: 'home',
        iconFamily: 'antdesign',
        color: '',
      }}
      transType="Expense"
      transAmount="12.10"
      expStr="#08addb"
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
