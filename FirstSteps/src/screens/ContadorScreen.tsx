import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fab } from "../components/Fab";

export const ContadorScreen = ()=>{

    const [contador, setContador] = useState(10)

  return(
    <View style={styles.container}>
      <Text
      style={styles.title}>Contador: {contador}</Text>
      <Fab
        title='+1'
        onPress={()=>setContador(contador +1)}
      />
      <Fab
        title='-1'
        position="bl"
        onPress={()=>setContador(contador -1)}
      />
      
      {/* <TouchableOpacity
        style={styles.fabLocationLeft}
        onPress={()=>setContador(contador -1)}
      >
        <View
            style={styles.button}
        >
            <Text style={styles.fabText}>-1</Text>
        </View>
        
      </TouchableOpacity> */}


    </View>

    
  )
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center'
        },
        title: {
            fontSize: 40,
            textAlign: 'center',
            top: -25
          },
        
    })