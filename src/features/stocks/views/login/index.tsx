import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { StockScreenList } from '../../../../rootNavigation';
import SCREENS from '../../../../constants/screen';
import { Toaster } from '../cartPage';
import styles from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const defaultNavigation = useNavigation<StackNavigationProp<StockScreenList>>();

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        !!email && !!password && defaultNavigation.navigate(SCREENS.StockList);
        (!email || !password) && Toaster('please enter email and password')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome To </Text>
            <LinearGradient colors={['#333', '#555']} style={[styles.titleContainer, styles.clubTitle]}>
                <Text style={styles.clubTitleText}>The 1% Club</Text>
            </LinearGradient>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
                placeholderTextColor={'black'}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <LinearGradient colors={['#333', '#555']} style={styles.loginButtonGradient}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Login;
