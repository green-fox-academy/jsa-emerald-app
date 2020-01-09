import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import moment from 'moment';
import configureStore from 'redux-mock-store';
import Index from './index';

const mockStore = configureStore([]);

describe('<TransCreator index/>', () => {
  it('render', () => {
    const store = mockStore({});
    moment.unix = jest.fn((value) => {
      if (value) {
        return { format: () => '01/06/2020' };
      }
      return 1578268800000;
    });
    const tree = renderer.create(<Provider store={store}><Index navigation={{}} /></Provider>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
