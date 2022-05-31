import React from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSiwtch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/theme';

export const TextInputScreen = () => {


    const { isSubscribe, form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false,
    });



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <ScrollView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Text Input" />

                        <TextInput
                            style={stylesScreen.textInput}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />

                        <TextInput
                            style={stylesScreen.textInput}
                            placeholder="Ingrese su Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            keyboardAppearance="dark"
                            onChangeText={(value) => onChange(value, 'email')}
                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Suscribirse</Text>
                            <CustomSwitch
                                isOn={isSubscribe}
                                onChange={(value) => onChange(value, 'isSubscribe')}
                            />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={stylesScreen.textInput}
                            placeholder="Ingrese su Telefono"
                            keyboardType="phone-pad"
                            onChangeText={(value) => onChange(value, 'phone')}

                        />

                        {/* <View style={{ height: 100 }} /> */}

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    textInput: {
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 25,
    },

});
