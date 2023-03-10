import { getDollarBluePrice } from "./dollar.js"
import { formatPrice } from "./utils.js"

async function main() {
  const dollarPrice = await getDollarBluePrice()
  const priceContainers = document.querySelectorAll(
    ".ui-search-price__second-line"
  )
  priceContainers.forEach((p) => {
    const currency = p.querySelector(".price-tag-symbol").textContent
    const price = p
      .querySelector(".price-tag-fraction")
      .textContent.replace(/[.]/g, "")

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
    paragraph.style.color = "#333"
    paragraph.textContent = textContent
    p.insertAdjacentElement("afterend", paragraph)
  })
}

setTimeout(main, 100)
