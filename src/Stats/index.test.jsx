import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Stats from './index';

const mockStore = configureStore([]);
let store;
beforeAll(() => {
  store = mockStore({
    transactions: { transactions: [] },
  });
});

describe('Stats', () => {
  it('render', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Stats />
      </Provider>,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
