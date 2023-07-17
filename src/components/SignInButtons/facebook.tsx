// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

// const FacebookSignInButton: React.FC = () => {
//   const handleFacebookSignIn = async () => {
//     try {
//       const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//       if (result.isCancelled) {
//         console.log('Facebook sign-in canceled');
//       } else {
//         const tokenData = await AccessToken.getCurrentAccessToken();
//         console.log('Facebook access token:', tokenData.accessToken);
//         // Use the access token for further operations (e.g., authentication)
//       }
//     } catch (error) {
//       console.log('Facebook sign-in error:', error);
//     }
//   };

//   return (
//     <View>
//       <Text>Sign in with Facebook</Text>
//       <TouchableOpacity onPress={handleFacebookSignIn}>
//         {/* <LoginButton */}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FacebookSignInButton;