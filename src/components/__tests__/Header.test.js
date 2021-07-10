import Header from '../Header/Header';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { mount } from 'enzyme';

//Testando com snapshot pois testei o Router no App.js
test('snapshot from Header component', () => {
  const wrapper = mount(
    <Router>
      <Header/>
    </Router>
  );

  expect(wrapper.debug()).toMatchSnapshot();
});