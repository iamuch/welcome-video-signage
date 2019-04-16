import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Video from './components/video/Video';
import Sidenav from './components/layout/Sidenav';
import Delivery from "./components/delivery/Delivery";
import Device from "./components/device/Device";
import Transition from "./components/transition/Transition";

type Props = {
  history: {}
};

export default class Routes extends Component<Props> {
  render() {
    const { history } = this.props;
    return (
      <App>
        <Sidenav history={history} />
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
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.VIDEO} component={Video} />
            <Route exact path={routes.DELIVERY} component={Delivery} />
            <Route exact path={routes.DEVICE} component={Device} />
            <Route exact path={routes.TRANSITION} component={Transition} />
          </Switch>
          <div className="footer-container">
            <span>© 2019 - Sprobe Inc.</span>
          </div>
        </div>
      </App>
    );
  }
}
