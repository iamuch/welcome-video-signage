// @flow
import React, { Component } from 'react';
import styles from './Transition.css';

type Props = {};

export default class Transition extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="main-content d-flex flex-column">
        <div className="content-sub-header">Transition</div>
        <div className="content-body">
          <p>Transition Page</p>
        </div>
      </main>
    );
  }
}
