import './App.scss';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import configureStore from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Content/>
      </Router>
    </Provider>
  );
}

export default App;
