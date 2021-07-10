import Content from '../Content/Content';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { shallow } from 'enzyme';

//Testando com snapshot pois testei o Router no App.js
test('snapshot from Content component', () => {
  const wrapper = shallow(
    <Router>
      <Content/>
    </Router>
  );

  expect(wrapper.debug()).toMatchSnapshot();
});