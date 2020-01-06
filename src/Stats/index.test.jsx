import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { store } from '../reduxStore';
import Stats from './index';

describe('Stats', () => {
  it('render', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Stats />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Visibility Click event', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Stats />
      </Provider>,
    );

    wrapper.find('#btn-stats-index-vsb').first().props().onPress();
    wrapper.find('#btn-stats-index-month').first().props().onPress();
    wrapper.find('#btn-stats-index-year').first().props().onPress();
  });
});
