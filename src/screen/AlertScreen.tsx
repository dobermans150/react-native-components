/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/theme'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Titulo',
            'Este es el mensaje de la alerta',
            [
                {
                    text: 'Cancel',
                    onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => Alert.alert('OK Pressed'),
                },
            ],
            /*     {
                    cancelable: true,
                    onDismiss: () => Alert.alert('dismissed'),
                } */

        );
    };

    const showPrompt = () => {
        Alert.prompt(
            'Titulo',
            'Este es el mensaje de la Propmt',
            [
                {
                    text: 'Cancel',
                    onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <View style={styles.globalMargin}>

            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />

        </View>
    );
};