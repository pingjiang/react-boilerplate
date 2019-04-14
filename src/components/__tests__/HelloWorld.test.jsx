import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

it('should render msg', () => {
  const wrapper = shallow(<HelloWorld msg="Hello" />);
  expect(wrapper.text()).toEqual('Hello');
});
