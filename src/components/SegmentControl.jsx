import React from 'react';
import SegmentedControl from '@react-native-community/segmented-control';   
import { View, StyleSheet }  from 'react-native';

import { colors, fontSizes } from '../style';

export default function SegmentControl({ values, onChange }) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <View style={styles.controlContainer}>
            <SegmentedControl
                values={values}
                selectedIndex={selectedIndex}
                backgroundColor={colors.primary200}
                tintColor={colors.accent}
                fontStyle={{
                    color: colors.white,
                    fontSize: fontSizes.h5,
                    fontWeight: '800'
                }}
                activeFontStyle={{
                    color: colors.white,
                    fontSize: fontSizes.h5,
                }}
                onChange={event => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
                    {onChange(event.nativeEvent.selectedSegmentIndex)}
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    controlContainer: {
        width: '90%', 
        alignSelf: 'center', 
        marginVertical: 15
    }
})