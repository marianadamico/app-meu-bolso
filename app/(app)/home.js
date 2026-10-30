import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import BalanceCard from '../../src/components/BalanceCard';
import AppButton from '../../src/components/AppButton';
import SummaryCard from '../../src/components/SummaryCard';
import FloatingButton from '../../src/components/FloatingButton';

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <View style={styles.header}>]
                <View>
                    <Text style={styles.title}>Meu Bolso</Text>
                    <Text style={styles.sub}>Resumo financeiro</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.profile}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <BalanceCard balance={1000} />

            <AppButton title="Gerar relatório PDF" />

            <View style={styles.row}>
                <SummaryCard title="Receitas" value={100000} type="receitas" />
                <SummaryCard title="Despesas" value={50000} type="despesa" />
            </View>

            <Text style={styles.section}> Últimas transações </Text>

            <FloatingButton onPress={() => router.push('/(app)/add-transaction')} />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16
    },
    title: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2f3640'
    },
    sub: {
        color: '#7f8c8d'
    },
    profile: {
        color: '#008f72',
        fontWeight: '700'
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: -4
    },
    section: {
        fontSize: 18,
        fontWeight: '800',
        marginVertical: 10,
    }
});