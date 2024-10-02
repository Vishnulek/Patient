import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import AddPatient from './components/AddPatient';
import Delete from './components/Delete';
import Search from './components/Search';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/add' element={<AddPatient/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
