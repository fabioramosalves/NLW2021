import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles'

export function SignIn() {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Text>NLW2021</Text>
            <StatusBar style="auto" />
            <TextInput
                style={styles.input}
                onChangeText={setText}
            />
            <Text>
                Você digitou: {text}
            </Text>
        </View>
    );
}


