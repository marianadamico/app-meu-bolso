export function formatCurrency(value) {
    return (Number(value) || 0).tolocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

export function parseCurrency(value) {
    return Number(String(value).replace(',', '.'));
}

export function formatDate(value) {
    return value ? new Date(value).tolocaleDateString('pt-BR') : '';
}