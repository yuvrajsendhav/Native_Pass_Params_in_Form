import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ContactStackNavigator,
  SettingFun,
  ContactFun,
} from './Navigation/StackMergeFun';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactFun}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'phone'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingFun}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'hammer-wrench'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'room-service'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
