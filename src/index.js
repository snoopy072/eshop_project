import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-9lnpf75m.us.auth0.com
//XB24UEZOvK2K80ngKyusU5r5X5Bsseuj
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-9lnpf75m.us.auth0.com'
  clientId='XB24UEZOvK2K80ngKyusU5r5X5Bsseuj'
  redirectUri={window.location.origin}
  cacheLocation='localstorage'
>
<UserProvider>
  <ProductsProvider>
    <FilterProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

