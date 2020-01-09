import React from 'react';
import { shallow } from 'enzyme';
import ViewSelectionItem from './ViewSelectionItem';

describe('<ViewSelectionItem />', () => {
  it('should render month item', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<ViewSelectionItem title="Month" pressHandler={btnClick} />);
    expect(wrapper.toString()).toMatchSnapshot();
    wrapper.simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });

  it('should render year item', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<ViewSelectionItem title="Year" pressHandler={btnClick} />);
    expect(wrapper.toString()).toMatchSnapshot();
    wrapper.simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });
});
