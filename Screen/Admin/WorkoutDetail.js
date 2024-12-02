// WorkoutDetail.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,ImageBackground ,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const WorkoutDetail = ({ route, navigation }) => {
  const { workoutId } = route.params;
  const [workout, setWorkout] = useState(null);
 
  useEffect(() => {
    const fetchWorkoutDetail = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
  
        const selectedWorkout = existingWorkouts.find((item) => item.id === workoutId);
  
        console.log('Selected Workout:', selectedWorkout);
  
        if (selectedWorkout) {
          setWorkout(selectedWorkout);
        }
      } catch (error) {
        console.error('Error fetching workout details:', error);
      }
    };
  
    fetchWorkoutDetail();
  }, [workoutId]);
  

  if (!workout) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Workout Detail</Text>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
 <ScrollView style={styles.container}>
 <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Workout Detail</Text>
     
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Title:</Text>
        <Text style={styles.detailText}>{workout.title}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Duration:</Text>
        <Text style={styles.detailText}>{workout.duration}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Category:</Text>
        <Text style={styles.detailText}>{workout.category}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Equipment Required:</Text>
        <Text style={styles.detailText}>{workout.equipmentRequired}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Description:</Text>
        <Text style={styles.detailText}>{workout.description}</Text>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
     // Light background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Blue color
  },
  backButton: {
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 20,
   borderColor:'pink',
   borderWidth:2,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  detailLabel: {
    width: 150,
    fontWeight: 'bold',
    color: 'pink',
  },
  detailText: {
    flex: 1,
    color: 'white',
  },
});

export default WorkoutDetail;
