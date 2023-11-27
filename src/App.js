import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Doctors from './Pages/Doctors';

// const API = "https://data-base-pharmacy.onrender.com/children";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/doctors"} element={<Doctors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
