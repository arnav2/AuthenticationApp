import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { IWorkout } from '../interfaces/interfaces';
import WorkoutCard from '../components/WorkoutCard';
import colors from '../constants/colors';

interface ExerciseLibraryProps {
  navigation: any; // Add appropriate type for navigation prop
}

const ExerciseLibraryScreen: React.FC<ExerciseLibraryProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.library);

  const renderItem = ({ item, index }: { item: IWorkout; index: number }) => {
    return (
        <WorkoutCard
            key={index}
            workoutId={item.workoutId}
            workoutImage={item.workoutImage}
            navigation={navigation}
            workoutName={item.workoutName}
            workoutDescription={item.workoutDescription}
        />
    );
    };

  return (
    <SafeAreaView style={{ paddingBottom: 40, backgroundColor: colors.homeBG }}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Exercise Library</Text>
      </View>
      <FlatList
        data={state.routineLibrary}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: colors.app_color_primary,
    fontFamily: 'Raleway-ExtraBold',
    letterSpacing: 0.7,
    marginVertical: 15,
  },
});

export default ExerciseLibraryScreen;
