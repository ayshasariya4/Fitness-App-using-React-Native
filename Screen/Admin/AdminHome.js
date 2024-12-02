import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,ImageBackground } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome } from '@expo/vector-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';



const AdminHome = ({ navigation }) => {
  const [userCount, setUserCount] = useState(0);
  const [workoutCount, setWorkoutCount] = useState(0);

  const fetchUserCount = async () => {
    try {
      const userData = await AsyncStorage.getItem('userregister');
      const users = JSON.parse(userData) || [];
      setUserCount(users.length);
    } catch (error) {
      console.error('Error fetching user count', error);
    }
  };

  const fetchWorkoutCount = async () => {
    try {
      const workoutData = await AsyncStorage.getItem('workouts');
      const workouts = JSON.parse(workoutData) || [];
      setWorkoutCount(workouts.length);
    } catch (error) {
      console.error('Error fetching workout count', error);
    }
  };

  useEffect(() => {
    fetchUserCount();
    fetchWorkoutCount();
  }, []);

  const navigateToUsers = () => {
    navigation.navigate('ManageUsers');
  };

  const navigateToWorkouts = () => {
    navigation.navigate('Workouts');
  };

  const navigateToReports = () => {
    navigation.navigate('Reports');
  };

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
      <TouchableOpacity
  style={styles.profileIcon}
  onPress={() => {
    // Navigate to the user profile screen
    navigation.navigate('Landing');
  }}
>
  <FontAwesomeIcon icon={faSignOut} size={24} color="white" />
</TouchableOpacity>
    
    <View style={styles.outside}>
  

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
          <Paragraph style={styles.count}>{userCount}</Paragraph>
            <Title style={styles.c}>Users </Title>
          
          </Card.Content>
          <Card.Actions>
            
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
          <Paragraph style={styles.count}>{workoutCount}</Paragraph>
            <Title style={styles.c}>Workouts</Title>
           
          </Card.Content>
          <Card.Actions>
           
          </Card.Actions>
        </Card>

      
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={navigateToUsers}>
            <Text style={styles.buttonText}>Manage Users</Text>
          </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={navigateToWorkouts}>
            <Text style={styles.buttonText}>Manage Workouts</Text>
          </TouchableOpacity>
  </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top:60,
  },
  c:{
    color:'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  profileIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderRadius: 16,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: 'pink',
    borderWidth: 2,
    marginBottom: 20,
  },
  count:{
    fontSize:35,
    fontWeight:'bold',
    alignSelf:'center',
    color:'white'
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'pink',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    elevation: 10,
    shadowOffset: { width: -6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    margin: 10,
    top:100,
    borderRadius: 5,
    borderColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor:'pink',
    borderWidth:4,
    margin: 20,
    height:100,
    width:150,
    alignItems:'center',
    justifyContent:'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AdminHome;
