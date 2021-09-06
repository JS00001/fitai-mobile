import React from 'react';
import { FAB } from 'react-native-elements';
import { ScrollView, View, StyleSheet } from 'react-native'

import Button from '../components/Button';
import Container from '../components/Container';
import SegmentControl from '../components/SegmentControl';

export default function Workouts() {
    return (
        <>
            <SegmentControl values={["Your Workouts", "Personalized"]}/>
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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
    }
})