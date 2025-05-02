 import Hero from './components/Hero';
 import FilterTabs from './components/FilterTabs';
 import BurgerGrid from './components/BurgerGrid';
+import WrapsGrid from './components/WrapsGrid';
+import FriesGrid from './components/FriesGrid';
+import SidesGrid from './components/SidesGrid';
+import DrinksGrid from './components/DrinksGrid';
+import DealsGrid from './components/DealsGrid';
 import AboutUs from './components/AboutUs';
 import Reviews from './components/Reviews';

 export default function Home() {
   return (
     <main>
       <Hero />
       <FilterTabs />
       <BurgerGrid />
+      <WrapsGrid />
+      <FriesGrid />
+      <SidesGrid />
+      <DrinksGrid />
+      <DealsGrid />
       <AboutUs />
       <Reviews />
     </main>
   );
 }
