import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import themes from '../config/themes';
const w = Dimensions.get('screen').width;
const IntroducScreen = () => {
  const navigation = useNavigation();
  const onPressMain = () => {
    navigation.navigate('MainScreen');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        resizeMode="contain"
        source={require('../assets/icon/banner.png')}
      />
      <View style={styles.groupTitle}>
        <Text style={styles.title}>The art of Cooking.</Text>
        <Text style={styles.title}>Make your life easier.</Text>
      </View>
      <View style={styles.groupIndicator}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.moved]} />
      </View>
      <Pressable style={styles.nextGroup} onPress={onPressMain}>
        <View style={styles.buttonNext}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../assets/icon/next.png')}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default IntroducScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: w,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#41423F',
  },
  groupTitle: {
    marginVertical: '15%',
  },
  indicator: {
    width: 6,
    height: 6,
    backgroundColor: '#CBDE99',
    borderRadius: 8,
    marginHorizontal: 3,
  },
  groupIndicator: {
    flexDirection: 'row',
  },
  moved: {
    width: 12,
    backgroundColor: '#A1AF69',
  },

  buttonNext: {
    width: 60,
    height: 60,
    backgroundColor: themes.colors.main,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFF',
  },

  nextGroup: {
    position: 'absolute',
    bottom: 55,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: themes.colors.main,
    borderRadius: 100,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
