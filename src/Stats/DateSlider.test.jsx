import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DateSlider from './DateSlider';
import utils from './utils';

const moment = require('moment');

describe('<DateSlider />', () => {
  it('render', () => {
    const tree = renderer.create(<DateSlider
      viewSet={utils.getDateSet(moment(), 'month')}
      onPressBtn={(set, cate) => utils.getDateSet(set, cate)}
      viewType="month"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render', () => {
    const type = 'year';
    const dateSet = utils.getDateSet(moment(), type);
    const tree = renderer.create(<DateSlider
      viewSet={dateSet}
      onPressBtn={(set, cate) => utils.getDateSet(set, cate)}
      viewType="year"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Left button click', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<DateSlider
      viewSet={utils.getDateSet(moment(), 'month')}
      onPressBtn={btnClick}
      viewType="month"
    />);
    wrapper.find('#btn-dateSlider-left').simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });

  it('Right button click', () => {
    const btnClick = jest.fn();
    const wrapper = shallow(<DateSlider
      viewSet={utils.getDateSet(moment(), 'month')}
      onPressBtn={btnClick}
      viewType="month"
    />);
    wrapper.find('#btn-dateSlider-right').simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });
});
