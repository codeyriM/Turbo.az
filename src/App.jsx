import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import Layout from './pages/Layout.jsx'
import NoPage from './pages/NoPage';
import Autosalons from './pages/avtosalonlar/Autosalons';
import Yardim from './pages/Yardim.jsx'
import RU from './pages/RU.jsx'
import Secilmisler from './pages/Secilmisler.jsx';
import MainGiris from './pages/giris/MainGiris'
import CarPage1 from './pages/carPage/CarPage1'
import BiznesHesabi from './pages/giris/BiznesHesabi';
import InfoCars from  './components/cars/carGallery/InfoCars.jsx';
import CarPage2 from './pages/carPage/CarPage2'
import NewElan from './pages/NewElan.jsx'

function App() {


  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/autosalons" element={<Autosalons />} />
          <Route path="/carpage1" element={<CarPage1 />} />
          <Route path="#" element={<NoPage />} />
          <Route path="#" element={<Yardim />}></Route>
          <Route path="#" element={<RU />}></Route>
          <Route path="#" element={<Secilmisler />}></Route>
          <Route path="/maingiris" element={<MainGiris />}></Route>
          <Route path="/bizneshesabi" element={<BiznesHesabi />}></Route>
          <Route path="/infocars" element={<InfoCars />}></Route>
          <Route path="/carpage2" element={<CarPage2 />} />
          <Route path="/newelan" element={<NewElan />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
