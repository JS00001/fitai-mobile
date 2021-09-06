import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'

import Container from '../components/Container';
import SegmentControl from '../components/SegmentControl';

export default function Logs() {
    return (
        <>
            <SegmentControl values={["This Week", "This Month"]}/>
            <ScrollView>
                <View style={styles.container}>
                    <Container>
                        <Container.Title>September 1, 2021</Container.Title>
                        <Container.Subtitle>1 hour 10 minutes</Container.Subtitle>
                        <Container.Subtitle>Chest/Abs</Container.Subtitle>
                    </Container>
                    <Container>
                        <Container.Title>September 2, 2021</Container.Title>
                        <Container.Subtitle>1 hour 20 minutes</Container.Subtitle>
                        <Container.Subtitle>Legs/Muscles</Container.Subtitle>
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