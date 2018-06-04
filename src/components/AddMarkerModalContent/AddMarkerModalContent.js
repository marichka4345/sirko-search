import React, { Component, Fragment } from 'react';

import FoundLostToggler from '../FoundLostToggler/FoundLostToggler';
import Select from '../Select/Select';
import FormControl from '../FormControl/FormControl';

import styles from './addMarkerModalContent.scss';

export default class AddMarkerModalContent extends Component { 
  state = {
    isFound: true,
    species: '',
    breed: '',
    age: '',
    color: ''
  };

  saveSelectValue = (event, selectName) => this.setState({
    [selectName]: event.target.value
  });

  changeMarkerType = (event) => this.setState({
    isFound: !event.target.checked
  });

  render () {
    const { pets, colors, addMarker } = this.props;
    const { species, breed, age, color } = this.state;
    const speciesData = pets.map(({ name }) => name);
    const foundSpecies = pets.find(({ name }) => name === species);
    const breedsData = foundSpecies ? foundSpecies.breeds : [];

    return (<Fragment>
      <div className={styles.title}>
        <h2>Add marker</h2>
        <FoundLostToggler onChange={ this.changeMarkerType }/>
      </div>

      <Select
        label="Species"
        options={ speciesData }
        value={ species }
        onChange={ (e) => this.saveSelectValue(e, 'species') } />
      <Select
        label="Breed"
        options={ breedsData }
        value={ breed }
        onChange={ (e) => this.saveSelectValue(e, 'breed') } />

      <FormControl label="Age">
        <input className={styles.input} type="text" value={ age } onChange={ (e) => this.setState({ age: e.target.value }) } />
      </FormControl>

      <Select
        label="Color"
        options={ colors }
        value={ color }
        onChange={ (e) => this.saveSelectValue(e, 'color') } />

      <button className={styles.submit} onClick={ () => addMarker(this.state) }>Submit</button>
    </Fragment>);
  }
}