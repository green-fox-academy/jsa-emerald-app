import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DateSelector from './DateSelector';

describe('<DateSelector/>', () => {
  it('render', () => {
    const tree = renderer.create(<DateSelector
      transDate={1581379200}
      setTransDate={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Display Click event', () => {
    const wrapper = shallow(<DateSelector
      transDate={1581379200}
      setTransDate={jest.fn}
    />);
    wrapper.find('#text-datePick-display').simulate('press');
    wrapper.find('#dateTimePicker-dateSelector').simulate('cancel');
    wrapper.find('#dateTimePicker-dateSelector').simulate('confirm');
  });
});
