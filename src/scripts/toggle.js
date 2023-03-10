function show(bool) {
  const newPriceContainers = document.querySelectorAll("#new-price")
  newPriceContainers.forEach((priceContainer) => {
    if (bool) {
      priceContainer.style.display = "block"
      return
    }
    priceContainer.style.display = "none"
  })
}

chrome.runtime.onMessage.addListener((request, _sender, _sendResponse) => {
  console.log(request)
  if (request.show) {
    show(true)
  } else {
    show(false)
  }
})
