import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './app/shared/lib/navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
  
);

export default App;
