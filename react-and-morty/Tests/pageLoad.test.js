import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

// checks if the page loads succesfully
describe('App', () => {
    it('should render successfully', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
    });
  });