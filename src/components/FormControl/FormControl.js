import React from 'react';

import styles from './formControl.scss';

export default (props) => (
  <div className={styles.formControl}>
    <label className={styles.label}>{ props.label }</label>
    <div className={styles.input}>
      { props.children }
    </div>
  </div>
  );