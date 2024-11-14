import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import MovieDetails from './Pages/MovieDetails';
import About from './Pages/About';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Movie/:id' element={<MovieDetails/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;