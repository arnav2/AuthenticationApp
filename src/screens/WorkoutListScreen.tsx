import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import routines from '../assets/data/routines';
import colors from '../constants/colors';
import { ScreenNames } from '../enums';
import WorkoutCard from '../components/WorkoutCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NativeButton from '../components/NativeButton';

interface RoutineProps {
  navigation: any;
  route: any;
}

// List all the workouts for the user
const WorkoutList: React.FC<RoutineProps> = ({ navigation, route }) => {
  const { workoutType } = route.params;

  const renderItem = ({ item }: any) => {
    return item[workoutType].map((x: any, index: number) => {
      return (
        <WorkoutCard

            key={index}
            workoutId={x.id}
            workoutImage={x.image}
            navigation={navigation}
            workoutName={x.workoutName}
            workoutDescription={x.workoutDescription}
        />
      );
    });
  };

  const startRoutine = () => {
    const selectedRoutine = routines[0][workoutType];
    navigation.navigate(ScreenNames.WORKOUTPLAYLIST, { data: selectedRoutine });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'rgba(245, 126, 122, 0.95)'}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{workoutType}</Text>
        </View>
        <FlatList
          data={routines}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListContainer}
        />
        <View style={styles.buttonContainer}>
          <NativeButton
            textName="START"
            onClick={() => startRoutine()}
            buttonWidth={'65%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 0.7,
    color: colors.app_color_primary,
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.solidWhite,
    height: hp('80%'),
    width: wp('100%'),
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    marginTop: hp('20%'),
  },
  mainContainer: {
    backgroundColor: 'rgba(245, 126, 122, 0.95)',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 60,
    marginBottom: Platform.OS === 'ios' ? 120 : 80,
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    // backgroundColor: 'rgba(240, 240, 240, 0.8)',
    // borderColor: colors.borderColor,
    flex: 1,
    paddingBottom: 30,
    width: '100%',
    marginTop: Platform.OS === 'android' ? hp('71%') : hp('67%'),
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default WorkoutList;
