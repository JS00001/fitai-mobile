import React from "react";
import { ListItem } from "react-native-elements";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

import Header from "./Header";
import { colors } from "../style";

/**
 * An <AccountDetails/> component is used to display the account details of the user.
 * @param {Number} props.followers - The number of followers the user has.
 * @param {Number} props.following - The number of users the user is following.
 * @param {Number} props.workouts - The number of workouts the user has done.
 */
export default function AccountDetails({ followers, following, workouts }) {
    return (
        <View style={styles.container}>
            <View style={styles.square}>
                <TextComponent number={followers} label="Followers" />
            </View>
            <View style={styles.square}>
                <TextComponent number={following} label="Following" />
            </View>
            <View style={styles.square}>
                <TextComponent number={workouts} label="Workouts" />
            </View>
        </View>
    );
}

function TextComponent({ number, label }) {
    return (
        <ListItem containerStyle={styles.textContainer}>
            <ListItem.Content>
                <ListItem.Title style={styles.width}>
                    <Header type="h3" color={colors.white} centered>
                        {number}
                    </Header>
                </ListItem.Title>
                <ListItem.Subtitle style={styles.width}>
                    <Header type="h5" color={colors.primary100} fontWeight="500" centered>
                        {label}
                    </Header>
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    square: {
        width: 100,
        margin: 5,
        alignItems: "center",
    },
    textContainer: {
        backgroundColor: "transparent",
        width: "100%",
    },
    width: {
        width: "100%",
    },
});
