import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { Constants } from 'expo';

import Icon from 'react-native-vector-icons/MaterialIcons';

import WorkBenchNavigation from '../../workbench/WorkBenchNavigation';
import ProfileNavigation from '../../profile/ProfileNavigation';
import GrabNavigation from '../../grab/GrabNavigation';
import BulletinNavigation from '../../bulletin/BulletinNavigation';

const HomeScreen = createBottomTabNavigator({
    Bulletin:{
        screen:BulletinNavigation,
        navigationOptions:{
            tabBarLabel:'公告栏',
            tabBarIcon:({tintColor})=>{
                return <Icon name={'notifications'} size={22} style={{color:tintColor}}></Icon>
            }
        }
    },
    Grab: {
        screen:GrabNavigation,
        navigationOptions: {
            tabBarLabel: '抢单',
            tabBarIcon:({ tintColor })=>{
                return <Icon name={'chat-bubble'} size={22} style={{color:tintColor}}/>
            }
        }
    },
    Workbench: {
        screen:WorkBenchNavigation,
        navigationOptions: {
            tabBarLabel: '工作台',
            tabBarIcon:({ tintColor })=>{
                return <Icon name={'apps'} size={22} style={{color:tintColor}}/>
            }
        }
    },
    Profile: {
        screen:ProfileNavigation,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon:({ tintColor, style })=>{
                return <Icon name={'person'} size={22} style={{color:tintColor}} />
            }
        }
    }
}, {
    initialRouteName:'Workbench'
},{
    navigationOptions: ({navigation})=>({
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            iconStyle: {
                fontSize: 24,
            },
        }
    })
});

export default HomeScreen;