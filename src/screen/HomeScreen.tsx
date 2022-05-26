/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { FlatList, View } from 'react-native';
import { styles } from '../theme/theme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';


export const HomeScreen = () => {

    const ItemSeparator = () => {
        return (
            <View
                style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 5 }}
            />
        );
    };

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='Opciones del Menú' />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

