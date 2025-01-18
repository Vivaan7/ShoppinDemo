import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, } from 'react-native';
import { ScaledSheet, scale, moderateScale, verticalScale } from 'react-native-size-matters'; // Import ScaledSheet

const mockSuggestions = ['React Native', 'Google', 'Pixel 7', 'How to code'];

const TextSearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type to search"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <FlatList
        data={mockSuggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase()))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = ScaledSheet.create({ // Use ScaledSheet.create
  container: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F1F3F4', 
    width: scale(320), 
    borderRadius: moderateScale(20), 
    padding: moderateScale(10), 
    marginVertical: verticalScale(10) // Add vertical margin
  },
  input: { 
    flex: 1, 
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(16)  
  },
  item: {
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  icon: { 
    marginHorizontal: moderateScale(5) 
  },
});


export default TextSearchScreen;