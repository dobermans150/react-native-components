/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/interfaces';
import { FlatListMenuItem } from '../components/FlatListMenuItem';




const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'cube-outline',
        component: 'Animation102Screen',
    },
];

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ paddingTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title} >Opciones de Menú</Text>
            </View>
        );
    };


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
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

