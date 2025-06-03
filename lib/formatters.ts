export function formatCurrency(value: number): string {
  // Use a more explicit locale or ensure consistent formatting
  // to avoid hydration mismatches between server and client
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}