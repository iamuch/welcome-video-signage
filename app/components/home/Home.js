// @flow
import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import videoBoard from '../../assets/images/video.png';
import transitionBoard from '../../assets/images/transition.png';
import deliveryBoard from '../../assets/images/delivery.png';
import deviceBoard from '../../assets/images/device.png';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (arg) => {
    console.log(arg)
  };

  render() {
    return (
      <main className="main-content d-flex flex-column">
        <div className="content-sub-header">Dashboard</div>
        <div
          className="content-body-header m-0"
          style={{ padding: '25px 25px 0 25px' }}
        >
          <img
            className="cursor-pointer"
            src={videoBoard}
            style={{ marginRight: '1rem' }}
            onClick={() => this.props.history.push('/video')}
          />
          <img
            className="cursor-pointer"
            src={transitionBoard}
            style={{ marginRight: '1rem' }}
            onClick={() => this.props.history.push('/transition')}
          />
          <img
            className="cursor-pointer"
            src={deliveryBoard}
            style={{ marginRight: '1rem' }}
            onClick={() => this.props.history.push('/delivery')}
          />
          <img
            className="cursor-pointer"
            src={deviceBoard}
            style={{ marginRight: '1rem' }}
            onClick={() => this.props.history.push('/device')}
          />
        </div>
        <div className={`content-body ${styles.mtDashboard}`}>
          <FullCalendar dateClick={this.handleClick} defaultView="dayGridMonth" plugins={[dayGridPlugin, interactionPlugin]} />
        </div>
      </main>
    );
  }
}
