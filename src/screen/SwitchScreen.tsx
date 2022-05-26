/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSiwtch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: true,
        isHappy: true,
    });

    const { isActive, isHungry, isHappy } = state;

    const onChangle = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title="Switches" />
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChangle(value, 'isActive')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChangle(value, 'isHungry')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChangle(value, 'isHappy')} />
            </View>


            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 25,
    },
});
