import React from 'react';
import { Popup } from 'react-leaflet';

import styles from './markerPopup.scss';

export default ({ id, isFound, species, breed, age, color, removeMarker }) => (<Popup>
  <div className={styles.popup}>
    <div className={styles.row}>
      <span className={styles.title}>Type: </span>
      <span>{ isFound ? 'Found' : 'Lost' }</span>
    </div>
    <div className={styles.row}>
      <span className={styles.title}>Species: </span>
      <span>{ species }</span>
    </div>
    <div className={styles.row}>
      <span className={styles.title}>Breed: </span>
      <span>{ breed }</span>
    </div>
    <div className={styles.row}>
      <span className={styles.title}>Age: </span>
      <span>{ age }</span>
    </div>
    <div className={styles.row}>
      <span className={styles.title}>Color: </span>
      <span>{ color }</span>
    </div>

    <button className={styles.removeButton} onClick={() => removeMarker(id)}>Remove</button>
  </div>
</Popup>);