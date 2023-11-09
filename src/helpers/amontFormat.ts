export function amountFormat(amount: string) {
    if (amount?.length > 3) {
        amount = amount?.replace(/[^0-9.]/g, "");
        if (amount?.indexOf(".") !== -1) {
            amount = amount?.substring(0, amount?.indexOf(".") + 3);
        }
        amount = amount?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return amount;
}