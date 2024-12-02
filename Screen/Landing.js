<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Landing({ navigation }) {
  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1528805639423-44f7d2a3b368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"}} style={styles.image}>
      <View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Admin or User</Text>
          <Text style={styles.questionMark}>?</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
            <FontAwesome5 name="user-cog" size={30} color="pink" style={styles.icon1} />
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('UserRegister')} style={styles.buttonContainer}>
            <FontAwesome5 name="user" size={30} color="pink" style={styles.icon2} />
            <Text style={styles.buttonText}>User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  questionContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
  },
  questionText: {
    fontSize: 45,
    color: 'white',
  },
  questionMark: {
    fontSize: 45,
    color: 'pink',
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    marginLeft: 10, // Adjust marginLeft to provide space between icon and text
  },
  buttonContainer: {
    flexDirection: 'row', // Use flexDirection row
    
    padding: 10,

    alignItems: 'center',
    height: 100,
    width: 200,
    elevation: 10,
    shadowOffset: { width: -10, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    margin: 10,
    borderRadius: 10,
    borderColor: 'pink',
    borderWidth:2,
  },
  icon1: {
    marginRight:10,
    marginLeft:10
   // Adjust marginRight to provide space between icon and text
  },
  icon2:{
    marginRight:20,
    marginLeft:10,
  }
});
=======
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Landing({ navigation }) {
  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1528805639423-44f7d2a3b368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"}} style={styles.image}>
      <View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Admin or User</Text>
          <Text style={styles.questionMark}>?</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
            <FontAwesome5 name="user-cog" size={30} color="pink" style={styles.icon1} />
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('UserRegister')} style={styles.buttonContainer}>
            <FontAwesome5 name="user" size={30} color="pink" style={styles.icon2} />
            <Text style={styles.buttonText}>User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  questionContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
  },
  questionText: {
    fontSize: 45,
    color: 'white',
  },
  questionMark: {
    fontSize: 45,
    color: 'pink',
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    marginLeft: 10, // Adjust marginLeft to provide space between icon and text
  },
  buttonContainer: {
    flexDirection: 'row', // Use flexDirection row
    
    padding: 10,

    alignItems: 'center',
    height: 100,
    width: 200,
    elevation: 10,
    shadowOffset: { width: -10, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    margin: 10,
    borderRadius: 10,
    borderColor: 'pink',
    borderWidth:2,
  },
  icon1: {
    marginRight:10,
    marginLeft:10
   // Adjust marginRight to provide space between icon and text
  },
  icon2:{
    marginRight:20,
    marginLeft:10,
  }
});
>>>>>>> 353c9b09eb579acdb19c56de6d7636be1a16b10a
