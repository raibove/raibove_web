import PrivacyPolicy from './adobe/Privacy';
import TermsOfUse from './adobe/TermsOfUse';
import './App.css'
import Support from './adobe/Support';
import LandingPage from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/adb/eula" element={<TermsOfUse />}/>
      <Route path="/adb/privacy" element={<PrivacyPolicy />}/>
      <Route path='/canva/tnc' element={<TermsOfUse />}/>
      <Route path='/canva/privacy-policy' element={<PrivacyPolicy />}/>
      <Route path='/canva/support' element={<Support />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
