import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Button from '../components/Button';
import { colors } from '../style';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Button color={colors.primary200} mv={50} onPress={() => navigation.navigate('Root')}>
                <MaterialCommunityIcons name="apple" size={26} color={colors.white}/> 
                Login with Apple
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})