import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function Register({ navigation }) {
  const [user, setUser] = useState({
    namee: '',
    email: '',
    phone: '',
    password: '',
    profileImage: null,
  });

  const handleChange = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const pickImage = () => {
    ImagePicker.showImagePicker({ title: 'Select Profile Image' }, (response) => {
      if (!response.didCancel && !response.error) {
        setUser({ ...user, profileImage: response.uri });
      }
    });
  };

  const Register = async () => {
    try {
      // Validate user inputs

      let oldData = await AsyncStorage.getItem('register');
      oldData = JSON.parse(oldData) || [];

      const user_id = oldData.length > 0 ? oldData[oldData.length - 1].user_id + 1 : 1001;

      const details = {
        user_id: user_id,
        namee: user.namee,
        phone: user.phone,
        email: user.email,
        password: user.password,
        profileImage: user.profileImage,
      };

      const allDetails = [...oldData, details];

      await AsyncStorage.setItem('register', JSON.stringify(allDetails));
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
      <View style={styles.sub_container}>
        <Text style={styles.heading}>Register</Text>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="envelope" size={20} color="white" style={styles.inputIcon} />
          <TextInput onChangeText={(value) => handleChange(value, 'email')} style={styles.Input} placeholder="Email" />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="white" style={styles.inputIcon} />
          <TextInput onChangeText={(value) => handleChange(value, 'namee')} style={styles.Input} placeholder="Username" />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="phone" size={20} color="white" style={styles.inputIcon} />
          <TextInput onChangeText={(value) => handleChange(value, 'phone')} style={styles.Input} placeholder="Phone" />
        </View>

        <View style={styles.inputContainer}>
  <FontAwesome5 name="lock" size={20} color="white" style={styles.inputIcon} />
  <TextInput
    onChangeText={(value) => handleChange(value, 'password')}
    style={styles.Input}
    placeholder="Set password"
    secureTextEntry={true} // Set secureTextEntry to true for password input
  />
</View>

        <TouchableOpacity onPress={Register} style={styles.p}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('Login')} style={styles.already}>Already Registered? Login</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  Input: {
    borderColor: 'pink',

   
    height: 50,
    width: 230,
  
color:"white",
    padding: 5,
    borderRadius: 4,
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
    fontSize: 50,
    marginBottom: 10,
    color:'white',
  },
  sub_container: {
    width: '100%',
    height: '100%',
  
 
    
    alignSelf: 'center',
   justifyContent:'center',
   alignItems:'center',
    
   
   
  },
  button: {
    color: 'white',
  },
  p: {
    alignSelf: 'center',
    backgroundColor: 'pink',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    elevation: 10,
    shadowOffset: { width: -6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    margin: 10,
    borderRadius: 5,
    borderColor: 'grey',
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  imagePlaceholder: {
    fontSize: 18,
    color: '#3498db',
  },
  already:{
    color:'white'
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: 'pink',
    borderWidth: 2,
    margin: 10,
    height: 50,
    width: 230,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    color: 'white',
    
    borderRadius: 4,
  },
  inputIcon: {
    marginRight: 10,
    marginLeft:10,
  },
});
