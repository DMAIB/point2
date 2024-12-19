// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Header from './components/Header/Header'; // Импортируем хедер
import AddProduct from './components/Admin/AddProduct';
import EditProduct from './components/Admin/EditProduct';
import { CartProvider } from './components/Main/CartContext';
import ProductList from './components/Admin/ProductList';
import { ProductProvider } from './components/Admin/ProductContext'; // Импортируйте ваш новый контекст
import { AuthProvider } from './components/Auth/AuthContext'; // Импортируйте AuthProvider

function App() {
  return (
    <AuthProvider> {/* Оберните приложение в AuthProvider */}
      <CartProvider>  
        <ProductProvider> {/* Оберните в ProductProvider */}
          <Router>
            <Header /> 
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/main" element={<Main />} /> 
              <Route path="/admin" element={<ProductList />} />
              <Route path="/" element={<Auth />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;