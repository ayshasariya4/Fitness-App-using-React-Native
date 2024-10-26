import { StatusBar } from "expo-status-bar";
import React,{ useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

import Navigation from "./Screen/Navigation";

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  let a = 1;
  let b = 2;
  const c = 3;
  a = 10;
  b = 20;
  let phone = 9384743724
  let fname="Aysha"
  let lname="Sariya"

  function Hello() {
    alert("this is hello");
  }
 
  return (
   
  <Navigation/>
 
 
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
  },
});


 // <ScrollView>
      
      {/* <View style={[styles.container, { backgroundColor: backgroundColor }]}>
    <Home />
    <About />
    <Text>
      {a}, {b}, {c}
    </Text>
   
    <Text> HELLO WORLD </Text> <Text> HELLO WORLD </Text>
    <Text> HELLO WORLD </Text> <StatusBar style="auto" />
    <Button onPress={Hello} title="click" />
    <ArrowFunction />
    <ArrayMethods />
    
    <Input />
    <Destructuring />
    <Imp />
    <TernaryOperator/>
    <SpreadOperator/>
    <Props phone_no={phone} myfname={fname} mylname={lname}/>
    <Usestate changeBackgroundColor={changeBackgroundColor}/>
    <Useeffect/>
    <Images/>
   
  </View> */}
   // </ScrollView>