import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import { RootState } from '../store/reducers';
import { setBreakTime, toggleSound } from '../store/actions/settings';
import PauseTime from '../components/PauseTime';
import Sound from '../components/Sound';
import colors from '../constants/colors';

const SettingsScreen: React.FC<{sound: any, breakTime: any, pauseTime: any[],  setBreakTime: (arg0: any) => void, toggleSound: (arg0: boolean) => void}> = ({sound, breakTime, pauseTime, setBreakTime, toggleSound}) => {

  const [pauseTimeOptions, setOptions] = useState(pauseTime);
  const [soundInfo, setSound] = useState(sound);

  const updatePauseTime = () => {
    const data = pauseTime.filter((i: any) => i.selected);
    setBreakTime(data[0].value)
  };

  const updateSound = () => {
    const data = !soundInfo;
    setSound(data);
    toggleSound(data);
  };

  useEffect(() => {
    // Add any necessary effect logic
  }, [pauseTimeOptions, soundInfo]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
        <View style={styles.subContainer}>
          <PauseTime buttonsData={pauseTimeOptions} onClick={updatePauseTime} />
        </View>
        <View style={styles.soundContainer}>
          <Sound soundInfo={soundInfo} toggleSound={updateSound} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 20,
  },
  soundContainer: {
    top: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 1,
    color: colors.app_color_primary,
  },
});

const mapStateToProps = (state) => {
    return {
      sound: useSelector((state: RootState) => state.settings.sound),
      breakTime: useSelector((state: RootState) => state.settings.breakTime),
      pauseTime: useSelector((state: RootState) => state.settings.pauseTimeOptions)
    };
  };

const mapDispatchToProps = {
    setBreakTime,
    toggleSound
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
