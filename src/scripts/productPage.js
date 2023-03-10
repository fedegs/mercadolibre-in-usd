import { getDollarBluePrice } from "./dollar"
import { formatPrice } from "./utils"

async function main() {
  const dollarPrice = await getDollarBluePrice()
  const currency = document.querySelector(
    "span[itemprop=priceCurrency]"
  ).textContent
  const price = document
    .querySelector("meta[itemprop=price]")
    .getAttribute("content")

  if (!currency || !price) return

  let newPrice
  let textContent
  if (currency !== "U$S") {
    newPrice = Number(price) / dollarPrice
    textContent = formatPrice(newPrice, "USD")
  } else {
    newPrice = Number(price) * dollarPrice
    textContent = formatPrice(newPrice, "ARS")
  }

  const paragraph = document.createElement("p")
  paragraph.id = "new-price"
  paragraph.textContent = textContent
  paragraph.style.fontSize = "24px"
  paragraph.style.color = "#333"
  const priceContainer = document.querySelector(".ui-pdp-price__second-line")
  priceContainer.insertAdjacentElement("afterend", paragraph)
}

setTimeout(main, 100)
