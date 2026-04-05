import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WeatherConditions } from './components/WeatherConditions';
import { AdvisorySection } from './components/AdvisorySection';
import { TravelGuide } from './components/TravelGuide';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

function App() {
  return (
    <>
      <Header />
      <main className="pt-16 pb-24 md:pb-0">
        <HeroSection />
        <WeatherConditions />
        <AdvisorySection />
        <TravelGuide />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
