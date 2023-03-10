export function formatPrice(price, currency) {
  return Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
  }).format(price)
}
