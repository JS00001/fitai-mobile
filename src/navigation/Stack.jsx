import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Root from './Root';
import Login from '../screens/Login';

const NavStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NavStack.Navigator screenOptions={{headerShown: false}}>
            <NavStack.Screen name="Login" component={Login} />
            <NavStack.Screen name="Root" component={Root} />
        </NavStack.Navigator>
    )
}