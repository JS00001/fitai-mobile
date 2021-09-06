import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Container from '../components/Container';

export default function Account() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Container>
                    <Container.Title>August 1, 2021</Container.Title>
                    <Container.Subtitle>Chest/Abs</Container.Subtitle>
                </Container>
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