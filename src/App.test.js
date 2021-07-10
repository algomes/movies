import * as reactRedux from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

import App from './App';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';

test('Render initial components', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find(Content)).toHaveLength(1);
  expect(wrapper.find(Header)).toHaveLength(1);
});

describe('Test Movies rendering with Router', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  const mockDispatchFn = jest.fn()

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useDispatchMock.mockReturnValue(mockDispatchFn);
    useSelectorMock.mockReturnValue([]);
  });
  
  test('renders Movie', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/movies']} initialIndex={0}>
        <Route path="/movies" render={() => <Movies />} />
      </MemoryRouter>
    );
    expect(wrapper.find(Movies)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
  });
  
  test('renders Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Route path="/" render={() => <Home />} />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Movies)).toHaveLength(0);
  });
});

