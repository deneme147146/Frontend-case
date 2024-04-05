// setupTests.js

const localStorageMock = {
  getItem: jest.fn((key) => {
    if (key === 'cart') {
      return JSON.stringify({ /* istediğiniz JSON verisi */ });
    }
    return null; // localStorage.getItem çağrıldığında null döndürür
  }),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;
