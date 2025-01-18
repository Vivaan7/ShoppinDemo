import React from 'react';
import { View,  Image,   } from 'react-native';
import SearchBar from '../components/SearchBar';
import { images } from '../../Assets/Images';
import { scale, moderateScale, verticalScale, ScaledSheet } from 'react-native-size-matters';

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={images.smiley} style={styles.logo} />
      <SearchBar
        onTextSearch={() => navigation.navigate('TextSearch')}
        onImageSearch={() => navigation.navigate('ImageSearch')}
      />
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
  logo: { 
    width: scale(150),  // Scale width
    height: verticalScale(50), // Scale height
    resizeMode: 'contain', 
    marginBottom: verticalScale(20) // Scale margin
  },
  footer: { 
    marginTop: verticalScale(40) // Scale margin
  },
  footerText: { 
    color: '#4285F4', 
    fontWeight: 'bold',
    fontSize: moderateScale(16)// Scale font size
  },
});

export default HomeScreen;