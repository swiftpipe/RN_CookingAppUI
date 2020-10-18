import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import themes from '../config/themes';
const w = Dimensions.get('screen').width;

const TabContent = ({onPress}) => {
  const renderItem = ({item}) => {
    return (
      <Pressable style={styles.item} onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../assets/icon/all1.png')}
        />
        <View style={styles.body}>
          <Text style={styles.titleItem}>Fish with couscous</Text>
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
          <View style={styles.footerCard}>
            <View style={styles.footerItem}>
              <Image source={require('../assets/icon/clock.png')} />
              <Text style={styles.footerItemText}>45 min</Text>
            </View>
            <Text style={styles.footerItemText}>6 ingredients</Text>
          </View>

          <Pressable style={styles.buttonHeart}>
            <Image
              source={require('../assets/icon/heart.png')}
              style={styles.iconHeart}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.itemScroll}>
      <FlatList
        scrollEnabled={false}
        renderItem={renderItem}
        data={[1, 2, 3, 4]}
      />
    </View>
  );
};

export default TabContent;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: 'gray',
  },
  starCon: {
    flexDirection: 'row',
    marginVertical: 9,
  },
  star: {
    marginRight: 5,
  },
  titleItem: {
    fontSize: 16,
    fontWeight: '600',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  body: {
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: themes.colors.main,
    alignSelf: 'center',
    marginTop: 3,
  },
  image: {
    width: w / 3.8,
    height: w / 3.8,
    borderRadius: 10,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerItemText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    fontWeight: '500',
  },
  iconHeart: {
    tintColor: themes.colors.main,
  },
  buttonHeart: {
    position: 'absolute',
    right: 15,
    top: 1,
  },
  itemScroll: {
    width: w - 30,
  },
});
