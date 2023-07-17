// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { appleAuth } from '@invertase/react-native-apple-authentication';

// const AppleSignInButton: React.FC = () => {
//   const handleAppleSignIn = async () => {
//     try {
//       const appleAuthRequestResponse = await appleAuth.performRequest({
//         requestedOperation: appleAuth.Operation.LOGIN,
//         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//       });
//       console.log('Apple auth response:', appleAuthRequestResponse);
//       // Use the response for further operations (e.g., authentication)
//     } catch (error) {
//       console.log('Apple sign-in error:', error);
//     }
//   };

//   return (
//     <View>
//       <Text>Sign in with Apple</Text>
//       <TouchableOpacity onPress={handleAppleSignIn}>
//         {/* Add your custom Apple sign-in button UI here */}
//         <Text>Apple Sign-In Button</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AppleSignInButton;