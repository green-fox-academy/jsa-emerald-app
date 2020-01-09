import React from 'react';
import renderer from 'react-test-renderer';
import TransList from './TransList';

describe('<TransList />', () => {
  it('should render with selected label', () => {
    const dataList = [
      [
        {
          amount: 111.00,
          date: 'December 24th 2019',
          label: {
            color: '#aa78db',
            icon: 'shoppingcart',
            iconFamily: 'antdesign',
            name: 'Shopping',
          },
          comment: 'expand',
          type: 'Expense',
        },
      ],
    ];
    const tree = renderer.create(<TransList
      transactions={dataList}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with default label', () => {
    const dataList = [
      [
        {
          amount: 111.00,
          date: 'December 24th 2019',
          type: 'Expense',
        },
      ],
    ];
    const tree = renderer.create(<TransList
      transactions={dataList}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
