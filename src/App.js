import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/customNavbar';
import MainContent from './components/mainContent';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAcountPage';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
        <Footer /> {/*salah update*/}
      </Router>
    </>
  );
}

export default App;
