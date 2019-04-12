import React from 'react';
import {
  Route,
  Switch
} from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Video from './components/videos/Video';

export default () => (
  <App>
    <div id="content">
      <div className="container-fluid content-header">
        <a className="cursor-pointer">
          <span>
            <i className="fa fa-bars" />
            {``}
          </span>
        </a>
      </div>
      <Switch>
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.VIDEO} component={Video} />
      </Switch>
      <div className="footer-container">
        <span>© 2019 - Sprobe Inc.</span>
      </div>
    </div>
  </App>
);
