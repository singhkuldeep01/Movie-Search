import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import MovieDetails from './Pages/MovieDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Movie/:id' element={<MovieDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;