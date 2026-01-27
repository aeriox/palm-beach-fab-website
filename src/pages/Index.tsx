import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Divisions } from '@/components/Divisions';
import { WhyUs } from '@/components/WhyUs';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Divisions />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
