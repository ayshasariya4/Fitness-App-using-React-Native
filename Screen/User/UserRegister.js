<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

export default function UserRegister({ navigation }) {
  const [user, setUser] = useState({
    namee: '',
    email: '',
    phone: '',
    password: '',
    profileImage: null,
  });

  const [errors, setErrors] = useState({
    namee: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const pickImage = () => {
    ImagePicker.showImagePicker({ title: 'Select Profile Image' }, (response) => {
      if (!response.didCancel && !response.error) {
        setUser({ ...user, profileImage: response.uri });
      }
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const UserRegister = async () => {
    let valid = true;
    let tempErrors = { namee: '', email: '', phone: '', password: '' };

    if (!validateEmail(user.email)) {
      tempErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!validatePhone(user.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }
    if (!validatePassword(user.password)) {
      tempErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }
    if (user.namee.trim() === '') {
      tempErrors.namee = 'Username cannot be empty.';
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      try {
        let oldData = await AsyncStorage.getItem('userregister');
        oldData = JSON.parse(oldData) || [];

        const user_id = oldData.length > 0 ? oldData[oldData.length - 1].user_id + 1 : 1001;

        const details = {
          user_id: user_id,
          namee: user.namee,
          phone: user.phone,
          email: user.email,
          password: user.password,
          profileImage: user.profileImage,
        };

        const allDetails = [...oldData, details];

        await AsyncStorage.setItem('userregister', JSON.stringify(allDetails));
        navigation.navigate('UserLogin');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
      <View style={styles.sub_container}>
        <Text style={styles.heading}>Register</Text>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="envelope" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'email')}
            style={styles.Input}
            placeholder="Email"
            placeholderTextColor="white"
            value={user.email}
          />
        </View>
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'namee')}
            style={styles.Input}
            placeholder="Username"
            placeholderTextColor="white"
            value={user.namee}
          />
        </View>
        {errors.namee ? <Text style={styles.errorText}>{errors.namee}</Text> : null}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="phone" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'phone')}
            style={styles.Input}
            placeholder="Phone"
            placeholderTextColor="white"
            value={user.phone}
          />
        </View>
        {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="lock" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'password')}
            style={styles.Input}
            placeholder="Set password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={user.password}
          />
        </View>
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

        <TouchableOpacity onPress={UserRegister} style={styles.p}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('UserLogin')} style={styles.already}>Already Registered? Login</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderColor: 'pink',
    height: 50,
    width: 230,
    color: "white",
    padding: 5,
    borderRadius: 4,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
    fontSize: 50,
    marginBottom: 10,
    color: 'white',
  },
  sub_container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
  },
  p: {
    alignSelf: 'center',
    backgroundColor: 'pink',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    elevation: 10,
    shadowOffset: { width: -6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    margin: 10,
    borderRadius: 5,
    borderColor: 'grey',
  },
  already: {
    color: 'white'
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: 'pink',
    borderWidth: 2,
    margin: 10,
    height: 50,
    width: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 4,
  },
  inputIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
});
=======
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

export default function UserRegister({ navigation }) {
  const [user, setUser] = useState({
    namee: '',
    email: '',
    phone: '',
    password: '',
    profileImage: null,
  });

  const [errors, setErrors] = useState({
    namee: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  const pickImage = () => {
    ImagePicker.showImagePicker({ title: 'Select Profile Image' }, (response) => {
      if (!response.didCancel && !response.error) {
        setUser({ ...user, profileImage: response.uri });
      }
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const UserRegister = async () => {
    let valid = true;
    let tempErrors = { namee: '', email: '', phone: '', password: '' };

    if (!validateEmail(user.email)) {
      tempErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!validatePhone(user.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }
    if (!validatePassword(user.password)) {
      tempErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }
    if (user.namee.trim() === '') {
      tempErrors.namee = 'Username cannot be empty.';
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      try {
        let oldData = await AsyncStorage.getItem('userregister');
        oldData = JSON.parse(oldData) || [];

        const user_id = oldData.length > 0 ? oldData[oldData.length - 1].user_id + 1 : 1001;

        const details = {
          user_id: user_id,
          namee: user.namee,
          phone: user.phone,
          email: user.email,
          password: user.password,
          profileImage: user.profileImage,
        };

        const allDetails = [...oldData, details];

        await AsyncStorage.setItem('userregister', JSON.stringify(allDetails));
        navigation.navigate('UserLogin');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2t8ZW58MHx8MHx8fDA%3D" }} style={styles.image}>
      <View style={styles.sub_container}>
        <Text style={styles.heading}>Register</Text>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="envelope" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'email')}
            style={styles.Input}
            placeholder="Email"
            placeholderTextColor="white"
            value={user.email}
          />
        </View>
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'namee')}
            style={styles.Input}
            placeholder="Username"
            placeholderTextColor="white"
            value={user.namee}
          />
        </View>
        {errors.namee ? <Text style={styles.errorText}>{errors.namee}</Text> : null}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="phone" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'phone')}
            style={styles.Input}
            placeholder="Phone"
            placeholderTextColor="white"
            value={user.phone}
          />
        </View>
        {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}

        <View style={styles.inputContainer}>
          <FontAwesome5 name="lock" size={20} color="white" style={styles.inputIcon} />
          <TextInput
            onChangeText={(value) => handleChange(value, 'password')}
            style={styles.Input}
            placeholder="Set password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={user.password}
          />
        </View>
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

        <TouchableOpacity onPress={UserRegister} style={styles.p}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('UserLogin')} style={styles.already}>Already Registered? Login</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderColor: 'pink',
    height: 50,
    width: 230,
    color: "white",
    padding: 5,
    borderRadius: 4,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
    fontSize: 50,
    marginBottom: 10,
    color: 'white',
  },
  sub_container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
  },
  p: {
    alignSelf: 'center',
    backgroundColor: 'pink',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    elevation: 10,
    shadowOffset: { width: -6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    margin: 10,
    borderRadius: 5,
    borderColor: 'grey',
  },
  already: {
    color: 'white'
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: 'pink',
    borderWidth: 2,
    margin: 10,
    height: 50,
    width: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: 4,
  },
  inputIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
});
>>>>>>> 353c9b09eb579acdb19c56de6d7636be1a16b10a
