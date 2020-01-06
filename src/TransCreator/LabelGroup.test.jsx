import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LabelGroup from './LabelGroup';

describe('<LabelGroup/>', () => {
  it('render Expense', () => {
    const tree = renderer.create(<LabelGroup
      transType="Expense"
      setTransType={jest.fn}
      transLabel={{
        name: 'House',
        icon: 'home',
        iconFamily: 'antdesign',
        color: '#08addb',
      }}
      setTransLabel={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Income', () => {
    const tree = renderer.create(<LabelGroup
      transType="Income"
      setTransType={jest.fn}
      transLabel={{
        name: 'Salary',
        icon: 'briefcase',
        iconFamily: 'font-awesome',
        color: '#f87f91',
      }}
      setTransLabel={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });


  it('click event', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<LabelGroup
      transType="Income"
      setTransType={jest.fn}
      transLabel={{
        name: 'Salary',
        icon: 'briefcase',
        iconFamily: 'font-awesome',
        color: '#f87f91',
      }}
      setTransLabel={btnClick}
    />);

    wrapper.find('#th-item-WeChat').simulate('press');
    expect(btnClick).toHaveBeenCalledWith({
      color: '#1cd09d', icon: 'wechat', iconFamily: 'antdesign', name: 'WeChat',
    });
  });
});
