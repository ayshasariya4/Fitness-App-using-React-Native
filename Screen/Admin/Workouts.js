import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Workouts = ({ navigation }) => {
  const workoutCategories = ['Chest', 'Leg', 'Arm', 'Biceps', 'Back', 'Shoulder'];

  const navigateToAdminCategory = (category) => {
    navigation.navigate('AdminCategory', { category });
  };

  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D"}} style={styles.image}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome,Admin!</Text>
      </View>

      <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('AddWorkout')}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <FlatList
        data={workoutCategories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigateToAdminCategory(item)}
          >
            <Text style={styles.categoryTitle}>{item}</Text>
          </TouchableOpacity>
        )}
      />
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
  backButton: {
    marginBottom: 10,
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
    borderColor:"pink",
    borderWidth:2,
    marginBottom:20,
  },
});

export default Workouts;
