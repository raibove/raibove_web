import PrivacyPolicy from './adobe/Privacy';
import TermsOfUse from './adobe/TermsOfUse';
import './App.css'
import LandingPage from './Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/adb/eula" element={<TermsOfUse />}/>
      <Route path="/adb/privacy" element={<PrivacyPolicy />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
