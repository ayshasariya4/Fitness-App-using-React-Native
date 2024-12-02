import { Button, StyleSheet, TouchableOpacity,Text, View, ScrollView,ImageBackground } from "react-native";
import React from "react";
import Navigation from "./Navigation";

export default function Home({navigation}) {
    return ( 
      <ImageBackground source={{uri:"https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}>

    <View >
       <Text style={styles.quote}>Best</Text>
       <Text style={styles.main}>Workouts</Text>
       <Text style={styles.quote}>For You.</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Landing")} style={styles.p} >
        <Text style={styles.i}>Get Started</Text>
      </TouchableOpacity>
        
       
        
        
       
      
        
        
        </View >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "greenyellow",
        backgroundColor: "red",
    },
    quote:{
      color:"white",
      fontSize:70,
     
    },
    main:{
      color:"pink",
      fontSize:70,
      
    },
    color:{
      backgroundColor:"pink"
    },
    image:{
       
      flex: 1,
      resizeMode: 'cover', 
      justifyContent: 'center',
  },
    i:{
color:"white",
    },
    p:{
        alignSelf:'center',
        backgroundColor:"pink",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        height:50,
        width:150,
        elevation:10,
        shadowOffset:{width:-6,height:6},
        shadowRadius:6,
        shadowOpacity:0.4,
        margin:10,
        top:90,
        borderRadius:10,
       borderColor:"grey"
    }
});