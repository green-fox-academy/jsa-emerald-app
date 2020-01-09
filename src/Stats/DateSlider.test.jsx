import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DateSlider from './DateSlider';

const moment = require('moment');

const monthSet = [
  moment('20111031', 'YYYYMMDD').subtract(1, 'month'),
  moment('20111031', 'YYYYMMDD'),
  moment('20111031', 'YYYYMMDD').add(1, 'month'),
];

const yearSet = [
  moment('20111031', 'YYYYMMDD').subtract(1, 'year'),
  moment('20111031', 'YYYYMMDD'),
  moment('20111031', 'YYYYMMDD').add(1, 'year'),
];

describe('<DateSlider />', () => {
  it('render', () => {
    const tree = renderer.create(<DateSlider
      viewSet={monthSet}
      onPressBtn={jest.fn}
      viewType="month"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render', () => {
    const dateSet = yearSet;
    const tree = renderer.create(<DateSlider
      viewSet={dateSet}
      onPressBtn={jest.fn}
      viewType="year"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Left button click', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<DateSlider
      viewSet={monthSet}
      onPressBtn={btnClick}
      viewType="month"
    />);
    wrapper.find('#btn-dateSlider-left').simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });

  it('Right button click', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<DateSlider
      viewSet={monthSet}
      onPressBtn={btnClick}
      viewType="month"
    />);
    wrapper.find('#btn-dateSlider-right').simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });
});
