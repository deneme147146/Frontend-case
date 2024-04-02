
/**
 * @title LocalStorage'a kart ekle
 * @description localStorage'a kart eklerken kart kontrolü yapıp quantity üzerinden veriyi manipülasyon etmek 

 * İçeride ilgili kart için kontrol yap
 * İçeride ilgili kart varsa quantity artır
 * İçeride ilgili kart yoksa ilgili kartı ekle.
 */
export const addLocalStorage = (data) => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

     // Ürünün sepette olup olmadığını kontrol et
     const existingItemIndex = cartItems.findIndex(
       (item) => item.product.id === data.id
     );

     if (existingItemIndex !== -1) {
       // Eğer ürün sepette varsa, miktarını arttır
       cartItems[existingItemIndex].quantity += 1;
     } else {
       // Eğer ürün sepette yoksa, 1 mikta rıyla ekle
      cartItems.push( {product: data, quantity:1});
     }
    // Güncellenmiş sepet ürünlerini tekrar local storage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // const existingData = localStorage.getItem('cart');
    //  let updatedData = [];
  
    // if (existingData) {
    //   updatedData = JSON.parse(existingData);
    // }
    
  
    // updatedData.push(data);
    //  localStorage.setItem('cart', JSON.stringify(updatedData));
    //  try{   console.log('Data added to localStorage:', data);
    // } catch (error) {
    //   console.error('Error adding data to localStorage:', error);
    //  }
}

/**
 * @title LocalStorage'dan kart silme
 * @description localStorage'dan kart silerken kart kontrolü yapıp quantity üzerinden veriyi manipülasyon etmek 

 * İçeride ilgili kart için kontrol yap
 * İçeride ilgili kart varsa ve quantity'si 1'den fazlaysa quantity azalt
 * İçeride ilgili kart varsa ve quantity 1'e eşitse ilgili kartı array'den çıkart
 * İçeride ilgili kart yoksa bir şey yapma
 */
export const removeFromLocalStorage= (data) => {

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Ürünün sepette olup olmadığını kontrol et
  const existingItemIndex = cartItems.findIndex(
    (item) => item.product.id === data.id
  );

  if (existingItemIndex !== -1) {
    // Eğer ürün sepette varsa, miktarını arttır
    cartItems[existingItemIndex].quantity -= 1;
  } else if(cartItems[existingItemIndex].quantity == 1){
    // Eğer ürün sepette yoksa, 1 mikta rıyla ekle
    cartItems.splice(existingItemIndex, 1);
  }
 // Güncellenmiş sepet ürünlerini tekrar local storage'a kaydet
 localStorage.setItem('cart', JSON.stringify(cartItems));












    // const existingData = localStorage.getItem('cart');

    // if (existingData){
    //     let updateData = JSON.parse(existingData);
    //     const index = updateData.findIndex(item => item.id === data.id)

    //     if (index !== -1) {
    //         if (updateData[index].quantity > 1) {
    //             updateData[index].quantity--; 
    //         } else {
    //             updateData.splice(index, 1);
    //         }
      
    //         localStorage.setItem('cart', JSON.stringify(updateData));
    //       }
    // }
}

/**
 * @title LocalStorage'dan veri çekme
 * @description localStorage kontrolü yapılıyor

 * localStorage içinden veri çek
 * Data varsa parse et
 * Data yoksa null dön
 */
export  const getFromLocalStorage = async () => {
    const data = await localStorage.getItem('cart');
    return data ? JSON.parse(data) : null;
  };
