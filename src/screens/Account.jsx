import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AccountDetails from '../components/AccountDetails';
import AccountHeader from '../components/AccountHeader';

import Button from '../components/Button';
import Container from '../components/Container';

export default function Account() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <AccountHeader username="Jack_Senyitko" avatar="Test"/>
                <AccountDetails followers={10} following={100} workouts={100}/>
                <Button>Edit Profile</Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
    }
})