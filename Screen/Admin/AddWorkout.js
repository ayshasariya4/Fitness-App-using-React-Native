import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Picker,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddWorkout = ({ navigation, route }) => {
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('');
  const [workoutCategory, setWorkoutCategory] = useState('');
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [equipmentRequired, setEquipmentRequired] = useState('');

  // Define a list of workout categories
  const workoutCategories = ['Chest', 'Leg', 'Arm', 'Biceps', 'Back', 'Shoulder'];

  const addWorkout = async (newWorkout) => {
    try {
      // Validate that all required fields are not empty
      if (!workoutTitle || !workoutDuration || !workoutCategory) {
        alert('Please enter workout title, duration, and category.');
        return;
      }

      const storedWorkouts = await AsyncStorage.getItem('workouts');
      const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
      const updatedWorkouts = [...existingWorkouts, newWorkout];
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));

      // Execute the onAddWorkout function passed as a parameter
      if (route.params && route.params.onAddWorkout) {
        route.params.onAddWorkout(updatedWorkouts);
      }

      // Navigate back to the Workouts screen
      navigation.goBack();
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Add New Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Workout Title"
        value={workoutTitle}
        onChangeText={(text) => setWorkoutTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Workout Duration"
        value={workoutDuration}
        onChangeText={(text) => setWorkoutDuration(text)}
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={workoutCategory}
          onValueChange={(itemValue, itemIndex) => setWorkoutCategory(itemValue)}
        >
          <Picker.Item label="Select Category" value="" />
          {workoutCategories.map((category, index) => (
            <Picker.Item key={index} label={category} value={category} />
          ))}
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Equipment Required"
        value={equipmentRequired}
        onChangeText={(text) => setEquipmentRequired(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Workout Description"
        value={workoutDescription}
        onChangeText={(text) => setWorkoutDescription(text)}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity
        style={styles.p}
        onPress={() =>
          addWorkout({
            title: workoutTitle,
            duration: workoutDuration,
            category: workoutCategory,
            equipmentRequired: equipmentRequired,
            description: workoutDescription,
          })
        }
      >
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  
  },
  backButton: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  p: {
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
    borderRadius: 5,
    borderColor: 'grey',
  },
  input: {
    marginBottom: 20,
    height: 50,
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 4,
    padding: 10,
    color: 'white',
    
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  addButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  pickerContainer: {
    marginBottom: 20,
    height: 50,
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 4,
    color: 'white',
    padding: 10,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Add space between items
  },
  picker: {
    color: 'black',
    width: '100%',
    height: '100%',
    backgroundColor:'transparent'
  },
});
export default AddWorkout;
