import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Container from '../../components/Container';

export default function WorkoutsYours() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Container>
                    <Container.Title>Chest/Abs</Container.Title>
                    <Container.Subtitle>Workout your chest muscles</Container.Subtitle>
                    <Container.Subtitle>Your Average Time - 1 hour 30 minutes</Container.Subtitle>
                    <Container.Button>Modify Workout</Container.Button>
                    <Container.Button>Begin Workout</Container.Button>
                </Container>
                <Container>
                    <Container.Title>Legs/Muscles</Container.Title>
                    <Container.Subtitle>Workout your leg muscles</Container.Subtitle>
                    <Container.Subtitle>Your Average Time - 1 hour 20 minutes</Container.Subtitle>
                    <Container.Button>Modify Workout</Container.Button>
                    <Container.Button>Begin Workout</Container.Button>
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