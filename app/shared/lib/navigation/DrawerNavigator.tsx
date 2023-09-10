import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { InitialStackNavigator, RootStackParamList } from "./StackNavigator";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="DrawerStack" component={InitialStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
