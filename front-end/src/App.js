import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTableau from './Pages/Users/DetailTableau';
import Home from './Pages/Users/Home';
import axios from "axios"
import Login from './Pages/Auth/Login';
import Panier from './Pages/Users/Panier';
import Register from './Pages/Auth/Register';
import Dashbord from './Pages/Admin/Dashbord';
import AddProduct from './Component/Admin/Product/AddProduct';
import AddCategory from './Component/Admin/Category/AddCategory';
import Bord from './Component/Admin/Bord';
import ViewCategory from './Component/Admin/Category/ViewCategory';
import ViewProduct from './Component/Admin/Product/ViewProduct';
import Card from './Component/Users/Card';


axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN' : window.csrf_token
};

axios.defaults.baseURL = "http://127.0.0.1:8000/"

axios.defaults.withCredentials = true

axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token')
  const name = localStorage.getItem('auth_name')
  // const session = sessionStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  config.headers.Authorization = name ? `Bearer ${name}` : ''
  return config
})

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/panier' element={<Panier />} />
          <Route path='/cards' element={<Card />} />
          <Route path='/detail-tableau/:id' element={<DetailTableau />} />

          <Route element={<Dashbord />}>
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path='/admin/index' element={<Bord />} />
              <Route path='/admin/product/add-product' element={<AddProduct />} />
              <Route path='/admin/product/view-product' element={<ViewProduct />} />
              <Route path='/admin/category/add-category' element={<AddCategory />} />
              <Route path='/admin/category/view-category' element={<ViewCategory />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
