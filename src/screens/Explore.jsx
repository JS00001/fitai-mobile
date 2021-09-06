import React from 'react';
import { View, StyleSheet }  from 'react-native';

import SegmentControl from '../components/SegmentControl';
import Container from '../components/Container';

export default function Explore() {

    return (
        <>
            <SegmentControl values={['Following', 'Featured']}/>
            <View style={styles.container}>

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