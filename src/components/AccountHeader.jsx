import React from 'react';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native';

import Header from './Header';
import { colors } from '../style';

/**
 * An <AccountHeader> component is used to display the user's avatar and name.
 * @param {Object} props.username - The user's username.
 * @param {Object} props.avatar - The user's avatar.
 * @param {Boolean} props.verified - Whether the user's account is verified.
 */
export default function AccountHeader({username, avatar, verified}) {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size={120}
                containerStyle={{backgroundColor: '#dddd'}}
            />
            <Header type="h3" color={colors.white} fontWeight="700" mv={20}>
                {username}
                {verified && (
                    <>
                        {"  "}
                        <Ionicons name="checkmark-circle-sharp" size={20} color={colors.accent} />
                    </>
                )}
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