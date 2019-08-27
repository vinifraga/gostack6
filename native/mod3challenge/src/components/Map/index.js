import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ModalActions } from '~/store/ducks/modal';
import styles, { Container, AvatarImage } from './styles';
import AddUser from '~/components/AddUser';

class Map extends Component {
  addUser = async ({ coordinate }) => {
    const { ToggleModalSuccess } = this.props;
    await ToggleModalSuccess(true, coordinate);

    return <AddUser latLng={coordinate} />;
  };

  render() {
    const {
      users: { data },
    } = this.props;
    return (
      <Container style={{ flex: 1 }}>
        <AddUser />
        <MapView
          style={styles.map}
          onLongPress={e => this.addUser(e.nativeEvent)}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
        >
          {data.map(user => (
            <Marker
              key={user.id}
              coordinate={user.latLng}
              title={user.title}
              description={user.subtitle}
            >
              <AvatarImage
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: '#FFF',
                }}
                source={{ uri: user.image }}
              />
            </Marker>
          ))}
        </MapView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
