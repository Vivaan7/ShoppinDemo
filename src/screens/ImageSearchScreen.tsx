import React from 'react';
import { View, Text, TouchableOpacity,  Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const ImageSearchScreen: React.FC = () => {
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      Alert.alert('Image uploaded successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search by Image</Text>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  text: { 
    fontSize: moderateScale(18), // Scale font size
    marginBottom: moderateScale(20) // Scale margin
  },
  button: { 
    backgroundColor: '#4285F4', 
    padding: moderateScale(10), // Scale padding
    borderRadius: moderateScale(5) // Scale border radius
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: moderateScale(16) // Scale font size
  },
});

export default ImageSearchScreen;