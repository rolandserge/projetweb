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
import PrivateRoute from './Routes/PrivateRoute';
import Payement from './Pages/Users/Payement';
import Finish from './Pages/Users/Finish';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';
import ViewCommande from './Component/Admin/Commande/ViewCommande';
import DetailCommande from './Component/Admin/Commande/DetailCommande';
import TotalCommande from './Component/Admin/Commande/TotalCommande';
import Utilisateurs from './Component/Admin/Utilisateurs/Utilisateurs';
import Categories from './Component/Users/Categories';
import Profil from './Pages/Users/Profil';  
import ModifierProfil from './Component/Users/Profil/ModifierProfil';
import CommandeUser from './Component/Users/Profil/CommandeUser';
import VoirProfil from './Component/Users/Profil/VoirProfil';


axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN' : window.csrf_token
};

axios.defaults.baseURL = "http://127.0.0.1:8000/"

axios.defaults.withCredentials = true

axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token')
  // const name = localStorage.getItem('auth_name')
  // const session = sessionStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  // config.headers.Authorization = name ? `Bearer ${name}` : ''
  return config
})

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route element={<Home />}>
              <Route path='/categories/:categorie' element={<Categories />} />
          </Route>
          <Route path='/panier/*' element={<Panier />} />
          <Route path='/cards/*' element={<Card />} />
          <Route path='/detail-tableau/:id' element={<DetailTableau />} />

          <Route element={<PublicRoute />}>
              <Route path='/login/*' element={<Login />} />
              <Route path='/register/*' element={<Register />} />
          </Route>
          <Route element={<ProtectedRoute />} >
              <Route element={<Profil />}>
                  <Route path='/mon-profil/editer-profil' element={<ModifierProfil />} />
                  <Route path='/mon-profil' element={<VoirProfil />} />
                  <Route path='/mon-profil/liste-commandes' element={<CommandeUser />} />
              </Route>
              <Route path='/detail-payement/*' element={<Payement />} />
              <Route path='/Finish/*' element={<Finish />} />
          </Route>

          <Route element={<PrivateRoute />}>
              <Route element={<Dashbord />}>
                  <Route path='/admin/index/*' element={<Bord />} />
                  <Route path='/admin/product/add-product/*' element={<AddProduct />} />
                  <Route path='/admin/product/view-product/*' element={<ViewProduct />} />
                  <Route path='/admin/category/add-category/*' element={<AddCategory />} />
                  <Route path='/admin/category/view-category/*' element={<ViewCategory />} />
                  <Route path='/admin/commande/view-commandes/*' element={<ViewCommande />} />
                  <Route path='/admin/commande/view-commandes/detail-commande/:id/*' element={<DetailCommande />} />
                  <Route path='/admin/commande/view-commandes/total-commande/:id/*' element={<TotalCommande />} />
                  <Route path='/admin/utilisateurs/view-utilisateur/*' element={<Utilisateurs />} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
