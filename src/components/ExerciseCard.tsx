import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TImage } from '../types';

interface IExerciseCardProps {
  exerciseId: string;
  exerciseImage: TImage;
  exerciseName: string;
  exerciseDescription: string;
  exerciseReps: number;
}

const ExerciseCard: React.FC<IExerciseCardProps> = ({exerciseId, exerciseImage,exerciseName,exerciseDescription,exerciseReps}: IExerciseCardProps) => {
  return (
    <>
      <View style={styles.container}>
        {/* <FastImage
          source={{
            uri: exerciseImage
        }}
          style={[styles.imageContainer, { width: wp('90%'), height: hp('50%') }]}
          resizeMode="contain" */}
        {/* /> */}
      </View>
      <View style={[styles.subContainer, { marginHorizontal: 40, top: -40 }]}>
        <Text style={styles.textContainer}>{exerciseName}</Text>
        <Text style={styles.paraContainer}>{exerciseDescription}</Text>
      </View>
    </>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  subContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryText,
    marginBottom: 10,
  },
  paraContainer: {
    fontSize: 16,
    color: colors.secondaryText,
    lineHeight: 22,
  },
});
