import * as React from 'react';
import style from './style.module.css';
import arrowDown from '../../resources/arrowdown.png';
import pickup from '../../resources/pickup.png';
import hangup from '../../resources/hangup.png';

// export interface PhoneCallProps {
//   name: String,
//   id: number,
//   profileImageSrc?: any,
//   hide?: boolean
// }


const PhoneCall = () => (
  <div className={style.phoneCallWrapper}>
    <video src="http://localhost:8080/peopleareawesome.mp4" autoPlay muted className={style.mainVideo} />
    <div className={style.prevVideo}>
      <video src="http://localhost:8080/peopleareawesome.mp4" autoPlay muted />
      <div className={style.closePrev}>
        <img src={arrowDown} />
      </div>
    </div>
    <div className={style.hangup}>
      <img src={hangup} />
    </div>
    <div className={style.pickup}>
      <img src={pickup} />
    </div>
  </div>
);

export default PhoneCall;