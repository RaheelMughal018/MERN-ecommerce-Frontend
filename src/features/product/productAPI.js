export function fetchAllProducts() {
  //TODO: we will not hard-cord Server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    resolve({ data })
  })
}

export function fetchProductsByFilters(filter, sort) {
  // filter = {"category":["smartphones","laptop"]}
  //sort = {_sort="price"&_order="desc"}
  // TODO: we will support multi values on server later on
  let queryString = ""
  for (let key in filter) {
    const categoryValues = filter[key]
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for (const key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  //TODO: we will not hard-cord Server URL here
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    )
    const data = await response.json()
    resolve({ data })
  })
}
