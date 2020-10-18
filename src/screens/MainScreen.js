import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RecipePopular from '../components/RecipePopular';
import TabRecipe from '../components/TabRecipe';
import themes from '../config/themes';

const MainScreen = () => {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('DetailScreen');
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>What would you like to cook?</Text>
        <View style={styles.searchContainer}>
          <View style={styles.iconsearch}>
            <Image source={require('../assets/icon/search.png')} />
          </View>
          <TextInput style={styles.inputSearch} placeholder="Find a recipe" />
          <View style={styles.filterButton}>
            <Image source={require('../assets/icon/filter.png')} />
          </View>
        </View>

        <RecipePopular onPress={onPressItem} />
        <TabRecipe onPress={onPressItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#41423F',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,

    // paddingTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F4EC',
    borderRadius: 10,
    marginTop: 20,
  },
  filterButton: {
    backgroundColor: themes.colors.main,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  inputSearch: {
    flex: 1,
    padding: 10,
  },
  iconsearch: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
