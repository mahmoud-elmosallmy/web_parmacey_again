import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Doctors from './Pages/Doctors';
import DoctorsCategory from './Components/DoctorsCategory';
import Footer from './Components/Footer/Footer';
import Specialties from './Pages/Specialties';
import Support from './Pages/Support';
import ShowDoctor from './Components/InputSearch/ShowDoctor';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/doctors"} element={<Doctors />} />
            <Route path={"/category/:id"} element={<DoctorsCategory />} />
            <Route path={"/specialties"} element={<Specialties />} />
            <Route path={"/support"} element={<Support />} />
            <Route path={"/show_doctor/:id"} element={<ShowDoctor />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
