import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import themes from '../config/themes';
const w = Dimensions.get('screen').width;

const RecipePopular = ({onPress}) => {
  const renderItem = () => {
    return (
      <Pressable style={styles.itemContainer} onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../assets/icon/img1.png')}
        />
        <View style={styles.cardItem}>
          <Text style={styles.titleItem}>Avocado Toast</Text>
          <View style={styles.starCon}>
            {Array(5)
              .fill(0)
              .map((_) => (
                <Image
                  style={styles.star}
                  source={require('../assets/icon/star.png')}
                />
              ))}
          </View>

          <View style={styles.footerItem}>
            <Image source={require('../assets/icon/clock.png')} />
            <Text style={styles.footerItemText}>5 min</Text>
          </View>
        </View>
        <Pressable style={styles.buttonHeart}>
          <Image
            source={require('../assets/icon/heart.png')}
            style={styles.iconHeart}
            resizeMode="contain"
          />
        </Pressable>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Most popular</Text>
        <Pressable>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.ScrollView}>
        {[1, 2, 3].map((_) => renderItem())}
      </ScrollView>
    </View>
  );
};

export default RecipePopular;

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ScrollView: {
    paddingVertical: 10,
  },
  title: {
    color: themes.colors.text,
    fontSize: 20,
    fontWeight: '600',
  },
  titleItem: {
    color: themes.colors.text,
    fontSize: 17,
    fontWeight: '600',
  },
  itemContainer: {
    backgroundColor: '#FFF',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 10,
    marginRight: 20,
  },
  footerItemText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    fontWeight: '500',
  },
  starCon: {
    flexDirection: 'row',
    marginVertical: 9,
  },
  star: {
    marginRight: 10,
  },
  viewAll: {
    color: '#888A82',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 20,
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardItem: {
    padding: 10,
  },

  buttonHeart: {
    padding: 10,
    backgroundColor: '#FFF',
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 100,
  },
});
