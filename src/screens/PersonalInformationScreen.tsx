// import React, { memo, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

// import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../utils/Header';
// import Button from '../utils/Button';
// import TextInput from '../utils/TextInput';
// import BackButton from '../components/BackButton';
// import AgePicker, { AgeEnum } from '../components/AgePicker';
// import { theme } from '../core/theme';
// import { Navigation } from '../types';
// import { Auth } from 'aws-amplify';
// import {
//     genderValidator,
//     phoneValidator,
//     ageValidator,
//     nameValidator
// } from '../core/utils';
// import { UserGender } from '../enums';

// type TStringState = {
//     value: string | undefined,
//     error: string | null
// }

// type TGenderState = {
//     value: UserGender | undefined,
//     error: string | null
// }

// type TProps = {
//   navigation: Navigation;
// };

// // Make an axios call to user DB to send the data to the backend here
// // export async function signUp({ username, password, name }: SignUpParameters, onSuccessNavigationAction: () => void) {
// //   try {
// //     const { user } = await Auth.signUp({
// //       username,
// //       password,
// //       attributes: {
// //         name
// //       },
// //       autoSignIn: {
// //         enabled: true,
// //       },
// //     });
// //     console.log(user);
// //     onSuccessNavigationAction()
// //   } catch (e) {
// //     Alert.alert('Error signing up:', e.message);
// //   }
// // }

// const PersonalInformationScreen = ({ navigation }: TProps) => {
//   const [name, setName] = useState<TStringState>({ value: undefined, error: null });
//   const [gender, setGender] = useState<TGenderState>({ value: undefined, error: null });
//   const [age, setAge] = useState<TStringState>({ value: undefined, error: null });
//   const [phoneNumber, setPhoneNumber] = useState<TStringState>({ value: undefined, error: null });

//   const _onSignUpPressed = async () => {
//     const nameError = nameValidator(name.value); // must not be empty or null 
//     const genderError = genderValidator(gender.value); // must not be empty or null and be in the enum of user gender 
//     const phoneNumberError = phoneValidator(phoneNumber.value); // must be a number of length 10 digits (extension is always +91 for our scenario)
//     const ageError = ageValidator(age.error) // must be a number and in the range of 13 to 100

//     if (nameError || genderError || ageError || phoneNumberError) {
//       setName({ ...name, error: nameError });
//       setGender({ ...gender, error: genderError });
//       setAge({ ...age, error: ageError });
//       setPhoneNumber({...phoneNumber, error: phoneNumberError});
//       return;
//     }

//     // const userInfoParameters = {username: email.value, password: password.value, name: name.value}

//     // signUp(signUpParameters, () => navigation.navigate('Dashboard'))
    
//   };

//   const handleAgeChange = (selectedAge: TStringState) => {
//     setAge({value: selectedAge.value, error: ''})
//   }

//   return (
//     <Background>
//       <BackButton goBack={() => navigation.navigate('HomeScreen')} />

//       <Logo />

//       <Header>Create Account</Header>

//       <TextInput
//         label="Name"
//         returnKeyType="next"
//         value={name.value}
//         onChangeText={text => setName({ value: text, error: '' })}
//         error={!!name.error}
//         errorText={name.error}
//       />

//       <AgePicker 
//         selectedAge={age.value}
//         onAgeChange={(selectedAge: string) => setAge({ value: selectedAge, error: '' })} 
//         pickerText={''} 
//         pickerLabel={''}
//       />

//       <RadioGroup
//         radioButtons={buttonsData}
//         onPress={onClick}
//         layout="row"
//         size="18"
//       />
//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={text => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />

//       <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
//         Sign Up
//       </Button>

//       <View style={styles.row}>
//         <Text style={styles.label}>Already have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//           <Text style={styles.link}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
//     color: theme.colors.secondary,
//   },
//   button: {
//     marginTop: 24,
//   },
//   row: {
//     flexDirection: 'row',
//     marginTop: 2,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// });

// export default memo(PersonalInformationScreen);
