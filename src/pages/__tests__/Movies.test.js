import * as reactRedux from 'react-redux';

import Movies from '../Movies';
import { shallow } from 'enzyme';

describe('Test Movies page iteration', () => {
  
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  const mockDispatchFn = jest.fn()

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    
    useDispatchMock.mockReturnValue(mockDispatchFn);
    useSelectorMock.mockReturnValue([
      {episode_id: 1, title: 'Movie 1'},
      {episode_id: 2, title: 'Movie 2'},
      {episode_id: 3, title: 'Movie 3'},
      {episode_id: 4, title: 'Movie 4'},
      {episode_id: 5, title: 'Movie 5'},
      {episode_id: 6, title: 'Movie 6'},
    ]);
  });

  test('render 6 buttons with movies information', () => {
    const wrapper = shallow(<Movies/>);
    expect(wrapper.find('button')).toHaveLength(6);
  });

  test('click in movie button', () => {
    window.alert = jest.fn();
    const wrapper = shallow(<Movies/>);
    const button = wrapper.find('button').first();

    button.simulate('click');
    wrapper.update();
    expect(window.alert).toHaveBeenCalledWith('Movie 1');
  });
})