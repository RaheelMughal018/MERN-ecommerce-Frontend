import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './features/auth/components/Protected';

import {
  createBrowserRouter,
  RouterProvider,
  
} from 'react-router-dom';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useEffect } from 'react';
import { selectLoggedInUser } from './features/auth/AuthSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import ErrorPage from './pages/ErrorPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/sign-up',
    element: <SignupPage></SignupPage>,
  },
  { 
    path: '/cart',
    element: <Protected> <CartPage></CartPage> </Protected>
  },
  { 
    path: '/checkout',
    element: <Protected><CheckoutPage></CheckoutPage> </Protected>
  },
  { 
    path: '/product-detail/:id',
    element: <Protected> <ProductDetailPage></ProductDetailPage> </Protected>
  },
  { 
    path: '/order-success/:id',
    element: <Protected><OrderSuccessPage/></Protected>
  },
  { 
    path: '/orders',
    element: <Protected><UserOrderPage/></Protected>
    
  },
  { 
    path: '/profile',
    element: <Protected><UserProfilePage/></Protected>
    
  },
  { 
    path: '*',
    element: <ErrorPage/>
  },
]);

function App() {
const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  // console.log("🚀 ~ App ~ user:", user)
  useEffect(()=>{
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
    
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;