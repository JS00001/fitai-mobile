import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Header from './Header';
import { colors } from '../style';

export default function Button({
    children,
    onPress,
    rounded,
    color,
    mv,
    ...props
}) {

    const roundedStyle = rounded ? { borderRadius: 50 } : { borderRadius: 5 };

    const colorStyle = color ? { backgroundColor: color } : { backgroundColor: colors.accent };

    const buttonStyle = [styles.container, props.style, roundedStyle, colorStyle, { marginVertical: mv }];

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Header type="h4" fontWeight="600" color={colors.white} centered>
                {children}
            </Header>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '90%'
    }
})