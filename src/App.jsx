import Cart from './Pages/Cart';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import SingleProduct from './Pages/SingleProduct';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Sucess from './Pages/Sucess';
import { useSelector } from 'react-redux';
function App() {
  const user =useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element ={<Home/>} />
        <Route exact path='/cart' element ={<Cart/>} />
        <Route exact path='/login' element={user ? (<Navigate replace to="/" />) : (<LogIn/>)} />
        <Route exact path='/products/:category' element ={<ProductList/>} />
        <Route exact path='/register' element ={<Register/>} />
        <Route exact path='/product/:id' element ={<SingleProduct/>} />
        <Route exact path='/success' element ={<Sucess/>} />
      </Routes>
    </Router>
  );
}

export default App;
