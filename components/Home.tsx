import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion, useAnimationControls } from 'framer-motion';
import Footer from './Footer';
import AppleHeroGSAP from './AppleHero';

// Developer Scroll Component with slow auto-scroll
const DeveloperScroll: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const developers = [
    'Godrej Properties',
    'Lodha Group',
    'DLF Limited',
    'Prestige Group',
    'Sobha Limited',
    'Brigade Group',
    'Raheja Developers',
    'M3M India',
    'Emaar India',
  ];

  // Duplicate for seamless loop
  const duplicatedDevelopers = [...developers, ...developers];

  // Calculate scroll distance (each item is approximately 200px wide + 48px gap)
  const itemWidth = 200;
  const gap = 48;
  const scrollDistance = -(itemWidth + gap) * developers.length;

  useEffect(() => {
    if (!prefersReducedMotion && !isPaused) {
      controls.start({
        x: [0, scrollDistance],
        transition: {
          duration: developers.length * 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, prefersReducedMotion, controls, scrollDistance, developers.length]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex items-center gap-12"
        animate={controls}
      >
        {duplicatedDevelopers.map((developer, index) => (
          <div
            key={`${developer}-${index}`}
            className="flex-shrink-0"
          >
            <div className="px-8 py-4 bg-white/50 rounded-xl backdrop-blur-sm border border-[#e0e0e0]">
              <p className="text-[#2c2c2c] font-medium text-sm whitespace-nowrap">
                {developer}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Animation tokens - Apple-level precision
const motionTokens = {
  easing: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
  duration: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.7,
  },
  distance: {
    small: 8,
    medium: 16,
    large: 20,
  },
};

// Glass effect utility
const glassStyle = {
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
};

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: motionTokens.distance.medium },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing,
    },
  },
};

const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing,
    },
  },
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-[#2c2c2c] antialiased relative overflow-x-hidden w-full">
      {/* Apple-Style Hero with Scroll-Triggered Fade Transitions */}
      <div className="relative" style={{ zIndex: 1 }}>
        <AppleHeroGSAP />
      </div>

      {/* Subtle noise grain overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Heritage Meets High Yield Section (from ScreenFour) - Starts after hero */}
      <section className="relative z-20 bg-cream min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[375px]:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left Visual Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative h-[280px] min-[375px]:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl min-[375px]:rounded-2xl overflow-hidden group"
            >
              <img src="/heritage.png" alt="Hero Image" className="w-full h-full object-cover" />
            </motion.div>

            {/* Right Content Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: motionTokens.duration.normal,
                    ease: motionTokens.easing,
                  },
                },
              }}
              className="flex flex-col gap-4 min-[375px]:gap-5 sm:gap-6 md:gap-7"
            >
              <div className="flex flex-col gap-1.5 min-[375px]:gap-2 sm:gap-2.5">
                <h2 className="text-primary text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] tracking-tight">
                  Heritage Meets <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8f6e30] font-semibold">High Yield</span> <br/>
                  The India Story.
                </h2>
              </div>

              <div className="w-12 min-[375px]:w-14 sm:w-16 md:w-20 lg:w-24 h-[2px] bg-accent/40"></div>

              <div className="flex flex-col gap-2 min-[375px]:gap-2.5 sm:gap-3 md:gap-4 text-primary/80">
                <p className="text-sm min-[375px]:text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                  Beyond the emotional resonance of returning to your roots lies an undeniable economic truth: India is rising.
                </p>
                <p className="text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light leading-relaxed text-primary/70">
                  The convergence of world-class infrastructure, regulatory transparency, and a booming digital economy has created a perfect storm for wealth creation. Own a piece of the legacy while securing a high-yield asset for generations to come.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 min-[375px]:gap-4 sm:gap-5 md:gap-6 mt-2 min-[375px]:mt-3 border-t border-primary/10 pt-3 min-[375px]:pt-4 sm:pt-5">
                <div className="flex flex-col gap-0.5 min-[375px]:gap-1">
                  <span className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">7.2%</span>
                  <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm font-semibold text-accent uppercase tracking-wider">GDP Growth Forecast</span>
                </div>
                <div className="flex flex-col gap-0.5 min-[375px]:gap-1">
                  <span className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">~12%</span>
                  <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs md:text-sm font-semibold text-accent uppercase tracking-wider">Avg. Rental Yield</span>
                </div>
              </div>

              <div className="pt-3 min-[375px]:pt-4 sm:pt-5">
                <motion.button
                  onClick={() => navigate('/registrations')}
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center px-5 min-[375px]:px-6 sm:px-8 md:px-10 py-2.5 min-[375px]:py-3 sm:py-4 text-[10px] min-[375px]:text-xs sm:text-sm md:text-base font-bold text-primary uppercase tracking-widest border border-primary overflow-hidden transition-all hover:text-cream w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center gap-1.5 min-[375px]:gap-2">
                    Request Expo Invitation
                    <span className="material-symbols-outlined text-sm min-[375px]:text-base sm:text-lg">arrow_forward</span>
                  </span>
                </motion.button>
                <p className="mt-3 min-[375px]:mt-4 text-[10px] min-[375px]:text-xs text-primary/50 italic font-serif">Access by Registration / Invitation</p>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Combined: Why SPFI Matters & What You'll Explore Section */}
      <section className="relative min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-t border-primary/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/nriBg.webp')" }}
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0 relative z-10"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 relative z-10">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 lg:mb-3 xl:mb-4"
          >
            <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-2 min-[375px]:mb-3 leading-tight">
              Why SPFI Matters to Investors
            </h2>
            <p className="text-[#3a3a3a] text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light max-w-3xl mx-auto px-2">
              India's real estate market is entering a powerful growth cycle—driven by infrastructure expansion, urban demand, rental yield growth, and policy stability. SPFI gives you direct access to this momentum.
            </p>
          </motion.div>

          {/* Combined Layout: Desktop/Tablet - Side by Side, Mobile - Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[375px]:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Why SPFI Matters */}
            <div className="flex flex-col">
              <h3 className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">Key Benefits</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="space-y-2 min-[375px]:space-y-2.5 sm:space-y-3 flex-1"
              >
                {[
                  {
                    title: 'Discover Pre-Launch Projects',
                    description: 'Access high-ROI residential and commercial projects before public launch',
                  },
                  {
                    title: 'Evaluate Investment Metrics',
                    description: 'Assess rental yield, capital appreciation & exit strategies with data-driven insights',
                  },
                  {
                    title: 'Meet Decision-Makers',
                    description: 'Connect directly with developers, not sales representatives',
                  },
                  {
                    title: 'Get Clarity & Confidence',
                    description: 'Make informed decisions with credibility and comprehensive information',
                  },
                ].map((benefit, index) => (
                  <div key={benefit.title}>
                    <h4 className="text-sm min-[375px]:text-base sm:text-lg md:text-xl font-semibold text-primary mb-1">{benefit.title}</h4>
                    <p className="text-xs min-[375px]:text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: What You'll Explore */}
            <div className="flex flex-col">
              <h3 className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">What You'll Explore</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="space-y-2 min-[375px]:space-y-2.5 sm:space-y-3 text-xs min-[375px]:text-sm sm:text-base md:text-lg text-[#3a3a3a] leading-relaxed flex-1"
              >
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Residential Investments:</p>
                  <p>Luxury homes, Smart apartments, Plotted developments, Gated communities</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Commercial & Income Assets:</p>
                  <p>Office spaces, Retail assets, Mixed-use developments, Co-working investments</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Emerging Growth Corridors:</p>
                  <p>Tier-1 cities, Tier-2 cities, Infrastructure-led future cities, Growth corridors</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Investment Advisory:</p>
                  <p>Market insights, Price trends, Legal frameworks, Risk mitigation</p>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </div>
        </section>

      {/* Exclusive Financial Privileges Section */}
      <section className="bg-primary min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-cream">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 lg:mb-3 xl:mb-4"
          >
            <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
              Exclusive Financial Privileges for Investors
            </h2>
            <p className="text-cream/80 text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light max-w-3xl mx-auto px-2 min-[375px]:px-4">
              SPFI goes beyond showcasing projects—it enables execution. On-spot financial assistance and exclusive offers available only at the event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-[375px]:gap-5 sm:gap-6 md:gap-8">
            {[
              {
                title: 'On-Spot Bank Loan Assistance',
                description: 'Leading Indian banks & financial institutions offering NRI home loans, competitive interest rates, faster approvals & dedicated processing desks',
                icon: 'account_balance',
              },
              {
                title: 'Pre-Approved & Custom Financing',
                description: 'Tailored loan structures aligned with your income geography and investment goals',
                icon: 'payments',
              },
              {
                title: 'Tax & Legal Guidance for NRIs',
                description: 'Clear understanding of repatriation rules, tax implications, compliance & documentation',
                icon: 'gavel',
              },
              {
                title: 'Exclusive Event-Only Offers',
                description: 'Preferential pricing, flexible payment plans & early-access inventory available only at SPFI',
                icon: 'local_offer',
              },
            ].map((privilege, index) => (
              <motion.div
                key={privilege.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: motionTokens.duration.normal,
                      ease: motionTokens.easing,
                      delay: index * 0.1,
                    },
                  },
                }}
                className="bg-background-surface/50 backdrop-blur-sm rounded-xl p-4 min-[375px]:p-5 sm:p-6 md:p-8 border border-accent/20"
              >
                <div className="flex items-start gap-2.5 min-[375px]:gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 min-[375px]:w-10 min-[375px]:h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg min-[375px]:text-xl sm:text-2xl text-accent">
                      {privilege.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-semibold text-cream mb-1.5 min-[375px]:mb-2 sm:mb-3">
                      {privilege.title}
                    </h3>
                    <p className="text-cream/80 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base leading-relaxed">
                      {privilege.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
        </section>

      {/* Combined: Who Should Attend & Why Trust Us Section */}
      <section className="bg-white min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 lg:mb-3 xl:mb-4"
          >
            <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-2 min-[375px]:mb-3 leading-tight">
              For Serious Investors
            </h2>
            <p className="text-[#5a5a5a] text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto px-2">
              Designed exclusively for global investors seeking high-growth property assets across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[375px]:gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Left Column: Who Should Attend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h3 className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-semibold text-[#2c2c2c] mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">Who Should Attend</h3>
              <div className="space-y-2.5 min-[375px]:space-y-3 sm:space-y-4">
                {[
                  'NRIs & Overseas Indians',
                  'Global real estate investors',
                  'Family offices & wealth managers',
                  'High-net-worth individuals',
                ].map((audience, index) => (
                  <motion.div
                    key={audience}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: motionTokens.duration.normal,
                          ease: motionTokens.easing,
                          delay: index * 0.05,
                        },
                      },
                    }}
                    className="flex items-center gap-2.5 min-[375px]:gap-3 p-3 min-[375px]:p-4 rounded-lg border border-primary/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-7 h-7 min-[375px]:w-8 min-[375px]:h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent text-base min-[375px]:text-lg">check_circle</span>
                    </div>
                    <p className="text-primary font-medium text-xs min-[375px]:text-sm sm:text-base md:text-lg">{audience}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Why Trust Us */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h3 className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-semibold text-[#2c2c2c] mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">Why Trust Us</h3>
              <div className="space-y-3 min-[375px]:space-y-4 sm:space-y-5">
                {[
                  {
                    icon: 'verified',
                    title: 'Verified Properties',
                    description: 'Rigorous due diligence. Only pre-approved, legally compliant properties.',
                  },
                  {
                    icon: 'trending_up',
                    title: 'Proven ROI Track Record',
                    description: 'Transparent financial modeling with historical data and projections.',
                  },
                  {
                    icon: 'security',
                    title: 'End-to-End Support',
                    description: 'Complete guidance from selection to documentation.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: motionTokens.duration.normal,
                          ease: motionTokens.easing,
                          delay: index * 0.1,
                        },
                      },
                    }}
                    className="p-3 min-[375px]:p-4 sm:p-5 rounded-lg border border-primary/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start gap-2.5 min-[375px]:gap-3">
                      <div className="flex-shrink-0 w-9 h-9 min-[375px]:w-10 min-[375px]:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent text-lg min-[375px]:text-xl">
                          {feature.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm min-[375px]:text-base sm:text-lg md:text-xl font-semibold text-[#2c2c2c] mb-0.5 min-[375px]:mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[#5a5a5a] text-[11px] min-[375px]:text-xs sm:text-sm md:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          </div>
        </div>
        </section>

      {/* Combined: Why Dubai. Why Now. & Event Snapshot Section */}
      <section className="bg-gradient-to-br from-primary to-[#0a2b22] min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-cream">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[375px]:gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Left Column: Why Dubai. Why Now. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              className="text-center lg:text-left"
            >
              <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
                Why Dubai? Why Now?
              </h2>
              <p className="text-cream/90 text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light leading-relaxed mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">
                Dubai is the gateway for global Indian investors—and SPFI places India's property potential right where capital lives. With currency advantages, regulatory clarity, and rising demand back home, this is the moment to position yourself ahead of the curve.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 min-[375px]:gap-4 sm:gap-5 md:gap-6">
                {[
                  {
                    icon: 'currency_exchange',
                    title: 'Currency Advantages',
                    description: 'Leverage favorable exchange rates and buying power',
                  },
                  {
                    icon: 'verified',
                    title: 'Regulatory Clarity',
                    description: 'RERA implementation brings transparency and security',
                  },
                  {
                    icon: 'trending_up',
                    title: 'Rising Demand',
                    description: 'India\'s real estate market entering powerful growth cycle',
                  },
                ].map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: motionTokens.duration.normal,
                          ease: motionTokens.easing,
                          delay: index * 0.1,
                        },
                      },
                    }}
                    className="text-center lg:text-left"
                  >
                    <div className="inline-flex items-center justify-center w-9 h-9 min-[375px]:w-10 min-[375px]:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-accent/20 mb-1.5 min-[375px]:mb-2 sm:mb-2.5 md:mb-3">
                      <span className="material-symbols-outlined text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl text-accent">
                        {point.icon}
                      </span>
                    </div>
                    <h3 className="text-xs min-[375px]:text-sm sm:text-base md:text-lg font-semibold text-cream mb-0.5 min-[375px]:mb-1" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>{point.title}</h3>
                    <p className="text-cream/80 text-[10px] min-[375px]:text-xs sm:text-sm md:text-base" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.4)' }}>{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Event Snapshot */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="w-full"
            >
              <h3 className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl font-semibold text-cream mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 text-center lg:text-left">Event Snapshot</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 min-[375px]:gap-4">
                <div className="flex items-start gap-2.5 min-[375px]:gap-3 p-3 min-[375px]:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20 text-left">
                  <span className="material-symbols-outlined text-accent text-lg min-[375px]:text-xl sm:text-2xl flex-shrink-0">location_on</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] min-[375px]:text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Venue</p>
                    <p className="text-cream font-medium text-xs min-[375px]:text-sm sm:text-base">DoubleTree by Hilton, Dubai</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 min-[375px]:gap-3 p-3 min-[375px]:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20 text-left">
                  <span className="material-symbols-outlined text-accent text-lg min-[375px]:text-xl sm:text-2xl flex-shrink-0">event</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] min-[375px]:text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Dates</p>
                    <p className="text-cream font-medium text-xs min-[375px]:text-sm sm:text-base">16–17 May 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 min-[375px]:gap-3 p-3 min-[375px]:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20 text-left">
                  <span className="material-symbols-outlined text-accent text-lg min-[375px]:text-xl sm:text-2xl flex-shrink-0">dashboard</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] min-[375px]:text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Format</p>
                    <p className="text-cream font-medium text-xs min-[375px]:text-sm sm:text-base">Curated Exhibition • Investor Consultations • Finance Desks</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 min-[375px]:gap-3 p-3 min-[375px]:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20 text-left">
                  <span className="material-symbols-outlined text-accent text-lg min-[375px]:text-xl sm:text-2xl flex-shrink-0">vpn_key</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] min-[375px]:text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Access</p>
                    <p className="text-cream font-medium text-xs min-[375px]:text-sm sm:text-base">By Registration / Invitation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Why Now Section (from ScreenFour) */}
      <section className="bg-white min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-t border-primary/10">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 lg:mb-3 xl:mb-4"
          >
            <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
              Why Invest Now?
            </h2>
            <p className="text-[#5a5a5a] text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto px-2 min-[375px]:px-4">
              Three compelling reasons why this moment is pivotal for NRI real estate investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-[375px]:gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {[
              {
                icon: 'trending_up',
                title: 'Economic Surge',
                description: 'India is poised to become the world\'s third-largest economy by 2030, driving property values in key metros.',
              },
              {
                icon: 'gavel',
                title: 'Regulatory Clarity',
                description: 'RERA implementation has brought unprecedented transparency and security to NRI investments.',
              },
              {
                icon: 'diamond',
                title: 'Lifestyle & Luxury',
                description: 'A new era of ultra-luxury developments matching global standards of living and sustainability.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: motionTokens.distance.medium },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: motionTokens.duration.normal,
                      ease: motionTokens.easing,
                      delay: index * 0.1,
                    },
                  },
                }}
                className="flex flex-col gap-2.5 min-[375px]:gap-3 sm:gap-4 p-4 min-[375px]:p-5 sm:p-6 border-l border-accent/30 hover:border-accent transition-colors duration-300"
              >
                <div className="size-9 min-[375px]:size-10 sm:size-12 rounded-full bg-cream flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg min-[375px]:text-xl sm:text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold text-primary">{feature.title}</h3>
                <p className="text-primary/70 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Expo Highlights Section */}
      <section className="min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 bg-[#f8f7f6]">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 lg:mb-3 xl:mb-4"
          >
            <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
              Premium Destinations
            </h2>
            <p className="text-[#5a5a5a] text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto px-2 min-[375px]:px-4">
              Curated selection of India's most promising real estate markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-[375px]:gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {[
              {
                city: 'Mumbai',
                roi: '12-15%',
                description: 'Financial capital with prime residential and commercial opportunities',
                developers: 'Godrej, Lodha, Raheja',
              },
              {
                city: 'Bengaluru',
                roi: '10-13%',
                description: 'Tech hub driving unprecedented growth in luxury residential sector',
                developers: 'Prestige, Sobha, Brigade',
              },
              {
                city: 'Delhi NCR',
                roi: '11-14%',
                description: 'Political and cultural center with high-end residential developments',
                developers: 'DLF, M3M, Emaar',
              },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.city}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: motionTokens.distance.medium },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: motionTokens.duration.normal,
                      ease: motionTokens.easing,
                      delay: index * 0.1,
                    },
                  },
                }}
                className="rounded-xl min-[375px]:rounded-2xl p-5 min-[375px]:p-6 sm:p-8 h-full flex flex-col"
                style={glassStyle}
              >
                <h3 className="text-xl min-[375px]:text-2xl sm:text-3xl font-medium text-[#2c2c2c] mb-1.5 min-[375px]:mb-2">
                  {highlight.city}
                </h3>
                <div className="text-[#C5A059] text-base min-[375px]:text-lg sm:text-xl font-medium mb-3 min-[375px]:mb-4">
                  {highlight.roi} ROI Potential
                </div>
                <p className="text-[#5a5a5a] text-xs min-[375px]:text-sm sm:text-base leading-relaxed mb-4 min-[375px]:mb-5 sm:mb-6 flex-grow">
                  {highlight.description}
                </p>
                <div className="pt-3 min-[375px]:pt-4 border-t border-[#e0e0e0] mt-auto">
                  <p className="text-[10px] min-[375px]:text-xs text-[#8a8a8a] uppercase tracking-wider mb-1.5 min-[375px]:mb-2">
                    Trusted Developers
                  </p>
                  <p className="text-xs min-[375px]:text-sm text-[#5a5a5a] font-light">
                    {highlight.developers}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trusted Partners Section */}
          <div className="mt-8 sm:mt-10 md:mt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 lg:mb-3 xl:mb-4"
          >
            <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
              Trusted Partners
            </h2>
            <p className="text-[#5a5a5a] text-xs min-[375px]:text-sm sm:text-base md:text-lg font-light px-2 min-[375px]:px-4">
              India's most respected real estate developers
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="rounded-2xl p-4"
              style={glassStyle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <div className="overflow-hidden">
                <DeveloperScroll />
              </div>
            </motion.div>
          </div>
          </div>
          </div>
        </div>
        </section>


      {/* The Asset Class Section (from ScreenFive) */}
      <section className="bg-[#1e1a14] text-white font-display antialiased min-h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-16">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-4 xl:mb-5"
          >
            <h2 className="text-white tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-4xl mx-auto mb-3 sm:mb-4 px-4" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 10px rgba(0, 0, 0, 0.4)' }}>
              The Asset Class: <span className="font-bold text-accent" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.7), 0 2px 10px rgba(0, 0, 0, 0.5)' }}>Unmatched Luxury</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light px-4" style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}>
              Explore spaces designed for high-yield returns and uncompromising living standards.
            </p>
          </motion.div>

          {/* Horizontal Scroll Gallery */}
          <div className="relative overflow-visible -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-16 px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 sm:pb-8 no-scrollbar scroll-smooth" id="asset-gallery-scroll" style={{ scrollPaddingLeft: '0', scrollPaddingRight: '0' }}>
              {[
                {
                  image: "/showcase/pic1.webp",
                  label: '01 / Logic',
                  title: 'Expansive Living',
                },
                {
                  image: "/showcase/pic2.webp",
                  label: '02 / Logic',
                  title: 'Serene Suites',
                },
                {
                  image: "/showcase/pic3.webp",
                  label: '03 / Logic',
                  title: 'Private Leisure',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: motionTokens.duration.normal,
                        ease: motionTokens.easing,
                        delay: index * 0.15,
                      },
                    },
                  }}
                  className="relative shrink-0 snap-center w-[80vw] sm:w-[75vw] max-w-[700px] md:w-[600px] lg:w-[700px] aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden group border border-white/10 shadow-2xl"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-10 w-full flex justify-between items-end">
                    <div className="flex-1 min-w-0 pr-2">
                      <p className="text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)' }}>{item.label}</p>
                      <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.7), 0 2px 10px rgba(0, 0, 0, 0.5)' }}>{item.title}</h3>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const gallery = document.getElementById('asset-gallery-scroll');
                        if (gallery) {
                          const cardWidth = gallery.querySelector('.shrink-0')?.clientWidth || 0;
                          const gap = 24; // gap-6 = 24px
                          gallery.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                        }
                      }}
                      className="hidden md:flex items-center justify-center size-10 md:size-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-accent hover:border-accent hover:text-primary transition-all group-hover:translate-x-2 cursor-pointer flex-shrink-0"
                      aria-label="Next property"
                    >
                      <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-accent w-full py-5 sm:py-6 md:py-8 px-4 sm:px-6 md:px-12 lg:px-20 rounded-2xl mt-6 sm:mt-8 md:mt-10 shadow-[0_-10px_40px_rgba(197,159,89,0.15)]"
          >
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-4 justify-between items-center md:items-start divide-y md:divide-y-0 md:divide-x divide-primary/20">
                <div className="flex-1 flex flex-col items-center md:items-start px-2 sm:px-4 w-full text-center md:text-left pt-3 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-lg sm:text-xl">trending_up</span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">ROI Potential</span>
                  </div>
                  <p className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">12-15%</p>
                  <p className="text-primary/90 text-sm sm:text-base md:text-lg font-medium mt-1">Projected Annual Yield</p>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start px-2 sm:px-4 w-full text-center md:text-left pt-4 sm:pt-6 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-lg sm:text-xl">verified_user</span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Ownership</span>
                  </div>
                  <p className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">100%</p>
                  <p className="text-primary/90 text-sm sm:text-base md:text-lg font-medium mt-1">Freehold Ownership</p>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start px-2 sm:px-4 w-full text-center md:text-left pt-4 sm:pt-6 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-lg sm:text-xl">handyman</span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Management</span>
                  </div>
                  <p className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Zero</p>
                  <p className="text-primary/90 text-sm sm:text-base md:text-lg font-medium mt-1">Maintenance Hassle</p>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
        </section>
        
        {/* Footer */}
           <Footer />
    </div>
  );
};

export default Home;
