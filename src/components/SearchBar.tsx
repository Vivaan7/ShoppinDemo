import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { scale, moderateScale, ScaledSheet } from 'react-native-size-matters';

interface SearchBarProps {
  onTextSearch: () => void;
  onImageSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onTextSearch, onImageSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Google or type URL"
        style={styles.input}
        onFocus={onTextSearch}
      />
      <TouchableOpacity onPress={onImageSearch} style={styles.icon}>
        <Icon name="photo-camera" size={moderateScale(24)} color="#4285F4" /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="mic" size={moderateScale(24)} color="#4285F4" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F1F3F4', 
    width: scale(320), // Adjusts the width based on screen width
    borderRadius: moderateScale(20),  // Scale border radius
    padding: moderateScale(10)  // Scale padding
  },
  input: { 
    flex: 1, 
    paddingHorizontal: moderateScale(10), // Scale padding
    fontSize: moderateScale(16)  // Scale font size
  },
  icon: { 
    marginHorizontal: moderateScale(5)  // Scale margin
  },
});

export default SearchBar;