import React from 'react';

import FormControl from '../FormControl/FormControl';

import styles from './select.scss';

export default ({ label, options, value, onChange }) => (
  <FormControl label={label}>
    <select className={ styles.select } value={ value } onChange={ onChange }>
      <option value='' disabled>Select one</option>
      { options.map((option, index) => <option key={index} value={option}>{option}</option>) }
    </select>
  </FormControl>
  );