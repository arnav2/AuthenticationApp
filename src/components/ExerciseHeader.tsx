import React from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

interface ExerciseHeaderProps {
  exerciseGroup: string;
  quit: () => void;
  goBack: () => void;
}

const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({ exerciseGroup, quit, goBack }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight onPress={quit}>
          <Icon name="md-close-outline" size={50} color={colors.app_Tint_dark} />
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  headText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.app_color_primary,
  },
});

export default ExerciseHeader;
