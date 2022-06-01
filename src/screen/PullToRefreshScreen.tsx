/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/theme';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();

    const [refreshing, setreFreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setreFreshing(true);

        setTimeout(() => {
            console.log('terminamos');
            setreFreshing(false);
            setData('Hola mundo');
        }, 3000);
    };

    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    /* Esto ya esta disponible para ambas plataformas */
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white', 'red', 'orange']}

                    //* ios
                    style={{ backgroundColor: '#5856D6' }}
                    tintColor="white"
                    title="Pull to refresh"
                    titleColor="white"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh" />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
    );
};
