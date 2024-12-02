<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Category = ({ route, navigation }) => {
  const { category } = route.params;
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkoutsByCategory = async () => {
      try {
        // Fetch workouts from AsyncStorage (or your data source) based on the selected category
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
        const categoryWorkouts = existingWorkouts.filter((item) => item.category === category);

        // Set the workouts in the state
        setWorkouts(categoryWorkouts);
      } catch (error) {
        console.error('Error fetching workouts by category:', error);
      }
    };

    fetchWorkoutsByCategory();
  }, [category]);

  const navigateToWorkoutDetail = (workoutId) => {
    navigation.navigate('UserWorkoutDetail', { workoutId });
  };

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Workouts in {category}</Text>
      {workouts.length > 0 ? (
      <FlatList
      data={workouts}
      keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.workoutCard}
          onPress={() => navigateToWorkoutDetail(item.id)}
        >
          <Text style={styles.workoutTitle}>{item.title}</Text>
          <Text style={styles.workoutDuration}>{item.duration}</Text>
        </TouchableOpacity>
      )}
    />
    
      ) : (
        <Text>No workouts available in this category.</Text>
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
  workoutduration:{
    color:"white",
  },
oicon: {
   backgroundColor:"pink",
   
    borderRadius: 16,
    padding: 5,
    
 
    
    marginBottom:20,
  },
  backButton: {
    marginBottom: 10,
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

export default Category;
=======
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Category = ({ route, navigation }) => {
  const { category } = route.params;
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkoutsByCategory = async () => {
      try {
        // Fetch workouts from AsyncStorage (or your data source) based on the selected category
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
        const categoryWorkouts = existingWorkouts.filter((item) => item.category === category);

        // Set the workouts in the state
        setWorkouts(categoryWorkouts);
      } catch (error) {
        console.error('Error fetching workouts by category:', error);
      }
    };

    fetchWorkoutsByCategory();
  }, [category]);

  const navigateToWorkoutDetail = (workoutId) => {
    navigation.navigate('UserWorkoutDetail', { workoutId });
  };

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Workouts in {category}</Text>
      {workouts.length > 0 ? (
      <FlatList
      data={workouts}
      keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.workoutCard}
          onPress={() => navigateToWorkoutDetail(item.id)}
        >
          <Text style={styles.workoutTitle}>{item.title}</Text>
          <Text style={styles.workoutDuration}>{item.duration}</Text>
        </TouchableOpacity>
      )}
    />
    
      ) : (
        <Text>No workouts available in this category.</Text>
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
  workoutduration:{
    color:"white",
  },
oicon: {
   backgroundColor:"pink",
   
    borderRadius: 16,
    padding: 5,
    
 
    
    marginBottom:20,
  },
  backButton: {
    marginBottom: 10,
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

export default Category;
>>>>>>> 353c9b09eb579acdb19c56de6d7636be1a16b10a
