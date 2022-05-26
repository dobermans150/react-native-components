import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import { MenuItem } from '../interfaces/interfaces';
import { RootStackNavigation } from '../navigation/StackNavigation';

type NavigationHomeScreenProperties = StackNavigationProp<RootStackNavigation, 'HomeScreen'>;

interface props {
  menuItem: MenuItem
}

export const FlatListMenuItem: FC<props> = ({ menuItem }) => {

  const { navigate } = useNavigation<NavigationHomeScreenProperties>();

  return (

    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(menuItem.component)}
    >

      <View style={styles.container}>

        <Icon
          name={menuItem.icon}
          color="gray"
          size={23}
        />

        <Text style={styles.itemText}>{menuItem.name}</Text>

        <Icon
          name="chevron-forward-outline"
          style={styles.icon}
          color="gray"
          size={23}
        />
      </View>
    </TouchableOpacity>



  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
  icon: {
    marginLeft: 'auto',
  },
});
