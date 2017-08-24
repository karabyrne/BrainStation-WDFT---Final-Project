import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


import './App.css';
// import Toolbar from './components/component_toolbar.js';
// import Carousel from './components/component_carousel.js';

import IndustryProfessions from './components/component_industry-professions.js'
import Main from './main.js'
import Home from './components/component_home.js'
import ProfessionDetails from './components/component_profession-details.js'
import Blog from './components/component_blog.js'
import About from './components/component_about.js'
import Industries from './components/component_industries.js'


class App extends Component {
  render() {
    return (
      <div className="App">

          {/* <Toolbar />  */}
        {/* <Carousel />  */}

        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/professions/:industry/:name" component={ProfessionDetails} />
            <Route path="/professions/:industry" component={IndustryProfessions} />
            <Route path="/professions" component={Industries} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
          </Route> 
        </Router>

      </div>
    );
  }
}

export default App;
