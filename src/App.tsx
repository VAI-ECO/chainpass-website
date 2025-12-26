import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Breakthrough from './components/Breakthrough';
import HowItWorksNew from './components/HowItWorksNew';
import VaiDifference from './components/VaiDifference';
import DataSelling from './components/DataSelling';
import AshleyMadison from './components/AshleyMadison';
import Ecosystem from './components/Ecosystem';
import ForPlatforms from './components/ForPlatforms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Breakthrough />
      <HowItWorksNew />
      <div className="h-px bg-cp-border-light" />
      <VaiDifference />
      <DataSelling />
      <AshleyMadison />
      <div className="h-px bg-cp-border-light" />
      <Ecosystem />
      <ForPlatforms />
      <Footer />
    </div>
  );
}

export default App;
