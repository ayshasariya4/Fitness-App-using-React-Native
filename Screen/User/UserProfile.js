import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const UserProfile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
  try {
    const storedUsers = await AsyncStorage.getItem('userregister');

    if (storedUsers) {
      const users = JSON.parse(storedUsers);

      // Log the retrieved user data
      console.log('Retrieved user data:', users);

      // Find the current user based on a condition (e.g., isLoggedIn)
      const currentUser = users.find((user) => user.isLoggedIn);

      // Log the result of finding the current user
      console.log('Current user:', currentUser);

      // Set user data in state
      setUserData(currentUser);
    } else {
      console.warn('No user data found in AsyncStorage.');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

    
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  // Function to handle navigation to the EditProfile screen
  const handleEditProfile = () => {
    navigation.navigate('EditProfile', {
      user: userData,
      onUpdateUserData: updateUserData,
    });
  };

  // Function to handle updating user data after editing
  const updateUserData = (updatedUserData) => {
    // Handle the updated user data as needed
    console.log('Updated user data:', updatedUserData);

    // Set the updated user data in state
    setUserData(updatedUserData);
  };

  // Function to handle logout (for now, it just navigates to the login screen)
  const handleLogout = async () => {
    try {
      // Clear user_id from AsyncStorage (if needed)
      // await AsyncStorage.removeItem('user_id');

      // Navigate to the login screen
      navigation.navigate('Landing');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // If user data is not available, show a loading message
  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render the user profile
  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      {/* Display user profile image or a placeholder if no image */}
     
      {/* Display user information */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoLabel}>Username:</Text>
        <Text style={styles.userInfo}>{userData.namee}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoLabel}>Email:</Text>
        <Text style={styles.userInfo}>{userData.email}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoLabel}>Phone:</Text>
        <Text style={styles.userInfo}>{userData.phone}</Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderColor:'pink',
    borderWidth:2,
    padding:10,
  },
  userInfoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'pink',
  },
  userInfo: {
    fontSize: 18,
    color: 'white',
  },
  backButton: {
    marginBottom: 10,
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

export default UserProfile;
