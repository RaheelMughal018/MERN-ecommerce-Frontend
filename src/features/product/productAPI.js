export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080/products/${id}`);

      if (!response.ok) {
        if (response.status === 404) {
          // Handle 404 error
          reject(new Error("Product not found"));
        } else {
          // Handle other HTTP errors
          reject(new Error(`HTTP error! Status: ${response.status}`));
        }
        return;
      }

      const data = await response.json();
      // console.log("🚀  fetchProductById > data:", data);
      resolve({ data });
    } catch (error) {
      // console.error("Error fetching product:", error);
      reject(error);
    }
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  // TODO : on server we will support multi values in filter
  // TODO: server will filter the deleted products

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  // console.log(pagination)
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const allProducts = await fetch("http://localhost:8080/products");
    const allProductsJson = await allProducts.json();
    const totalItems = allProductsJson.length;
    // console.log("🚀 ~ returnnewPromise ~ totalItems:", totalItems)
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    // console.log("🚀 ~ returnnewPromise ~ data:", data);
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/products/${update.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
