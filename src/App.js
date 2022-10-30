import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext/CartContext'
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Checkout from './components/Checkout/Checkout';
import { NotificationProvider } from './context/Notification/Notification'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Bienvenidos a La Tabla. Haga su pedido online'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos por categoría: '/>}/>
              <Route path='item/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkoutform' element={<CheckoutForm />}/>
              <Route path='checkout' element={<Checkout />}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
