import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity ,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const UserDetail = ({ route ,navigation}) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        // Fetch the user details from AsyncStorage (or your data source) based on userId
        const storedUsers = await AsyncStorage.getItem('userregister');
        const existingUsers = storedUsers ? JSON.parse(storedUsers) : [];
        const selectedUser = existingUsers.find((item) => item.user_id === userId);

        // Set the user details in the state
        if (selectedUser) {
          setUser(selectedUser);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetail();
  }, [userId]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>User Detail</Text>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
    <View style={styles.container}>
       
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>User Detail</Text>
      
      <Text style={styles.text}>ID: {user.user_id}</Text>
      <Text style={styles.text}>Name: {user.namee}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Phone: {user.phone}</Text>
      {/* Display other user details as needed */}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
   
  },
  text:{
    color:'white',

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
    fontSize:25,
  },
  backButton: {
    marginBottom: 10,
  
  },

  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});

export default UserDetail;
