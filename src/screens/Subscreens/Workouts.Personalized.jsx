import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Container from '../../components/Container';

export default function WorkoutsPersonalized() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Container>
                    <Container.Title>Chest/Abs</Container.Title>
                    <Container.Subtitle>Average Length - 1 hour 30 minutes</Container.Subtitle>
                    <Container.Button>Preview</Container.Button>
                    <Container.Button>Save Workout</Container.Button>
                </Container>
                <Container>
                    <Container.Title>Chest/Abs</Container.Title>
                    <Container.Subtitle>Average Length - 1 hour 30 minutes</Container.Subtitle>
                    <Container.Button>Preview</Container.Button>
                    <Container.Button>Save Workout</Container.Button>
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