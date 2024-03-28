

export const addLocalStorage = (data) => {
    const existingData = localStorage.getItem('cart');
    let updatedData = [];
  
    if (existingData) {
      updatedData = JSON.parse(existingData);
    }
    
  
    updatedData.push(data);
    localStorage.setItem('cart', JSON.stringify(updatedData));
     try{   console.log('Data added to localStorage:', data);
    } catch (error) {
      console.error('Error adding data to localStorage:', error);
    }
}

export const removeFromLocalStorage= (data) => {
    const existingData = localStorage.getItem('cart');

    if (existingData){
        let updateData = JSON.parse(existingData);
        const index = updateData.findIndex(item => item.id === data.id)

        if (index !== -1) {
            if (updateData[index].quantity > 1) {
                updateData[index].quantity--; // Birim sayısını azalt
            } else {
                updateData.splice(index, 1); // Ürünü kaldır
            }
      
            localStorage.setItem('cart', JSON.stringify(updateData));
          }
    }
}

export const getFromLocalStorage = async () => {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : null;
  };
