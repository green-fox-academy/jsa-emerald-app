import React from 'react';
import App from './App';

describe('<App />', () => {
  it('render', () => {
    const tree = JSON.stringify(<App />);
    expect(tree).toMatchSnapshot();
  });
});
