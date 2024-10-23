
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Admin from './pages/Admin';
// import Upload from './pages/Upload';
// import Update from './pages/Update';
import Edit from './pages/Edit';
// import Peri from './Product/Peri';
import Perisp from './pages/Perisp';
import Perispuploads from './pages/Perispuploads';
import Valuesnacks from './pages/Valuesnacks';
import Valuesnacksupload from './pages/Valuesnacksupload';
import Burgers from './pages/Burgers';
import Burgersupload from './pages/Burgersupload';
import Chickenwings from './pages/Chickenwings';
import Chickenwingsupload from './pages/Chickenwingsupload';
import Perispedit from './pages/Perispedit';
import Valuesnacksedit from './pages/Valuesnacksedit';
import Form from './pages/Form';






function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Menu/>}/>
      <Route path='/home'element={<Home/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin'element={<Signin/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/form' element={<Form/>}/>
      {/* <Route path='/upload' element={<Upload/>}/>
      <Route path='/update' element={<Update/>}/> */}
      <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
      fetch(`http://localhost:3030/allproducts/${params.id}`)} />
      <Route path='/perisp' element={<Perisp/>}/>
      <Route path='/perispuploads'element={<Perispuploads/>}/>
      <Route path='/valuesnacks' element={<Valuesnacks/>}/>
      <Route path='/valuesnacksupload'element={<Valuesnacksupload/>}/>
      <Route path='/burgers'element={<Burgers/>}/>
      <Route path='/burgersupload'element={<Burgersupload/>}/>
      <Route path='/chickenwings'element={<Chickenwings/>}/>
      <Route path='/chickenwingsupload'element={<Chickenwingsupload/>}/>
      <Route path='/perispedit/:id' element={<Perispedit/>} loader={({params})=>
      fetch(`http://localhost:3030/allproductsperi/${params.id}`)}/>
      <Route path='/valuesnacksedit/:id'element={<Valuesnacksedit/>} loader={({params})=>
      fetch(`http://localhost:3030/allproductsvalue/${params.id}`)}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
