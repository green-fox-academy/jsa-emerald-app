import React from 'react';
import renderer from 'react-test-renderer';
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
});

describe('<DateSlider />', () => {
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
});
