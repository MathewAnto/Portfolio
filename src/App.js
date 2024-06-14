// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ComingSoon } from './Pages/Coming Soon/ComingSoon';
import { Home } from './Pages/Home/Home';
import { Main } from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ComingSoon />}></Route>
            <Route path="/portfolio" element={<ComingSoon />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/portfolio/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
