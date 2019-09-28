function selectSaleItems(items) {
  return items.filter((item) => {
    if (item.discount != undefined && item.discount > 0) {
      return item
    }
  })
}

module.exports = selectSaleItems
