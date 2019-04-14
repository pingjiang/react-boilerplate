import React from 'react';
import { mount } from 'enzyme';
import About from '../About';

it('should render msg', () => {
  const wrapper = mount(<About />);
  expect(wrapper.find('HelloWorld')).toHaveText('About1');
});
