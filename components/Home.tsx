import React from 'react';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';
import ScreenFive from './ScreenFive';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-primary">
        
        {/* Section 1: Entrance */}
        <section className="h-screen w-full snap-start relative overflow-hidden">
          <ScreenOne />
        </section>

        {/* Section 2: Festival India */}
        <section className="h-screen w-full snap-start relative overflow-hidden">
          <ScreenTwo />
        </section>

        {/* Section 3: Experience */}
        <section className="h-screen w-full snap-start relative overflow-hidden">
          <ScreenThree />
        </section>

        {/* Section 4: Philosophy */}
        <section className="min-h-screen w-full snap-start relative bg-cream">
          <ScreenFour />
        </section>

        {/* Section 5: The Asset Class */}
        <section className="min-h-screen w-full snap-start relative bg-[#1e1a14]">
          <ScreenFive />
        </section>
        
        {/* Footer */}
        <div className="snap-start w-full relative z-30">
           <Footer />
        </div>

    </div>
  );
};

export default Home;