import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PageFooter from './PageFooter';

describe('<PageFooter/>', () => {
  it('render', () => {
    const tree = renderer.create(<PageFooter createHandler={jest.fn} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Click event trigger', () => {
    const btnClick = jest.fn(() => {});
    const wrapper = shallow(<PageFooter createHandler={btnClick} />);
    wrapper.find('#btn-pageFooter-confirm').simulate('press');
    expect(btnClick).toHaveBeenCalled();
  });
});
