import React from 'react';

import styles from './foundLostToggler.scss';

export default ({ onChange }) => (<div>
  <input type="checkbox" id="switcher" className={styles.input} onChange={onChange}/>
  <label htmlFor="switcher" className={styles.label}></label>
</div>);