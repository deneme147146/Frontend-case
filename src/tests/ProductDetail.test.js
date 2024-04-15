import React from 'react';
import { render, screen,act } from '@testing-library/react';
import '@testing-library/jest-dom'

import { MemoryRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import { Provider } from 'react-redux';
import store, { configureStore } from '../store/configureStore'



test('renders productdetails ', async () => {
const store = configureStore()


  render(
    <Provider store={store}>
        <MemoryRouter> 
            <ProductDetail />
        </MemoryRouter>
    </Provider>
);
 const titleElement = screen.getByText('ürün');
expect(titleElement).toBeInTheDocument();
});

// Mock ProductService
jest.mock('../services/productService', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    getByProductId: jest.fn(() => Promise.resolve({
      data: {
        id: '-1',
        name: 'Test Ürünü',
        price: 100,
        image: 'test-image-url',
        description: 'Bu bir test ürünüdür.',
      },
    })),
  })),
}));

describe('ProductDetail component', () => {
  test('renders product details correctly', async () => {
    const store = configureStore();

    //asenkron işlemleri senkronize _> act
    //await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <ProductDetail />
          </MemoryRouter>
        </Provider>
      );
   // }); waitfor da olur
   await screen.findByText(/Test Ürünü/);
   await screen.findByText('100 ₺');
   await screen.findByText(/Bu bir test ürünüdür/);
    // detayların yüklelmesi
    const productNameElement = screen.getByText(/Test Ürünü/);
    const priceElement = screen.getByText('100 ₺');
    const descriptionElement = screen.getByText(/Bu bir test ürünüdür/);

    //elementler varmı?
    expect(productNameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});


// jest.mock('../store/actions/cartActions', () => ({
//   addToCart: jest.fn(),
// }));

// jest.mock('../store/actions/localActions', () => ({
//   localProducts: jest.fn(),
// }));

// jest.mock('../helper/LocalStorageHelper', () => ({
//   addLocalStorage: jest.fn(),
// }));

//   const mockStore = configureStore([]);
// const store = mockStore({
//   product: {
//     products: [],
//     error: null,
//   },
//   local: {
//     localProduct: [],
//   },
//   // Diğer store state'leri buraya eklenebilir
// });

// render(
//   <Provider store={store}>
//     <Router>
//       <ProductDetail product={{ id: '1', name: 'Test Product', price: 10, image: 'test.jpg', description: 'This is a test product' }} />
//     </Router>
//   </Provider>
// );




  // const product = {
  //   id: 1,
  //   name: 'Example Product',
  //   price: 10,
  //   image: 'https://picsum.photos/200/300',
  //   description: 'Lorem ipsum dolor sit amet.',
  // };

  

  // render(
  //   <Provider store={store}>
  //     <Router>
  //       <ProductDetail/>
  //     </Router>
  //   </Provider>
  // );
  // expect(screen.queryByText('loading..')).toBeNull();


  // expect(screen.getByText(product.name)).toBeInTheDocument();
  //   expect(screen.getByText(`${product.price} ₺`)).toBeInTheDocument();
  //   expect(screen.getByText(product.description)).toBeInTheDocument();


  

// render(
//     <Provider store={store}>
//       <MemoryRouter initialEntries={['/product/1']}>
//         <Route path="/product/:id">
//           <ProductDetail />
//         </Route>
//       </MemoryRouter>
//     </Provider>
//   );

//   const element = screen.getByText('react-test')
//   expect(element).toBeInTheDocument()



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