import './App.css';
import Index from './Components/Index';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Single from './Components/Single';
import Navbar from './Components/Navbar';
import Electronics from './Components/Electronics';
import Jewelery from './Components/Jewelery';
import Menclothing from './Components/Menclothing';
import Womenclothing from './Components/Womenclothing';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Index />} />
      <Route path='/products/:id' element= {<Single />} />
      <Route path='/electronics/:electronics' element={<Electronics/>}/>
      <Route path='/jewelery/:jewelery' element={<Jewelery/>}/>
      <Route path='/menclothing/:menclothing' element={<Menclothing/>}/>
      <Route path='/womenclothing/:womenclothing' element={<Womenclothing/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
