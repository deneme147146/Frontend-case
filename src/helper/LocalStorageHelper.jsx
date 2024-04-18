/**
 * @title LocalStorage'a kart ekle
 * @description localStorage'a kart eklerken kart kontrolü yapıp quantity üzerinden veriyi manipülasyon etmek 

 * İçeride ilgili kart için kontrol yap
 * İçeride ilgili kart varsa quantity artır
 * İçeride ilgili kart yoksa ilgili kartı ekle.
*/

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  export const addLocalStorage = (obj) => {
    console.log("ljasngjksd", obj);
  
    

    let userrr = JSON.parse(localStorage.getItem("user")) // from localstorage

    // Ürünün sepette olup olmadığını kontrol et
    const cartsOfUser = cartItems.filter(cart => cart.user === userrr.user.email);
    const existingItemIndex = cartsOfUser.findIndex(
      (item) => item.product.id === obj.product.id
    );
    
    if (existingItemIndex !== -1 ) {
      // Eğer ürün sepette varsa, miktarını arttır
      let index = cartItems.findIndex(
        (item) => item.product.id === cartsOfUser[existingItemIndex].product.id && item.user === userrr.user.email
      );
      cartItems[index].quantity += 1;
    } else {
      // Eğer ürün sepette yoksa, 1 mikta rıyla ekle
      cartItems.push({user:obj.email , product: obj.product, quantity: 1 });
    }
  // Güncellenmiş sepet ürünlerini tekrar local storage'a kaydet

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

/**
 * @title LocalStorage'dan kart silme
 * @description localStorage'dan kart silerken kart kontrolü yapıp quantity üzerinden veriyi manipülasyon etmek 

 * İçeride ilgili kart için kontrol yap
 * İçeride ilgili kart varsa ve quantity'si 1'den fazlaysa quantity azalt
 * İçeride ilgili kart varsa ve quantity 1'e eşitse ilgili kartı array'den çıkart
 * İçeride ilgili kart yoksa bir şey yapma
 */
export const removeFromLocalStorage = (obj) => {

  
  let userrr = JSON.parse(localStorage.getItem("user")).user.email // from localstorage
 
  // Ürünün sepette olup olmadığını kontrol et
  const cartsOfUser = cartItems.filter(cart => cart.user === userrr);
  const existingItemIndex = cartsOfUser.findIndex(
    (item) => item.product.id === obj.product.id
  );

  if (existingItemIndex !== -1) {
    // Eğer ürün sepette varsa, miktarını arttır
    let index = cartItems.findIndex(
      (item) => item.product.id === cartsOfUser[existingItemIndex].product.id && item.user === userrr
    );
    cartItems[index].quantity -= 1;

    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }
  // Güncellenmiş sepet ürünlerini tekrar local storage'a kaydet
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

/**
 * @title LocalStorage'dan veri çekme
 * @description localStorage kontrolü yapılıyor

 * localStorage içinden veri çek
 * Data varsa parse et
 * Data yoksa null dön
 */
export const getFromLocalStorage = async () => {
  const data = await localStorage.getItem("cart");
  return data ? JSON.parse(data) : null;
};

export const getTotalPrice = () => {
  let userrr =localStorage.getItem("user")
  
  userrr = userrr ? JSON.parse(userrr).user.email : ""

 
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const firebasee=cartItems.filter(cart =>cart.user ===userrr)
  return firebasee.reduce((totalPrice, cartItem) => {
    return totalPrice + cartItem.product.price * cartItem.quantity;
  }, 0);
};
