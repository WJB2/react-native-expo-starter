import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProfileScreen from './ProfileScreen';
import ProfileBill from './ProfileBill';
import ProfileMessage from './ProfileMessage';
import ProfilePassword from './ProfilePassword';

const ProfileNavigation = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
    },
    ProfileBill:{
        screen:ProfileBill
    },
    ProfileMessage:{
        screen:ProfileMessage
    },
    ProfilePassword:{
        screen:ProfilePassword
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default ProfileNavigation;