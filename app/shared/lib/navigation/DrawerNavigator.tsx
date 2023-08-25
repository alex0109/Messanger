import React, {useState} from 'react';
import {  StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserScreenStackNavigator,CreateGroupScreenStackNavigator } from './StackNavigator';
import DropDownPicker from 'react-native-dropdown-picker';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.drawerProfile}>
        <View style={{ alignItems: 'center', width: '70%' }}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Ellipse.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>User Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: 'gray' }}>@user_login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: '100%', width: '15%', paddingVertical: 10, }}>
          <TouchableOpacity>
            <Ionicons name="sunny" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.drawerLinks}>
        <TouchableOpacity style={styles.drawerButton}>
          <Ionicons name="people" size={30} />
          <Text style={styles.drawerButtonText}>Create group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerButton}>
          <Ionicons name="settings" size={30} />
          <Text style={styles.drawerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerButton}>
          <Ionicons name="radio" size={30} />
          <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name='profile' component={UserScreenStackNavigator}/>
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  drawerButtonText:{fontSize: 16, paddingLeft:10},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  drawerProfile: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  drawerLinks: { marginTop: 10 },
  drawerButtonContainer: {
    marginVertical: 10,
  },
  drawerButton: { flexDirection: "row", alignItems: "center", padding:10 },
});
export default DrawerNavigator;
