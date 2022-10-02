
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home';
import Fleet from './routes/Fleet';
import Contact from './routes/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fleet' element={<Fleet />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
