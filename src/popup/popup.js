import { getDollarBluePrice } from "../scripts/dollar"
const $ = (selector) => document.querySelector(selector)

async function main() {
  const price = await getDollarBluePrice()
  const dolarBlueContainer = $("#dolar-blue-price")
  dolarBlueContainer.textContent = "$ " + price
}

void main()

const toggleButton = $("#toggle")
toggleButton.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  if (toggleButton.checked) {
    await chrome.tabs.sendMessage(tab.id, {
      show: true,
    })
    return
  }
  await chrome.tabs.sendMessage(tab.id, {
    show: false,
  })
})
