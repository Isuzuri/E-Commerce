import './global.scss';
import Header from './shared/header/header';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Collections from './pages/collections/collections';
import Men from './pages/men/men';
import Women from './pages/women/women';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/collections" element={<Collections />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Collections />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
