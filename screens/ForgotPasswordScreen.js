import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={forgotPasswordValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Text>Enter your email to reset password</Text>
          <TextInput
            onChangeText={handleChange('email')}
            value={values.email}
            style={styles.input}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Button title="Submit" onPress={handleSubmit} />

          <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
            Back to Login
          </Text>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  error: { color: 'red' },
  link: { color: 'blue', marginTop: 10 },
});
