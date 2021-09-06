import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AccountDetails from '../components/AccountDetails';

import Container from '../components/Container';

export default function Account() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <AccountDetails followers={10} following={100} workouts={100}/>
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