import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function LoginPage({ navigation }) {
  const [number, setNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('regular'); // Default user type
  const [home, setHome] = useState('');
  const [work, setWork] = useState('');

  const saveUserData = () => {
    // Save user data to permanent storage (e.g., AsyncStorage)
    // You can use AsyncStorage or another storage method for this purpose
    // For simplicity, we'll just log the data here
    console.log('User Data:', {
      number,
      firstName,
      lastName,
      userType,
      home,
      work,
    });

    // Navigate to the appropriate screen based on the selected user type
    if (userType === 'regular' ) {
      navigation.navigate('HomeScreen');
    } else if (userType === 'dyslexic') {
      navigation.navigate('HomeScreen2');
    } else if (userType === 'elderly') {
      navigation.navigate('HomeScreen3');
    }
    else if(userType === 'noCommunication'){
      navigation.navigate('HomeScreen4');
    }
  };

  useEffect(() => {
   
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <Text style={styles.label}>Number:</Text>
      <TextInput
        onChangeText={(text) => setNumber(text)}
        value={number}
        placeholder="Enter your number"
        style={styles.input}
      />
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        placeholder="Enter your first name"
        style={styles.input}
      />
      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        placeholder="Enter your last name"
        style={styles.input}
      />
      <Text style={styles.label}>Home Address:</Text>
      <TextInput
        onChangeText={(text) => setHome(text)}
        value={home}
        placeholder="Enter your home address"
        style={styles.input}
      />
      <Text style={styles.label}>Work Address:</Text>
      <TextInput
        onChangeText={(text) => setWork(text)}
        value={work}
        placeholder="Enter your work address"
        style={styles.input}
      />
      <Text style={styles.label}>Select User Type:</Text>
      <Picker
        selectedValue={userType}
        onValueChange={(itemValue) => setUserType(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Regular" value="regular" />
        <Picker.Item label="Dyslexic" value="dyslexic" />
        <Picker.Item label="Elderly" value="elderly" />
        <Picker.Item label="WheelChair" value="noCommunication" />
      </Picker>
      <Button title="Save and Continue" onPress={saveUserData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28, // Increased font size
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20, // Increased font size
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    borderRadius: 8,
  },
  label: {
    fontSize: 22, // Increased font size
    marginBottom: 5,
    fontWeight: 'bold',
  },
  picker: {
    width: '100%',
    fontSize: 20, // Increased font size for picker
  },
});
