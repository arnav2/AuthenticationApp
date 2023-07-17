import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import colors from '../constants/colors';

interface SoundProps {
  soundInfo: boolean;
  toggleSound: (value: boolean) => void;
}

const Sound: React.FC<SoundProps> = ({ soundInfo, toggleSound }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>Sound On/Off</Text>
      <View style={styles.radioContainer}>
        <Switch
          onValueChange={() => toggleSound(!soundInfo)}
          thumbColor={colors.app_color_secondary}
          value={soundInfo}
          trackColor={{ true: colors.subcategory_button, false: colors.heading }}
        />
      </View>
    </View>
  );
};

export default Sound;

const styles = StyleSheet.create({
  radioContainer: {
    marginLeft: 10,
    marginTop: 3
  },
  textContainer: {
    top: 5,
    fontSize: 18,
    color: colors.app_color_primary,
  },
  itemContainer: {
    top: 40,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchContainer: {
    color: colors.subcategory_button,
  },
});






