import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome } from '@expo/vector-icons';

const UserHome = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);
  const [currentUserName, setCurrentUserName] = useState('');
  const [groupedWorkouts, setGroupedWorkouts] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUsers = await AsyncStorage.getItem('userregister');

        if (storedUsers) {
          const users = JSON.parse(storedUsers);

          // Find the current user based on isLoggedIn flag
          const currentUser = users.find((user) => user.isLoggedIn);

          if (currentUser) {
            setCurrentUserName(currentUser.namee);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();

    // Fetch workouts after fetching user details
    const fetchWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        if (storedWorkouts) {
          const parsedWorkouts = JSON.parse(storedWorkouts);

          // Group workouts by category
          const grouped = parsedWorkouts.reduce((acc, workout) => {
            if (!acc[workout.category]) {
              acc[workout.category] = [];
            }
            acc[workout.category].push(workout);
            return acc;
          }, {});

          setWorkouts(parsedWorkouts);
          setGroupedWorkouts(grouped);
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  const navigateToWorkoutsByCategory = (category) => {
    navigation.navigate('Category', { category });
  };

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => {
            // Navigate to the user profile screen
            navigation.navigate('UserProfile');
          }}
        >
          <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, {currentUserName || 'Guest'}!</Text>
        </View>

        {Object.keys(groupedWorkouts).map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.categoryCard}
            onPress={() => navigateToWorkoutsByCategory(category)}
          >
            <Text style={styles.categoryTitle}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
    borderColor: "pink",
    borderWidth: 2,
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: 'pink',
    borderRadius: 16,
    marginBottom: 20,
    marginBottom:20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    marginBottom: 10,
  },
});

export default UserHome;
