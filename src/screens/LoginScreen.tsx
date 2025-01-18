import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { scale, ScaledSheet } from 'react-native-size-matters';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: scale(24),
      fontWeight: 'bold',
      marginBottom: scale(20),
      color: '#333',
    },
    input: {
      width: '80%',
      height: scale(50),
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: scale(15),
      fontSize: scale(16),
      marginBottom: scale(15),
      borderColor: '#ddd',
      borderWidth: 1,
    },
    button: {
      width: '80%',
      height: scale(50),
      backgroundColor: '#1a73e8',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: scale(18),
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default LoginScreen;
