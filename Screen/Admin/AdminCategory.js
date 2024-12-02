<<<<<<< HEAD
// AdminCategory.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const AdminCategory = ({ route, navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const allWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

        const category = route.params?.category || '';
        const categoryWorkouts = allWorkouts.filter((workout) => workout.category === category);

        setWorkouts(categoryWorkouts);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, [route.params?.category]);

  const handleEditWorkout = (selectedWorkout) => {
    navigation.navigate('EditWorkout', {
      workout: selectedWorkout,
      onEditWorkout: (updatedWorkouts) => handleEditCallback(updatedWorkouts),
    });
  };

  const handleEditCallback = (updatedWorkouts) => {
    const category = route.params?.category || '';
    const categoryWorkouts = updatedWorkouts.filter((workout) => workout.category === category);
    setWorkouts(categoryWorkouts);
  };

  const handleDeleteWorkout = async (selectedWorkout) => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      const allWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

      // Filter out the selected workout
      const updatedWorkouts = allWorkouts.filter((workout) => workout.title !== selectedWorkout.title);

      // Update AsyncStorage with the modified list of workouts
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));

      // Invoke the onEditWorkout callback to update the parent component's state
      handleEditCallback(updatedWorkouts);
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };
  const navigateToWorkoutDetail = (selectedWorkout) => {
    // Use navigation to navigate to WorkoutDetail and pass the selected workout
    navigation.navigate('WorkoutDetail', { workout: selectedWorkout });
  };

  const renderWorkoutCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToWorkoutDetail(item)}>
      <View style={styles.workoutCard}>
        <Text style={styles.workoutTitle}>{item.title}</Text>
        <Text style={styles.workoutduration}>{item.duration} seconds</Text>

        <View style={styles.iconContainer}>
          {/* Edit and Delete icons container */}
          <View style={styles.editDeleteContainer}>
            {/* Edit icon */}
            <TouchableOpacity style={styles.iconButton} onPress={() => handleEditWorkout(item)}>
              <FontAwesome name="edit" size={20} color="white" style={styles.icon} />
            </TouchableOpacity>

            {/* Delete icon */}
            <TouchableOpacity style={styles.iconButton} onPress={() => handleDeleteWorkout(item)}>
              <FontAwesome name="trash" size={20} color="white" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>{route.params?.category} Workouts</Text>
      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.title}
          renderItem={renderWorkoutCard}
        />
      ) : (
        <Text>No workouts available for this category.</Text>
      )}
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  workoutduration:{
    color:"white",
  },
oicon: {
   backgroundColor:"pink",
   
    borderRadius: 16,
    padding: 5,
    
 
    
    marginBottom:20,
  },
  editDeleteContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'pink', // Add the background color you want
    borderRadius: 10,
    padding: 5,
  },
  
  iconButton: {
    paddingHorizontal: 10,
  },
  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  workoutCard: {
   borderColor:"pink",
   borderWidth:2,
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
});

export default AdminCategory;
=======
// AdminCategory.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const AdminCategory = ({ route, navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const allWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

        const category = route.params?.category || '';
        const categoryWorkouts = allWorkouts.filter((workout) => workout.category === category);

        setWorkouts(categoryWorkouts);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, [route.params?.category]);

  const handleEditWorkout = (selectedWorkout) => {
    navigation.navigate('EditWorkout', {
      workout: selectedWorkout,
      onEditWorkout: (updatedWorkouts) => handleEditCallback(updatedWorkouts),
    });
  };

  const handleEditCallback = (updatedWorkouts) => {
    const category = route.params?.category || '';
    const categoryWorkouts = updatedWorkouts.filter((workout) => workout.category === category);
    setWorkouts(categoryWorkouts);
  };

  const handleDeleteWorkout = async (selectedWorkout) => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      const allWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

      // Filter out the selected workout
      const updatedWorkouts = allWorkouts.filter((workout) => workout.title !== selectedWorkout.title);

      // Update AsyncStorage with the modified list of workouts
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));

      // Invoke the onEditWorkout callback to update the parent component's state
      handleEditCallback(updatedWorkouts);
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };
  const navigateToWorkoutDetail = (selectedWorkout) => {
    // Use navigation to navigate to WorkoutDetail and pass the selected workout
    navigation.navigate('WorkoutDetail', { workout: selectedWorkout });
  };

  const renderWorkoutCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToWorkoutDetail(item)}>
      <View style={styles.workoutCard}>
        <Text style={styles.workoutTitle}>{item.title}</Text>
        <Text style={styles.workoutduration}>{item.duration} seconds</Text>

        <View style={styles.iconContainer}>
          {/* Edit and Delete icons container */}
          <View style={styles.editDeleteContainer}>
            {/* Edit icon */}
            <TouchableOpacity style={styles.iconButton} onPress={() => handleEditWorkout(item)}>
              <FontAwesome name="edit" size={20} color="white" style={styles.icon} />
            </TouchableOpacity>

            {/* Delete icon */}
            <TouchableOpacity style={styles.iconButton} onPress={() => handleDeleteWorkout(item)}>
              <FontAwesome name="trash" size={20} color="white" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>{route.params?.category} Workouts</Text>
      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.title}
          renderItem={renderWorkoutCard}
        />
      ) : (
        <Text>No workouts available for this category.</Text>
      )}
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  workoutduration:{
    color:"white",
  },
oicon: {
   backgroundColor:"pink",
   
    borderRadius: 16,
    padding: 5,
    
 
    
    marginBottom:20,
  },
  editDeleteContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'pink', // Add the background color you want
    borderRadius: 10,
    padding: 5,
  },
  
  iconButton: {
    paddingHorizontal: 10,
  },
  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  workoutCard: {
   borderColor:"pink",
   borderWidth:2,
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
});

export default AdminCategory;
>>>>>>> 353c9b09eb579acdb19c56de6d7636be1a16b10a
