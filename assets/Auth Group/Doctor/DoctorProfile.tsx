import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage'; // To persist data
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Alergologie şi imunologie clinică', value: '1' },
  { label: 'Anestezie şi terapie intensivă', value: '2' },
  { label: 'Boli infecţioase', value: '3' },
  { label: 'Cardiologie', value: '4' },
  { label: 'Dermatovenerologie', value: '5' },
  { label: 'Diabet zaharat, nutriţie şi boli metabolice', value: '6' },
  { label: 'Endocrinologie', value: '7' },
  { label: 'Gastroenterologie', value: '8' },
  { label: 'Genetică medicală', value: '9' },
  { label: 'Geriatrie şi gerontologie', value: '10' },
  { label: 'Hematologie', value: '11' },
  { label: 'Medicină de familie', value: '12' },
  { label: 'Medicină de urgenţă', value: '13' },
  { label: 'Medicină internă', value: '14' },
  { label: 'Nefrologie', value: '16' },
  { label: 'Neurologie', value: '17' },
  { label: 'Oncologie ', value: '18' },
  { label: 'Pediatrie', value: '19' },
  { label: 'Psihiatrie', value: '21' },
  { label: 'Radioterapie', value: '22' },
  { label: 'Reumatologie', value: '23' },
  { label: 'Chirurgie', value: '24' },
  { label: 'ORL', value: '25' },
];

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState<string>('Numele dvs');
  const [email, setEmail] = useState<string>('email@gmail.com');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [code,setCode] =  useState <string>('codul de parafa')
  const STORAGE_KEY = 'selectedDropdownValue';

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const savedName = await AsyncStorage.getItem('savedName');
        const savedEmail = await AsyncStorage.getItem('savedEmail');
        const savedImageUri = await AsyncStorage.getItem('profileImageUri');
        const savedCode = await AsyncStorage.getItem('savedCode');
        const savedValue = await AsyncStorage.getItem(STORAGE_KEY);
        
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedImageUri) setImageUri(savedImageUri);
        if (savedValue) setValue(savedValue);
        if (savedCode) setCode(savedCode);
      } catch (e) {
        console.error('Failed to load profile data.');
      }
    };
    loadProfileData();
  }, []);

  // Save the image URI in AsyncStorage whenever it's updated
  const saveImageUri = async (uri: string) => {
    try {
      await AsyncStorage.setItem('profileImageUri', uri);
    } catch (e) {
      console.error('Failed to save image URI.');
    }
  };

  // Save text and email to AsyncStorage
  const saveText = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(`Failed to save ${key}.`);
    }
  };
 
  const saveCode = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(`Failed to save ${key}.`);
    }
  };

  // Image picker logic
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Sorry, we need camera roll permission to upload images.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      saveImageUri(result.assets[0].uri);
    }
  };

  const saveSelectedValue = async (selectedValue: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, selectedValue);
    } catch (error) {
      console.error('Failed to save the dropdown value', error);
    }
  };

  const handleDropdownChange = (item: { value: string }) => {
    setValue(item.value);
    saveSelectedValue(item.value); // Save to AsyncStorage
  };

  const handleSave = () => {
    saveText('savedName', name);
    saveText('savedEmail', email);
    saveText('savedCode',code);
    Alert.alert('Profile saved successfully!');
  };

  return (
    <View style={styles.container}>
      
        
      <TouchableOpacity onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.profilePicture} />
        ) : (
          <Text style={styles.placeholderText}>Pick an image</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => {
          setName(text);
          saveText('savedName', text);
        }}
        placeholder="Name"
      />
 <TextInput
        style={styles.input}
        value={code}
        onChangeText={(text) => {
          setCode(text);
          saveText('savedCode', text);
        }}
        placeholder="Code"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(email) => {
          setEmail(email);
          saveText('savedEmail', email);
        }}
        placeholder="Email"
        keyboardType="email-address"
      />

      

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecteaza specializarea "
        searchPlaceholder="Cauta..."
        value={value}
        onChange={handleDropdownChange}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />
      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  imageStyle:{
    width: '100%',             
    height: undefined,         
    aspectRatio: 1,            
   resizeMode: 'contain',
       
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
