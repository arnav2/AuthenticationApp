import React, { useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  BackHandler,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Card from '../components/WorkoutCard';
import Header from '../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import MainCard from '../components/MainCard';
import en from '../utils/en.json';
import WorkoutCard from '../components/WorkoutCard';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const home = useSelector((state: any) => state.home);

//   useFocusEffect(
//     useCallback(() => {
//       BackHandler.addEventListener('hardwareBackPress', backAction);

//       return () =>
//         BackHandler.removeEventListener('hardwareBackPress', backAction);
//     }, []),
//   );

  const backAction = () => {
    Alert.alert('Exit App', 'Are you sure you want to exit?', [
      {
        text: 'NO',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);

    return true;
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <WorkoutCard
        workoutId={item.id}
        workoutName={item.name}
        workoutImage={item.image}
        navigation={navigation}
        workoutDescription={item.workoutDescription}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.solidWhite} barStyle="dark-content" />
      <View style={{ backgroundColor: colors.solidWhite }}>
        <Header userName={en.appName} mainCardHeader={en.mainCardHeader} />
        <MainCard
          image={require('../assets/images/Home/legs.png')}
          headerText={'Legs of Iron'}
          subHeaderText={'Intermediate'}
          timeText={'20 mins'}
          routineType={'Legs of Iron'}
          navigation={navigation}
        />
      </View>
      <View
        style={{
          backgroundColor: colors.solidWhite,
          marginTop: 1,
          marginBottom: 20,
        }}
      >
        <Text style={styles.routinesHeader}>Workout Routines</Text>
        <FlatList
          data={home.feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatListContainer}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  routinesHeader: {
    color: colors.description,
    fontSize: 18,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 0.7,
    marginTop: 20,
    marginLeft: 20,
  },
  homeCard: {
    marginHorizontal: 20,
    borderWidth: 2,
    marginTop: 50,
  },
  mainImage: {
    position: 'absolute',
  },
  flatListContainer: {
    marginTop: 20,
  },
  mainContainer: {
    backgroundColor: colors.homeBG,
    flex: 1,
  },
  container: {
    backgroundColor: colors.secondary_container,
    height: hp('65%'),
    width: wp('100%'),
    marginTop: hp('35%'),
    position: 'absolute',
    zIndex: -1,
  },
});

export default HomeScreen;
