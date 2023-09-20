import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BookScreen4 = () => {
  const [location, setLocation] = useState('');
  const [location2, setLocation2] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [greenModeEnabled, setGreenModeEnabled] = useState(false);
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false); // New state
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [error, setError] = useState('');

  const availableCars = [
    { id: 1, name: 'Car 1', price: 50, isElectric: true, isWheelchairAccessible: false },
    { id: 2, name: 'Car 2', price: 40, isElectric: false, isWheelchairAccessible: true },
    { id: 3, name: 'Car 3', price: 45, isElectric: true, isWheelchairAccessible: false },
    // Add more car objects here
  ];

  const toggleGreenMode = () => {
    setGreenModeEnabled(!greenModeEnabled);
  };

  const toggleWheelchairAccessible = () => {
    setWheelchairAccessible(!wheelchairAccessible);
  };

  const handleBookCar = (car) => {
    // Handle booking logic here
    alert(`You've booked ${car.name} for dropping location: ${location}`);
  };

  const handleCheckAvailableCars = () => {
    // Validate the address
    if (selectedAddress === 'Custom' && location.trim() === '') {
      setError('Please enter a custom address.');
      return;
    } else if (location2.trim() === '') {
      setError('Please enter a dropping location.');
      return;
    }

    // Clear any previous error message
    setError('');

    // Show booking options
    setShowBookingOptions(true);
  };

  const isBookingEnabled = location2.trim() !== '';

  const filteredCars = availableCars.filter((car) => {
    return (!greenModeEnabled || car.isElectric) && (!wheelchairAccessible || car.isWheelchairAccessible);
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Book a Car</Text>

        <View style={styles.addressContainer}>
          <Text style={styles.label}>Select pickup address:</Text>
          <Picker
            selectedValue={selectedAddress}
            style={styles.addressPicker}
            onValueChange={(value) => setSelectedAddress(value)}
          >
            <Picker.Item label="Home" value="home" />
            <Picker.Item label="Work" value="work" />
            <Picker.Item label="Custom" value="Custom" />
          </Picker>
          {selectedAddress === 'Custom' && (
            <TextInput
              style={styles.input}
              placeholder="Enter custom address"
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter dropping location:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location2}
            onChangeText={(text) => setLocation2(text)}
          />
        </View>

        {error !== '' && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Upload images of your pick-up location:</Text>
          <Button
            title="Upload Images"
          />
        </View>

        <Button
          title="Check Available Cars"
          onPress={handleCheckAvailableCars}
        />

        <View style={styles.toggleContainer}>
          <Text>Green Mode:</Text>
          <Switch
            value={greenModeEnabled}
            onValueChange={toggleGreenMode}
          />
        </View>

        <View style={styles.toggleContainer}>
          <Text>Wheelchair Accessible:</Text>
          <Switch
            value={wheelchairAccessible}
            onValueChange={toggleWheelchairAccessible}
          />
        </View>

        {showBookingOptions && (
          <View style={styles.bookingOptions}>
            <Text style={styles.subHeading}>Available Cars:</Text>
            {filteredCars.map((car) => (
              <View key={car.id} style={styles.carContainer}>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carPrice}>Price: ${car.price}</Text>
                <Button
                  title="Book"
                  onPress={() => handleBookCar(car)}
                />
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addressPicker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bookingOptions: {
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carContainer: {
    marginBottom: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carPrice: {
    fontSize: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default BookScreen4;
