import React from "react";
import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from "react-native";

//const {width, height} = Dimensions.get('window') 

export const PostionsScreen = ()=> {
    const {width, height} = useWindowDimensions();
    return(
        <View
       style={styles.container}
        >
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
    )
}

const styles = StyleSheet.create(

   {
    container: {
        flex: 1,
        backgroundColor: '#284CD9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 5,
        ...StyleSheet.absoluteFillObject //Es como ponerle position absolute y top, bottom, right, left en 0    
    },
    cajaNaranja:{
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 10,
        width: 100,
        height:100,
        }
    }
)