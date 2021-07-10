import Home from '../Home';
import React from 'react';
import { shallow } from 'enzyme';

describe('Test home page', () => {
    test('Should have 3 li elements', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    test('Should have 1 ul element', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('ul')).toHaveLength(1);
      });
})