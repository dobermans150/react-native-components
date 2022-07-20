/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage: FC<Props> = ({ uri, style = {} }) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    size={30}
                    color="#5856D6"
                />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>


    );
};
