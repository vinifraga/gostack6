import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories: {
        screen: Repositories,
        navigationOptions: () => ({
          title: 'GitIssues',
          headerStyle: { height: 64 },
        }),
      },
      Issues: {
        screen: Issues,
        navigationOptions: ({ navigation }) => ({
          title: navigation.state.params.name,
          headerStyle: { height: 64 },
          headerBackImage: (
            <Icon
              name="chevron-left"
              style={{
                color: '#000',
                margin: 10,
                fontSize: 20,
              }}
            />
          ),
        }),
      },
    },
    {
      initialRouteName: 'Repositories',
      headerBackTitleVisible: false,
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
