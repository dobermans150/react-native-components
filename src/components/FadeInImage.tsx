/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react'
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string;
}

export const FadeInImage: FC<Props> = ({ uri }) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

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
                    width: '100%',
                    height: 400,
                    opacity,
                }}
            />
        </View>


    );
};
