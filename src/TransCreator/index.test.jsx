import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Index from './index';
import { store } from '../reduxStore';

describe('<TransCreator index/>', () => {
  it('render', () => {
    const tree = renderer.create(<Provider store={store}><Index navigation={{}} /></Provider>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
