import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

interface HeaderProps {
  userName: string;
  mainCardHeader: string;
}

const Header: React.FC<HeaderProps> = ({ userName, mainCardHeader }) => {
  return (
    <React.Fragment>
      <View style={styles.userNameView}>
        <Text style={styles.userText}>{userName}</Text>
      </View>
      <Text style={styles.subTitle}>{mainCardHeader}</Text>
    </React.Fragment>
  );
};

export default Header;

const styles = StyleSheet.create({
    userNameView: {
        flexDirection: 'row',
        marginHorizontal: 0,
        marginBottom: 20,
        justifyContent: 'center',
    },
    userText: {
        fontSize: 24,
        fontFamily: 'Raleway-ExtraBold',
        color: colors.app_color_primary,
        letterSpacing: 0.5,
    },
    subTitle: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 2,
        letterSpacing: 0.7,
        color: colors.description,
        fontFamily: 'Raleway-Bold',
    },
});
