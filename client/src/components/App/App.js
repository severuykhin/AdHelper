import React, { Component, Fragment } from 'react';
import {Switch, 
        Route, 
        BrowserRouter} from 'react-router-dom';

import Index   from '../Pages/Index';
import Banners from '../Pages/BannersContainer';
import Error   from '../Pages/Error';
import User    from '../Pages/User';
import Header  from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>

            {/* <Header /> */}

            <Switch>  
              <Route path="/" exact component={Banners} />
              <Route path="/banners" exact component={Banners} />
							<Route path='/banners/:category' component={Banners} />
              <Route path='/user/:action' component={User} />              
              <Route component={Error} />
            </Switch>

          </Fragment>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
