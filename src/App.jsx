// import Card from './assets/Components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Props1 from './Props/Props1';

function App() {
  return (
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="Props1" element={<Props1/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;



  