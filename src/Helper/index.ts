export const formatMoney = (amount: any) => {
    if (typeof amount === 'string') {
        return Number(parseFloat(amount)).toLocaleString();
    }

    return Number(amount).toLocaleString();
};
