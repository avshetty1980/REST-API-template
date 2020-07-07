//import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

//Navigation Version 4 implementation
/*const TabNavigator = createBottomTabNavigator(
  {
    People: PeopleList,
    Add: AddPerson,
    Company: CompanyList,
  },
  {
    initialRouteNames: 'People',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#80cbc4',
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#26a69a',
      },
    },
  },
);

export default createAppContainer(TabNavigator);*/

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="People"
      screenOptions={{gestureEnabled: false}}>
      <Tab.Screen
        name="People"
        component={PeopleList}
        tabBaroptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#80cbc4',
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: '#26a69a',
          },
        }}
        options={{
          tabBarIcon: (tintColor) => (
            <Icon name={'user'} size={50} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPerson}
        options={{
          tabBarIcon: (tintColor) => (
            <Icon name={'plus'} size={50} color={tintColor} />
          ),
        }}
        //initialParams={{ user: 'me' }}
      />
      <Tab.Screen
        name="Company"
        component={CompanyList}
        options={{
          tabBarIcon: (tintColor) => (
            <Icon name={'archive'} size={50} color={tintColor} />
          ),
        }}
        //initialParams={{ user: 'me' }}
      />
    </Tab.Navigator>
  );
}
