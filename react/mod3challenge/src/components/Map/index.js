import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'mapbox-gl/dist/mapbox-gl.css';

import PropTypes from 'prop-types';
import { Creators as ModalActions } from '../../store/ducks/modals';
import './styles.css';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -15.799433,
      longitude: -47.864152,
      zoom: 14,
    },
  };

  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          lat: PropTypes.number.isRequired,
          lng: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [lng, lat] = e.lngLat;
    const { openModal } = this.props;

    openModal(lng, lat);
  };

  render() {
    const { viewport } = this.state;
    const {
      users: { data: users },
    } = this.props;
    return (
      <MapGL
        {...viewport}
        onViewportChange={newViewport => this.setState({ viewport: newViewport })}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
        onClick={this.handleMapClick}
      >
        {users.map(user => (
          <Marker
            key={user.id}
            latitude={user.lat}
            longitude={user.lng}
            onClick={this.handleMapClick}
            captureClick
          >
            <img alt={user.name} src={user.avatar} />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
