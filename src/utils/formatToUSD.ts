function formatToUSD(number: number): string {
    // Use Intl.NumberFormat to format the number as USD
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    // Format the number and return the result
    return formatter.format(number);
}

export default formatToUSD;