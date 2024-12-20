import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListItem from './ListItem/ListItem';
import Home from './Routings/Home';
import About from './Routings/About';
import Menu from './Routings/Menu';
import Franchise from './Routings/Franchise';
import Footer from './Section1/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ListItem />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/franchise' element={<Franchise />} />
          </Routes>
      </BrowserRouter>
      <Footer />
      {/* <h1 style={{height: "150vh",}}></h1> */}
    </div>
  );
}

export default App;
