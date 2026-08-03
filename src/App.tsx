import { Routes, Route } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BreachLiability from './components/BreachLiability';
import FreeExclusive from './components/FreeExclusive';
import Breakthrough from './components/Breakthrough';
import PlatformsGain from './components/PlatformsGain';
import VaiDifference from './components/VaiDifference';
import HowItWorksNew from './components/HowItWorksNew';
import Ecosystem from './components/Ecosystem';
import ForPlatforms from './components/ForPlatforms';
import Footer from './components/Footer';

// The existing single-page ChainPass site, now served at /signup
function SignupSite() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Breach is the number one liability */}
      <BreachLiability />
      {/* 3. Free. And not exclusive. */}
      <FreeExclusive />
      {/* 4. What a V.A.I. is */}
      <Breakthrough />
      {/* 5. What platforms gain */}
      <PlatformsGain />
      {/* 6. The V.A.I. Difference - FOR PLATFORMS / FOR USERS tables */}
      <div className="h-px bg-cp-border-light" />
      <VaiDifference />
      {/* 7. How it works - 5-step strip */}
      <HowItWorksNew />
      {/* 8. Who's already on it - ecosystem row */}
      <div className="h-px bg-cp-border-light" />
      <Ecosystem />
      {/* 9. Integration form */}
      <ForPlatforms />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/signup" element={<SignupSite />} />
    </Routes>
  );
}

export default App;
