import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditProfile = ({ route, navigation }) => {
  const [userData, setUserData] = useState({
    user_id: null,
    namee: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userFromParams = route.params?.user;
        if (userFromParams) {
          setUserData(userFromParams);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [route.params?.user]);
  

  const handleChange = (value, name) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      let storedUsers = await AsyncStorage.getItem('userregister');
      storedUsers = JSON.parse(storedUsers) || [];

      const updatedUsers = storedUsers.map((user) =>
        user.user_id === userData.user_id ? { ...user, ...userData } : user
      );

      await AsyncStorage.setItem('userregister', JSON.stringify(updatedUsers));

      // Pass the updated user data back to UserProfile using onUpdateUserData
      route.params?.onUpdateUserData(userData);

      navigation.goBack();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userData.namee}
        onChangeText={(value) => handleChange(value, 'namee')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userData.email}
        onChangeText={(value) => handleChange(value, 'email')}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={userData.phone}
        onChangeText={(value) => handleChange(value, 'phone')}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'pink',
    borderWidth: 2,
    margin: 15,
    height: 50,
    width: 230,
    alignSelf: 'center',
    elevation: 10,
    shadowOffset: { width: -6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    padding: 5,
    borderRadius: 4,
    color:'white'
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditProfile;
