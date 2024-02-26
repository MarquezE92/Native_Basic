import React from "react";
import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from "react-native";

//const {width, height} = Dimensions.get('window')  -> No cambia de valor cuando se gira la pantalla

export const DimensionesScreen = ()=> {
    const {width, height} = useWindowDimensions(); //Toma como valores el alto y ancho de la ventana
    return(
        <View
       style={styles.container}
        >
            <View style={{
                ...styles.cajaMorada,
                width: width*0.66
                }}>
                <Text style={styles.text}> W: {width}</Text>
            </View>
            <View style={{
                ...styles.cajaNaranja,
                height: height*0.66
                }}><Text style={styles.text}>H: {height}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create(
   { 
    container: {
        display: 'flex',
    },
    cajaMorada: {
        backgroundColor: 'red',
        alignSelf: 'center',
        display: 'flex',
        alignItems:'center'
        
    },
    text: {
        fontSize: 20
    },
    cajaNaranja:{
        backgroundColor: 'green',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }
    }
)