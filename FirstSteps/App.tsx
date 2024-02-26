import React from "react";
//import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";
import { ContadorScreen } from "./src/screens/ContadorScreen";
//import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import { SafeAreaView } from "react-native";
//import { DimensionesScreen } from "./src/screens/DimensionesScreen";
//import { PostionsScreen } from "./src/screens/PositionScreen";
const App = ()=>{
  return(
     <SafeAreaView style={{flex: 1}}>
      <ContadorScreen />

    
    </SafeAreaView>
   
  // 
  
  )
}

export default App