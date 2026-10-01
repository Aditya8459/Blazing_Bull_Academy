import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Legal from './components/Legal';
import Registration from './components/Registration';
import { About, Modules, Courses, Curriculum, Mentors, Why, Pricing, FAQ, Location, Contact, CTA } from './components/Sections';

export default function App() {
  const [h, setH] = useState(location.hash);
  useEffect(() => { const f = () => { setH(location.hash); scrollTo(0, 0); }; addEventListener('hashchange', f); return () => removeEventListener('hashchange', f); }, []);
  const legal = h.replace('#/', '');
  return (<>
    <Navbar />
    {['privacy', 'terms', 'risk'].includes(legal) ? <Legal page={legal} /> : (<main>
      <Hero /><About /><Modules /><Courses /><Curriculum /><Mentors /><Why /><Pricing /><Registration /><FAQ /><Location /><Contact /><CTA /></main>)}
    <Footer />
  </>);
}
