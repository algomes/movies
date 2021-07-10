import './Content.scss';

import {
    Route,
    Switch
} from "react-router-dom";

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import NotFound from '../../pages/NotFound';
import React from 'react';

const Content = () => {
    return (
        <div className="route">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/movies"><Movies /></Route>
                <Route path="**"><NotFound /></Route>
            </Switch>
        </div>
    );
  }
  
  export default Content;