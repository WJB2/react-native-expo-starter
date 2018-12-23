import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { connect } from '../../utils/dva';

import UserLoginScreen from './../security/login/UserLoginScreen';
import EnterpriseLoginScreen from './../security/login/EnterpriseLoginScreen';
import HomeScreen from './home/HomeScreen';


const MainLayout = createStackNavigator({
    EnterpriseLogin:{
        screen:EnterpriseLoginScreen,
    },
    UserLogin: {
        screen: UserLoginScreen,
    },
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            header:null
        }
    }
},{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#2483D0'
        }
    })
});

export default MainLayout;