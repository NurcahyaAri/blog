import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {Provider} from 'react-redux';

import store from './stores';
import routes from './config/router';
import NotFound from './views/error/404';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {
            routes.map(data => {
              return (
                <Route path={data.path} exact={data.exact} component={data.component}/>
              )
            })
          }
          <Route path="*" exact={true} component={NotFound}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
