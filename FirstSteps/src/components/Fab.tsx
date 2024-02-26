import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, Platform } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl'
    onPress: ()=>void;
}

export const Fab = ({title, position ='br', onPress}:Props)=> {

    const ios= ()=> {
        return(
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={[styles.fabLocation,
                        position === 'bl'? styles.left : styles.right]}
                >
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                    
                </TouchableOpacity>
 
        )
    }

    const android = ()=> {
        return(
            <View
            style={[styles.fabLocation,
                position === 'bl'? styles.left : styles.right]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B',false, 30)}
                >
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                    
                </TouchableNativeFeedback>
            </View>
            
        )
    }
    
    return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation: {
        position:'absolute',
        bottom: 20,

    },
    right: {
        right:20
    },
    left: {
        left:20
    },
    button: {
        backgroundColor:'#5856d6',
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    fabText: {
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})