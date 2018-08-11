import * as React from 'react';
import style from './style.module.css';
import hangup from '../../resources/hangup.png';
import pickup from '../../resources/pickup.png';

const IncomingCallMessage = () => (
  <div>
    <div className={style.background} />
    <div className={style.pillWrapper}>
      <div className={style.pill}>
        <div className={style.hangupSide}>
          <img src={hangup} />
        </div>
        <div className={style.pickupSide}>
          <img src={pickup} />
        </div>
        <img src="http://i42.tinypic.com/330sh3o.jpg" className={style.image} />
      </div>
    </div>
  </div>
);

export default IncomingCallMessage;