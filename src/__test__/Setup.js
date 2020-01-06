import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};
copyProps(window, global);

// eslint-disable-next-line no-console
const originalConsoleError = console.error;
// eslint-disable-next-line no-console
console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }
  originalConsoleError(message);
};

Enzyme.configure({ adapter: new Adapter() });
