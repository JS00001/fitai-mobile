import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import { colors } from '../style';

export default function AccountHeader({username, avatar}) {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size={120}
                containerStyle={{backgroundColor: '#dddd'}}
            />
            <Header type="h3" color={colors.white} fontWeight="700" mv={20}>
                {username}
            </Header>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})