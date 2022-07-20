/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

    const [numbers, setnumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        let newArray: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setnumbers([...numbers, ...newArray]);
        }, 1500);
    };

    const renderItem = (item: number) => {
        return (
            <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />

        );
        /*  <Image
             source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
             style={{ width: '100%', height: 400 }}
         /> */
    };

    return (
        <View style={{ flex: 1 }} >

            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}

                onEndReached={() => loadMore()}
                onEndReachedThreshold={0.5}

                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >

                        <ActivityIndicator size={25} color="#5856D6" />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    },
});
