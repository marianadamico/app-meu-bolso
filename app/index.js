import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Meu Bolso</Text>
            <Text>Controle suas finanças</Text>
            <AppInput label="E-mail" placeholder="Digite seu e-mail" autoCapitalize="none" keyboardType="email-adress" value={email} onChangeText={setEmail}/>

            <AppInput label="Senha" secureTextEntry value={password}
            onChangeText={setPassword} placeholder="Digite sua senha" />

            <AppButton title="Entrar" onPress={} loading={loading}/>
            <TouchableOpacity>
            <Text>Criar nova conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
});