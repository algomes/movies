import NotFound from '../NotFound';
import React from 'react';
import { shallow } from 'enzyme';

test('Should have h1 with not found message', () => {
    const wrapper = shallow(<NotFound/>);
    const text = wrapper.find('h1').text();

    expect(text).toBe('The page you are looking for was not found');
});