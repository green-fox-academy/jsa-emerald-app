import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
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
});
