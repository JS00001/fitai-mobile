import React from "react";
import { ListItem } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

import Button from "./Button";
import Header from "./Header";
import { colors } from "../style";

export default function Container({ children, onPress }) {
    const title = React.Children.map(children, (child) =>
        child.type.displayName === "Container.Title" ? child : null
    );

    const subtitle = React.Children.map(children, (child) =>
        child.type.displayName === "Container.Subtitle" ? child : null
    );

    const button = React.Children.map(children, (child) =>
        child.type.displayName === "Container.Button" ? child : null
    );

    return (
        <>
            <View style={styles.container}>
                <ListItem containerStyle={{ backgroundColor: "transparent" }}>
                    <ListItem.Content>
                        {Boolean(title.length) && (
                            <ListItem.Title style={{ marginVertical: 5 }}>
                                {title}
                            </ListItem.Title>
                        )}

                        {Boolean(subtitle.length) &&
                            subtitle.map((child, index) => (
                                <ListItem.Subtitle key={index} style={{ marginVertical: 2 }}>
                                    {child}
                                </ListItem.Subtitle>
                            ))}
                    </ListItem.Content>
                </ListItem>

                {Boolean(button.length) &&
                    button.map((child, index) => (
                        <View style={styles.buttonContainer} key={index}>
                            {child}
                        </View>
                    ))}
            </View>
        </>
    );
}

function ContainerTitle({ children }) {
    return (
        <Header type="h4" color={colors.white}>
            {children}
        </Header>
    );
}

function ContainerSubtitle({ children }) {
    return (
        <Header type="h5" fontWeight="500" color={colors.primary100}>
            {children}
        </Header>
    );
}

function ContainerButton({ children }) {
    return <Button mv={8}>{children}</Button>;
}

const styles = StyleSheet.create({
    container: {
        width: "85%",
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primary300,
        marginVertical: 10,
    },
    buttonContainer: {
        alignItems: "center",
    },
});

ContainerTitle.displayName = "Container.Title";
ContainerSubtitle.displayName = "Container.Subtitle";
ContainerButton.displayName = "Container.Button";

Container.Title = ContainerTitle;
Container.Subtitle = ContainerSubtitle;
Container.Button = ContainerButton;
