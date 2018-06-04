import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ADD_MARKER, REMOVE_MARKER } from '../../actions/markers';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Modal from '../../components/Modal/Modal';
import AddMarkerModalContent from '../../components/AddMarkerModalContent/AddMarkerModalContent';
import MarkerPopup from '../../components/MarkerPopup/MarkerPopup';
import Menu from '../Menu/Menu';

import { Filters } from '../../actions/filters';

import styles from './petMap.scss';
import markers from '../../reducers/markers';

const propertyNames = {
  [Filters.SHOW_BY_COLOR]: 'color',
  [Filters.SHOW_BY_SPECIES]: 'species',
  [Filters.SHOW_BY_TYPE]: 'isFound'
};

class PetMap extends Component {
  state = {
    initialPosition: {
      lat: 50.45466,
      lng: 30.5238
    },
    markers: [],
    zoom: 13,
    isModalVisible: false,
    isMenuVisible: false,
    position: {}
  }

  showModal = (e) => this.setState({
    isModalVisible: true,
    position: e.latlng
  });

  closeModal = () => this.setState({
    isModalVisible: false
  });

  toggleMenu = () => this.setState((prevState) => ({
    isMenuVisible: !prevState.isMenuVisible
  }));

  addMarker = (pet) => {
    const marker = {
      pet,
      position: this.state.position
    };
    this.props.addMarker(marker);
    this.closeModal();
  };

  removeMarker = (id) => {
    this.props.removeMarker(id);
  };

  renderModal = () => {
    const { pets, colors } = this.props;
    return (<Modal>
      <div className={styles.modal}>
        <span className={styles.modalClose} onClick={this.closeModal}>Close</span>
        <AddMarkerModalContent pets={pets} colors={colors} addMarker={ this.addMarker }/>
      </div>
    </Modal>);
  };

  getFilteredData = (filter, filteredItems) => {
    const { markers } = this.props;
    const data = filteredItems.length ? filteredItems : markers;
    
    return filter.values.reduce((result, value) => {
      const filteredData = data.filter(item => item.pet[propertyNames[filter.name]] === value);
      result = [...result, ...filteredData];
      return result;
    }, []);
    
  };
  
  getVisibleMarkers = () => {
    const { filters, markers } = this.props;
    return filters.length
      ? filters.reduce((result, filter) => {
        result = [ ...this.getFilteredData(filter, result)];
        return result;
      }, [])
      : markers;
  }

  render() {
    const markers = this.getVisibleMarkers();
    console.log(markers, this.props.filters);
    const modal = this.renderModal();

    return (
      <Fragment>
        <div className={`${styles.menuButton} ${this.state.isMenuVisible ? styles.cross : ''}`} onClick={this.toggleMenu}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        { this.state.isMenuVisible ? <Menu /> : null }
        <Map
          center={this.state.initialPosition}
          zoom={this.state.zoom}
          onclick={ (e) => this.showModal(e) }
          className={ styles.map }
          >
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
            />
            {
              markers.map((marker, idx) => 
               <Marker key={`marker-${idx}`} position={marker.position}>
                  <MarkerPopup removeMarker={this.removeMarker} id={marker.id} {...marker.pet} />
                </Marker>
              )
            }
          </Map>

          {
            this.state.isModalVisible ? 
            modal :
            null
          }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  pets: state.breeds,
  colors: state.colors,
  markers: state.markers,
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  addMarker(marker) {
    dispatch(ADD_MARKER(marker));
  },
  removeMarker(id) {
    dispatch(REMOVE_MARKER(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(PetMap);