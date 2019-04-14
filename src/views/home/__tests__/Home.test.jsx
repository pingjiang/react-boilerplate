import React from 'react';
import { mount } from 'enzyme';
import Home from '../Home';

it('should render msg', () => {
  const wrapper = mount(<Home />);
  expect(wrapper.find('HelloWorld')).toHaveText('Home1');
});
