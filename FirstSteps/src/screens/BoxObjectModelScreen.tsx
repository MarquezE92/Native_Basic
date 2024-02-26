import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const BoxObjectModelScreen = ()=> {
    return(
        <View
        style={styles.container}
        >
            <Text style={styles.title}>
            BoxObjectModel
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
   { container: {
        backgroundColor: 'red',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 40
    },
        title:{
            paddingHorizontal: 20,
            paddingVertical: 30,
            fontSize: 25,
            borderWidth: 10,
            backgroundColor: 'wheat',
            width:300
        }
    }
)