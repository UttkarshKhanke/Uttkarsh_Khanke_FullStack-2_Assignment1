import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Handle the sign-up logic here
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log('Sign up with:', email, password);
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Create an account so you can explore all the existing jobs
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Already Have an Account */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.haveAccountText}>Already have an account</Text>
      </TouchableOpacity>

      {/* Or continue with */}
      <Text style={styles.orContinueText}>Or continue with</Text>

      {/* Social Media Icons (Static Image) */}
      <Image
        source={require('../assets/images/social.png')}  // Ensure this is the correct path to your image with 3 social icons
        style={styles.socialIcons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D31FA',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#dcdde1',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#3867D6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  haveAccountText: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 20,
  },
  orContinueText: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 20,
  },
  socialIcons: {
    width: 200,  // Adjust the width based on the size of the image containing the social icons
    height: 50,  // Adjust the height based on the image size
    alignSelf: 'center',
  },
});

export default RegisterScreen;
