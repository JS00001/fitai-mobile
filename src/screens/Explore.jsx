import React from 'react';
import { View, StyleSheet }  from 'react-native';

import SegmentControl from '../components/SegmentControl';
import Container from '../components/Container';

export default function Explore() {

    return (
        <>
            <SegmentControl values={['Following', 'Featured']}/>
            <View style={styles.container}>
                <Container>
                    <Container.Title>Chest/Abs</Container.Title>
                    <Container.Subtitle>Workout your chest muscles</Container.Subtitle>
                    <Container.Subtitle>Your Average Time - 1 hour 30 minutes</Container.Subtitle>
                    <Container.Button>Modify Workout</Container.Button>
                    <Container.Button>Modify Workout</Container.Button>
                </Container>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})