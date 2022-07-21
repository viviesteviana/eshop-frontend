export const getPrice = (price) => {
    return new  Intl.NumberFormat('id-ID', {
    Style: 'currency',
    currency:'IDR',
    }).format(price);
}