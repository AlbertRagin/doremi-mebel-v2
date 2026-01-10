// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Reviews from './components/Reviews';
import CtaSection from './components/CtaSection';
import ShowroomVideo from './components/ShowroomVideo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Portfolio />
        <ShowroomVideo />
        <Process />
        <Reviews />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;