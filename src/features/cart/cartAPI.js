export function addToCart(item) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart',{
      method:"POST",
      body: JSON.stringify(item),
      headers:{"content-type":"application/json"}
    })

    const data = await response.json()
    // console.log("🚀 ~ returnnewPromise ~ data:", data)
    resolve({data})
  }
  );
}


export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:8080/cart?user=${userId}`);
    const data = await response.json()
    // console.log("🚀 ~ returnnewPromise ~ data:", data)
    resolve({data})
  }
  );
}

  export function updateCart(update){
    return new Promise(async(resolve)=>{
      const response = await fetch(`http://localhost:8080/cart/${update.id}`,{
        method:"PATCH",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(update)
      })
      const data = await response.json()
      resolve({data})

    })
  }
  export function deleteItemInCart(itemId){
    // console.log("🚀 ~ deleteItemInCart ~ itemId:", itemId)
    return new Promise(async(resolve)=>{
      const response = await fetch(`http://localhost:8080/cart/${itemId}`,{
        method:"DELETE",
        headers:{ "Content-Type": "application/json" },
        
      })
      const data = await response.json()
      resolve({data:{id:itemId}})

    })
  }

// Reset Cart after order placed

  export function resetCart(userId){
    // * first get all items from user 's cart, then remove each one by one.
   return new Promise(async(resolve)=>{
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    // console.log("🚀 ~ resetCart ~ items:", items)
   
    for (let item of items) {
      await deleteItemInCart(item.id)
    }
    resolve({status:"success"})
   })
  }

