import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import { ScreenNames } from '../enums';
import { TImage, TWorkoutCardNavigationProp } from '../types';

interface WorkoutCardProps {
  workoutId: string;
  workoutImage: TImage;
  navigation: TWorkoutCardNavigationProp;
  workoutName: string;
  workoutDescription: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workoutId, workoutImage, navigation, workoutName}: WorkoutCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { backgroundColor: colors.cardBG }]}
      onPress={() =>
        navigation.navigate(ScreenNames.WORKOUT, { workoutType: workoutName })
      }
    >
      <View style={styles.container}>
        {/* <FastImage
          source={workoutImage}
          style={[styles.imageContainer, { width: wp('55%'), height: hp('25%') }]}
        /> */}
      </View>
      <View style={styles.mainContainer}>
        <Text style={[styles.textContainer, { fontWeight: '700' }]}>
          {workoutName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(252, 252, 252, 0.8)',
    overflow: 'hidden',
  },
  cardContainer: {
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 20,
    flexDirection: 'column',
    borderColor: colors.cardBG,
    marginBottom: 40,
  },
  textContainer: {
    paddingTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    color: colors.app_color_primary,
    letterSpacing: 2,
  },
  imageContainer: {},
});
