import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Linking,ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const MapScreen = () => {
  const [selectedHours, setSelectedHours] = useState(1);
  const [greenModeEnabled, setGreenModeEnabled] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('USA'); // Default country

  // Define the hourly rates
  const standardHourlyRate = 30;
  const greenModeHourlyRate = 34;

  // Determine the hourly rate based on green mode
  const hourlyRate = greenModeEnabled ? greenModeHourlyRate : standardHourlyRate;

  const totalCost = selectedHours * hourlyRate;

  const handleBookDriver = () => {
    alert(`You've booked the driver for ${selectedHours} hours. Total cost: $${totalCost}`);
  };

  // Define emergency numbers for different countries
  const emergencyNumbers = {
    USA: '911',
    UK: '999',
    Canada: '911',
    // Add more countries and their emergency numbers here
  };

  const handleSOSButtonPress = () => {
    // Get the emergency number for the selected country
    const emergencyNumber = emergencyNumbers[selectedCountry];
    
    if (emergencyNumber) {
      // Open the phone's dialer with the emergency number
      Linking.openURL(`tel:${emergencyNumber}`);
    } else {
      alert('Emergency number not available for the selected country.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Book a Driver</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Select the number of hours:</Text>
        <Picker
          selectedValue={selectedHours}
          style={styles.picker}
          onValueChange={(value) => setSelectedHours(value)}
        >
          {[...Array(8).keys()].map((num) => (
            <Picker.Item
              key={num}
              label={`${8 - num} hrs`}
              value={8 - num}
            />
          ))}
        </Picker>
        <Text style={styles.resultText}>Total Cost: ${totalCost}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Book" onPress={handleBookDriver} />
        </View>
        <View style={styles.greenModeContainer}>
          <Text style={styles.green}>Green Mode:</Text>
          <Button
            title={greenModeEnabled ? 'Enabled' : 'Disabled'}
            onPress={() => setGreenModeEnabled(!greenModeEnabled)}
          />
        </View>
        <View style={styles.countryContainer}>
          <Text style={styles.label}>Select the country you have travelled to:</Text>
          <Picker
            selectedValue={selectedCountry}
            style={styles.countryPicker}
            onValueChange={(value) => setSelectedCountry(value)}
          >
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="UK" value="UK" />
            <Picker.Item label="Canada" value="Canada" />
            {/* Add more countries here */}
          </Picker>
        </View>
        <View style={styles.sosButtonContainer}>
          <TouchableOpacity
            onPress={handleSOSButtonPress}
            style={styles.sosButton}
          >
            <Text style={styles.sosButtonText}>
              SOS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  picker: {
    fontSize: 20,
    marginBottom: 20,
    width: '80%',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  greenModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 80,
  },
  green: {
    fontSize: 20,
  },
  countryContainer: {
    marginBottom: 20,
  },
  countryPicker: {
    fontSize: 20,
    marginBottom: 10,
  },
  sosButtonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sosButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red', // You can change the color
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // You can change the text color
  },
});

export default MapScreen;
