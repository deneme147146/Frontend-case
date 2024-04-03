/**
 * @title LocalStorage'a kart ekle
 * @description localStorage'a kart eklerken kart kontrolü yapıp quantity üzerinden veriyi manipülasyon etmek 

 * İçeride ilgili kart için kontrol yap
 * İçeride ilgili kart varsa quantity artır
 * İçeride ilgili kart yoksa ilgili kartı ekle.
 */
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
export const addLocalStorage = (data) => {
  

  // Ürünün sepette olup olmadığını kontrol et
  const existingItemIndex = cartItems.findIndex(
    (item) => item.product.id === data.id
  );

  if (existingItemIndex !== -1) {
    // Eğer ürün sepette varsa, miktarını arttır
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // Eğer ürün sepette yoksa, 1 mikta rıyla ekle
    cartItems.push({ product: data, quantity: 1 });
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
export const removeFromLocalStorage = (data) => {
  

  // Ürünün sepette olup olmadığını kontrol et
  const existingItemIndex = cartItems.findIndex(
    (item) => item.product.id === data.id
  );

  if (existingItemIndex !== -1) {
    // Eğer ürün sepette varsa, miktarını arttır
    cartItems[existingItemIndex].quantity -= 1;
    if (cartItems[existingItemIndex].quantity <= 0) {
      cartItems.splice(existingItemIndex, 1);
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
  return cartItems.reduce((totalPrice, cartItem) => {
    return totalPrice + cartItem.product.price * cartItem.quantity;
  },0);
}
