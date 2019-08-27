import React, { Fragment } from 'react';

import UsersList from '../../components/UsersList';
import ModalAddUser from '../../components/ModalAddUser';
import Map from '../../components/Map';

const Main = () => (
  <Fragment>
    <Map />
    <UsersList />
    <ModalAddUser />
  </Fragment>
);

export default Main;
