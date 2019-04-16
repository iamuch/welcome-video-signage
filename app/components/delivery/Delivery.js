// @flow
import React, { Component } from 'react';
import styles from './Delivery.css';

type Props = {};

export default class Delivery extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="main-content d-flex flex-column">
        <div className="content-sub-header">Delivery</div>
        <div className="content-body">
          <p>Delivery Page</p>
        </div>
      </main>
    );
  }
}
