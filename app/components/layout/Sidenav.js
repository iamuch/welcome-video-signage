// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logoComplete from '../../assets/images/sprobe_logo_complete.png';
import {withRouter} from "react-router-dom";

class Sidenav extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <img className="sidebar-header-logo" src={logoComplete} />
        </div>
        <div className="d-flex flex-column">
          <p
            style={{
              fontSize: '13px',
              paddingLeft: '15px',
              paddingTop: '10px'
            }}
          >
            Main Navigation
          </p>
          <div
            className={`d-flex flex-row mb-3 cursor-pointer ${
              this.props.history.location.pathname === '/' ? 'active' : ''
            }`}
            style={{ paddingLeft: '15px', height: '30px' }}
            onClick={() => this.props.history.push('/')}
          >
            <span className="d-flex flex-row">
              <i className="fa fa-home align-self-center" />
              <p
                className="ml-4 align-self-center"
                style={{
                  fontSize: '14px',
                  marginBottom: '-2px'
                }}
              >
                Dashboard
              </p>
            </span>
          </div>
          <div
            className="d-flex flex-row mb-3 cursor-pointer"
            style={{ paddingLeft: '15px', height: '30px' }}
            onClick={() => this.props.history.push('/videos')}
          >
            <div className="active" />
            <span className="d-flex flex-row">
              <i className="fa fa-video align-self-center" />
              <p
                className="ml-4 align-self-center"
                style={{
                  fontSize: '14px',
                  marginBottom: '-2px'
                }}
              >
                Videos
              </p>
            </span>
          </div>
          <p
            style={{
              fontSize: '13px',
              paddingLeft: '15px',
              paddingTop: '10px'
            }}
          >
            Management
          </p>
          <div
            className="d-flex flex-row mb-3 cursor-pointer"
            style={{ paddingLeft: '15px', height: '30px' }}
          >
            <div className="active" />
            <span className="d-flex flex-row">
              <i className="fa fa-paper-plane align-self-center" />
              <p
                className="ml-4 align-self-center"
                style={{
                  fontSize: '14px',
                  marginBottom: '-2px'
                }}
              >
                Delivery
              </p>
            </span>
          </div>
          <div
            className="d-flex flex-row mb-3 cursor-pointer"
            style={{ paddingLeft: '15px', height: '30px' }}
          >
            <div className="active" />
            <span className="d-flex flex-row">
              <i className="fa fa-desktop align-self-center" />
              <p
                className="ml-4 align-self-center"
                style={{
                  fontSize: '14px',
                  marginBottom: '-2px'
                }}
              >
                Device
              </p>
            </span>
          </div>
          <div
            className="d-flex flex-row mb-3 cursor-pointer"
            style={{ paddingLeft: '15px', height: '30px' }}
          >
            <div className="active" />
            <span className="d-flex flex-row">
              <i className="fa fa-clock align-self-center" />
              <p
                className="ml-4 align-self-center"
                style={{
                  fontSize: '14px',
                  marginBottom: '-2px'
                }}
              >
                Transition
              </p>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidenav;
