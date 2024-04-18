import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import RaiseFundPage from './pages/RaiseFundPage';
import ListFundPage from './pages/ListFundPage';
import FundPage from './pages/FundPage';
import UpdateFundPage from './pages/UpdateFundPage';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="raise" element={<RaiseFundPage/>} />
        <Route exact path="donate" element={<ListFundPage />} />
        <Route exact path="donate/:fundID" element={<FundPage />} />
        <Route exact path="donate/:fundID/update" element={<UpdateFundPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
