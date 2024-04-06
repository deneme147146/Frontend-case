import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import { Provider } from 'react-redux';
import store from '../store/configureStore'


// test('renders product details correctly', () => {
//     // Test kodları buraya gelecek
//   });

test('renders product details correctly', async () => {



render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/product/1']}>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </MemoryRouter>
    </Provider>
  );

  const element = screen.getByText('react-test')
  expect(element).toBeInTheDocument()



    // const fakeProduct = {
    //   id: '1',
    //   name: 'Test Product',
    //   price: 100,
    //   description: 'This is a test product',
    //   image: 'test-image-url',
    // };

    // // Mock useParams to return the fake product id
    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'),
    //   useParams: () => ({
    //     id: fakeProduct.id,
    //   }),
    // }));

    // render(
    //   <Provider store={store}>
    //     <MemoryRouter initialEntries={['/product/1']}>
    //       <Route path="/product/:id">
    //         <ProductDetail />
    //       </Route>
    //     </MemoryRouter>
    //   </Provider>
    // );

    // // Wait for the loading spinner to disappear
    // await screen.findByTestId('product-detail');

    // // Check if product details are rendered correctly
    // expect(screen.getByText(fakeProduct.name)).toBeInTheDocument();
    // expect(screen.getByText(`${fakeProduct.price} ₺`)).toBeInTheDocument();
    // expect(screen.getByText(fakeProduct.description)).toBeInTheDocument();
  });


  //     render( // ProductDetail component'ini Router component'i içinde render edin
//     <Router>
//       <ProductDetail />
//     </Router>
//   );

//     await waitFor(() => {
//     // Ekranda ürün detayları içeren bir elementin olup olmadığını kontrol ediyoruz
//     const productDetailElement = screen.getByTestId('product-detail');
//     expect(productDetailElement).toBeInTheDocument();
  
//     });