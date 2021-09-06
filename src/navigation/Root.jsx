import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Logs from '../screens/Logs';
import Account from '../screens/Account';
import Explore from '../screens/Explore';
import Workouts from '../screens/Workouts';
import { colors, fontSizes } from '../style/index';

const Tab = createBottomTabNavigator();

export default function Root() {
    return (
        <Tab.Navigator
            initialRouteName="Explore"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.accent,
                headerStatusBarHeight: 65,
                headerTitleAlign: 'left',
                headerStyle: {
                    shadowColor: 'transparent',
                    backgroundColor: colors.primary500
                },
                headerTitleStyle: {
                    fontSize: fontSizes.h2,
                    fontWeight: '700',
                    paddingLeft: 10,
                    color: colors.white
                },
                tabBarStyle: {
                    backgroundColor: colors.primary400,
                    paddingTop: 15
                }
            }}
        >
            <Tab.Screen 
                name="Explore" 
                component={Explore} 
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="ios-compass" size={28} color={color} />
                }}
            />
            <Tab.Screen
                name="Workouts"
                component={Workouts}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="weight" size={28} color={color} />
                }}
            />
            <Tab.Screen
                name="Logs"
                component={Logs}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="md-pie-chart" size={28} color={color} />
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name="person" size={28} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}