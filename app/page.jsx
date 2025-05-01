import Hero from './components/Hero';
import FilterTabs from './components/FilterTabs';
import BurgerGrid from './components/BurgerGrid';
import Deals from './components/Deals';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <FilterTabs />
      <BurgerGrid />
      <Deals />
      <AboutUs />
      <Reviews />
    </main>
  );
}
