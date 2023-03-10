export async function getDollarBluePrice() {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest")
  const data = await res.json()
  return data.blue.value_sell
}
