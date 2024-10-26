// EditWorkout.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const EditWorkout = ({ route, navigation }) => {
  const { workout, onEditWorkout } = route.params;

  const [editedWorkout, setEditedWorkout] = useState({
    title: workout.title || '',
    duration: workout.duration || '',
    category: workout.category || '',
    description: workout.description || '',
    equipmentRequired: workout.equipmentRequired || '',
  });

  const editWorkout = async () => {
    try {
      // Validate that all required fields are not empty
      if (!editedWorkout.title || !editedWorkout.duration || !editedWorkout.category) {
        alert('Please enter workout title, duration, and category.');
        return;
      }

      const storedWorkouts = await AsyncStorage.getItem('workouts');
      const allWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

      // Find the index of the workout to be edited
      const index = allWorkouts.findIndex((w) => w.title === workout.title);

      if (index !== -1) {
        // Replace the old workout with the updated one
        allWorkouts[index] = editedWorkout;

        // Update AsyncStorage with the modified list of workouts
        await AsyncStorage.setItem('workouts', JSON.stringify(allWorkouts));

        // Invoke the onEditWorkout callback to update the parent component's state
        onEditWorkout(allWorkouts);

        // Navigate back to the AdminCategory screen
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error editing workout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Edit Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Workout Title"
        value={editedWorkout.title}
        onChangeText={(text) => setEditedWorkout({ ...editedWorkout, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Workout Duration"
        value={editedWorkout.duration}
        onChangeText={(text) => setEditedWorkout({ ...editedWorkout, duration: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Workout Category"
        value={editedWorkout.category}
        onChangeText={(text) => setEditedWorkout({ ...editedWorkout, category: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Equipment Required"
        value={editedWorkout.equipmentRequired}
        onChangeText={(text) => setEditedWorkout({ ...editedWorkout, equipmentRequired: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Workout Description"
        value={editedWorkout.description}
        onChangeText={(text) => setEditedWorkout({ ...editedWorkout, description: text })}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.editButton} onPress={editWorkout}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  editButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default EditWorkout;
