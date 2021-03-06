import * as React from 'react';
import style from './style.module.css';
import pickup from '../../resources/pickup.png';

export interface UserTileProps {
  name: String,
  id: number,
  profileImageSrc?: any,
  hide?: boolean
}


const UserTile = (props: UserTileProps) => (
  <div className={props.hide ? style.hide : style.tile}>
    <img src={props.profileImageSrc} className={style.image} />
    <img src={pickup} className={style.phoneIcon}/>
    <div className={style.name}>
      {props.name}
    </div>
  </div>
);

export default UserTile;