// @flow
import React, { Component } from 'react';
import styles from './Video.css';

type Props = {};

export default class Video extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="main-content d-flex flex-column">
        <div className="content-sub-header">Video</div>
        <div className="content-body">
          <p>Video Page</p>
        </div>
      </main>
    );
  }
}
