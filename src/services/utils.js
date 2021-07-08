const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

export function formatPrice(price) {
  return formatter.format(price);
}

export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
