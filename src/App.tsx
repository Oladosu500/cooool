import {Routes, Route} from 'react-router-dom';
import "./App.css";
import CustomUrl from "./components/UrlShortener/CustomUrl";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Barcode from "./components/Barcode"
import MyUrls from './pages/MyUrl';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Analytics from './pages/Analytics';
import Faq from './pages/Faq';
import LearnMore from './pages/LearnMore';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <Navigation />

      <Layout className="red-500">
        <Routes>
          <Route path='/' element={<MyUrls /> } />
          <Route path='/features' element={<Features /> } />
          <Route path='/pricing' element={<Pricing /> } />
          <Route path='/analytics' element={<Analytics /> } />
          <Route path='/faq' element={<Faq /> } />
          <Route path='/LearnMore' element={<LearnMore /> } />
          <Route path='/Signup' element={<Signup /> } />
          <Route path='/Login' element={<Login /> } />
        </Routes>

        
      </Layout>
<Barcode /> 
<br />
<CustomUrl />
    </main>

  );
}

export default App;
