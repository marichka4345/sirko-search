import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Filters, SET_FILTER, REMOVE_FILTER } from '../../actions/filters';

import styles from './menu.scss';

class Menu extends Component {
  toggleFilter = (name, event, value) => {
    const isChecked = event.target.checked;
    const filter = {
      name,
      value
    };

    if (isChecked) {
      this.props.setFilter(filter);
    } else {
      this.props.removeFilter(filter);
    }
  };

  render() {
    const { colors, breeds } = this.props;

    const typesData = ['Found', 'Lost'];
    const speciesData = breeds.map(({ name }) => name);

    return (
      <div className={styles.menu}>
        <h3 className={styles.title}>Filter</h3>
        <div className={styles.content}>
          <h4>By Type: </h4>
          {typesData.map((type, index) => (
            <div className={styles.filter}>
              <input
                className={styles.input}
                type="checkbox"
                id={`type-${index}`}
                onChange={e =>
                  this.toggleFilter(Filters.SHOW_BY_TYPE, e, type === 'Found')
                }
              />
              <label className={styles.label} htmlFor={`type-${index}`}>
                {type}
              </label>
            </div>
          ))}

          <h4>By Color: </h4>
          {colors.map((color, index) => (
            <div className={styles.filter}>
              <input
                className={styles.input}
                type="checkbox"
                id={`color-${index}`}
                onChange={e =>
                  this.toggleFilter(Filters.SHOW_BY_COLOR, e, color)
                }
              />
              <label className={styles.label} htmlFor={`color-${index}`}>
                {color}
              </label>
            </div>
          ))}

          <h4>By Species: </h4>
          {speciesData.map((species, index) => (
            <div className={styles.filter}>
              <input
                className={styles.input}
                type="checkbox"
                id={`species-${index}`}
                onChange={e =>
                  this.toggleFilter(Filters.SHOW_BY_SPECIES, e, species)
                }
              />
              <label className={styles.label} htmlFor={`species-${index}`}>
                {species}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds,
  colors: state.colors,
  filters: state.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter(filter) {
    dispatch(SET_FILTER(filter));
  },
  removeFilter(filter) {
    dispatch(REMOVE_FILTER(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
