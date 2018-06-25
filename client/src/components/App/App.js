import React, { Component, Fragment } from 'react';
import {Switch, 
        Route, 
        BrowserRouter} from 'react-router-dom';

import Index from '../Pages/Index';
import Error from '../Pages/Error';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>

            <Header />

            <Switch>  
              <Route path="/" exact component={Index} />
              <Route component={Error} />
            </Switch>

          </Fragment>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
