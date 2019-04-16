// @flow
import React, { Component } from 'react';
import styles from './Device.css';

type Props = {};

export default class Device extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="main-content d-flex flex-column">
        <div className="content-sub-header">Device</div>
        <div className="content-body">
          <p>Device Page</p>
        </div>
      </main>
    );
  }
}
