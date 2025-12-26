import React, { useState, useEffect } from 'react';
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-[#2c2c2c] antialiased relative overflow-x-hidden w-full">
      {/* Apple-Style Hero with Scroll-Triggered Fade Transitions */}
      <div className="relative z-0">
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
      <section className="relative z-20 bg-cream min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group"
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
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-primary text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
                  Heritage Meets <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8f6e30] font-semibold">High Yield</span> <br/>
                  The India Story.
                </h2>
              </div>

              <div className="w-24 h-[2px] bg-accent/40"></div>

              <div className="flex flex-col gap-6 text-primary/80">
                <p className="text-lg font-medium leading-relaxed">
                  Beyond the emotional resonance of returning to your roots lies an undeniable economic truth: India is rising.
                </p>
                <p className="text-base font-light leading-relaxed text-primary/70">
                  The convergence of world-class infrastructure, regulatory transparency, and a booming digital economy has created a perfect storm for wealth creation. Own a piece of the legacy while securing a high-yield asset for generations to come.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-4 border-t border-primary/10 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-primary">7.2%</span>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">GDP Growth Forecast</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-primary">~12%</span>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Avg. Rental Yield</span>
                </div>
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-primary uppercase tracking-widest border border-primary overflow-hidden transition-all hover:text-cream"
                >
                  <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center gap-2">
                    Request Expo Invitation
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </span>
                </motion.button>
                <p className="mt-4 text-xs text-primary/50 italic font-serif">Access by Registration / Invitation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined: Why SPFI Matters & What You'll Explore Section */}
      <section className="relative min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16 border-t border-primary/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/nriBg.webp')" }}
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full py-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2c2c2c] mb-3">
              Why SPFI Matters to Investors
            </h2>
            <p className="text-[#5a5a5a] text-sm md:text-base font-light max-w-3xl mx-auto">
              India's real estate market is entering a powerful growth cycle—driven by infrastructure expansion, urban demand, rental yield growth, and policy stability. SPFI gives you direct access to this momentum.
            </p>
          </motion.div>

          {/* Combined Layout: Desktop/Tablet - Side by Side, Mobile - Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Why SPFI Matters */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 md:mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
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
                  <motion.div
                    key={benefit.title}
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
                          delay: index * 0.05,
                        },
                      },
                    }}
                    className="p-4 md:p-5 rounded-lg border border-primary/10 hover:border-accent/30 transition-colors"
                  >
                    <h4 className="text-base md:text-lg font-semibold text-primary mb-2">{benefit.title}</h4>
                    <p className="text-xs md:text-sm text-primary/70 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: What You'll Explore */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2c2c] mb-3 md:mb-4">What You'll Explore</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="space-y-3 text-sm md:text-base text-[#5a5a5a] leading-relaxed"
              >
                <div>
                  <p className="font-semibold text-[#2c2c2c] mb-1.5">Residential Investments:</p>
                  <p>Luxury homes, Smart apartments, Plotted developments, Gated communities</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2c2c2c] mb-1.5">Commercial & Income Assets:</p>
                  <p>Office spaces, Retail assets, Mixed-use developments, Co-working investments</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2c2c2c] mb-1.5">Emerging Growth Corridors:</p>
                  <p>Tier-1 cities, Tier-2 cities, Infrastructure-led future cities, Growth corridors</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2c2c2c] mb-1.5">Investment Advisory:</p>
                  <p>Market insights, Price trends, Legal frameworks, Risk mitigation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Financial Privileges Section */}
      <section className="bg-primary min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16 text-cream">
        <div className="max-w-7xl mx-auto w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-cream mb-4">
              Exclusive Financial Privileges for Investors
            </h2>
            <p className="text-cream/80 text-lg font-light max-w-3xl mx-auto">
              SPFI goes beyond showcasing projects—it enables execution. On-spot financial assistance and exclusive offers available only at the event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-accent">
                      {privilege.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cream mb-3">
                      {privilege.title}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {privilege.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined: Who Should Attend & Why Trust Us Section */}
      <section className="bg-white min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2c2c2c] mb-3">
              For Serious Investors
            </h2>
            <p className="text-[#5a5a5a] text-sm md:text-base font-light max-w-2xl mx-auto">
              Designed exclusively for global investors seeking high-growth property assets across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Who Should Attend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2c2c] mb-4 md:mb-6">Who Should Attend</h3>
              <div className="space-y-3 md:space-y-4">
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
                    className="flex items-center gap-3 p-4 rounded-lg border border-primary/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                    </div>
                    <p className="text-primary font-medium text-sm md:text-base">{audience}</p>
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
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2c2c] mb-4 md:mb-6">Why Trust Us</h3>
              <div className="space-y-4 md:space-y-5">
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
                    className="p-4 rounded-lg border border-primary/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent text-xl">
                          {feature.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-[#2c2c2c] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[#5a5a5a] text-xs md:text-sm leading-relaxed">
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
      </section>

      {/* Combined: Why Dubai. Why Now. & Event Snapshot Section */}
      <section className="bg-gradient-to-br from-primary to-[#0a2b22] min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16 text-cream">
        <div className="max-w-7xl mx-auto w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Why Dubai. Why Now. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-cream mb-3 md:mb-4">
                Why Dubai? Why Now?
              </h2>
              <p className="text-cream/90 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                Dubai is the gateway for global Indian investors—and SPFI places India's property potential right where capital lives. With currency advantages, regulatory clarity, and rising demand back home, this is the moment to position yourself ahead of the curve.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
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
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/20 mb-2 md:mb-3">
                      <span className="material-symbols-outlined text-2xl md:text-3xl text-accent">
                        {point.icon}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-cream mb-1">{point.title}</h3>
                    <p className="text-cream/80 text-xs md:text-sm">{point.description}</p>
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
              className="text-center lg:text-left"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-cream mb-4 md:mb-6">Event Snapshot</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20">
                  <span className="material-symbols-outlined text-accent text-xl md:text-2xl flex-shrink-0">location_on</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Venue</p>
                    <p className="text-cream font-medium text-sm md:text-base">DoubleTree by Hilton, Dubai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20">
                  <span className="material-symbols-outlined text-accent text-xl md:text-2xl flex-shrink-0">event</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Dates</p>
                    <p className="text-cream font-medium text-sm md:text-base">16–17 May 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20">
                  <span className="material-symbols-outlined text-accent text-xl md:text-2xl flex-shrink-0">dashboard</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Format</p>
                    <p className="text-cream font-medium text-sm md:text-base">Curated Exhibition • Investor Consultations • Finance Desks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream/20">
                  <span className="material-symbols-outlined text-accent text-xl md:text-2xl flex-shrink-0">vpn_key</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-0.5">Access</p>
                    <p className="text-cream font-medium text-sm md:text-base">By Registration / Invitation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </section>

      {/* Why Now Section (from ScreenFour) */}
      <section className="bg-white min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16 border-t border-primary/10">
        <div className="max-w-7xl mx-auto w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] mb-4">
              Why Invest Now?
            </h2>
            <p className="text-[#5a5a5a] text-lg font-light max-w-2xl mx-auto">
              Three compelling reasons why this moment is pivotal for NRI real estate investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                className="flex flex-col gap-4 p-6 border-l border-accent/30 hover:border-accent transition-colors duration-300"
              >
                <div className="size-12 rounded-full bg-cream flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-primary/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

      {/* Expo Highlights Section */}
      <section className="min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16 relative z-10 bg-[#f8f7f6]">
        <div className="max-w-7xl mx-auto w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] mb-4">
              Premium Destinations
            </h2>
            <p className="text-[#5a5a5a] text-lg font-light max-w-2xl mx-auto">
              Curated selection of India's most promising real estate markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="rounded-2xl p-8"
                style={glassStyle}
              >
                <h3 className="text-2xl font-medium text-[#2c2c2c] mb-2">
                  {highlight.city}
                </h3>
                <div className="text-[#C5A059] text-lg font-medium mb-4">
                  {highlight.roi} ROI Potential
                </div>
                <p className="text-[#5a5a5a] text-sm leading-relaxed mb-6">
                  {highlight.description}
                </p>
                <div className="pt-4 border-t border-[#e0e0e0]">
                  <p className="text-xs text-[#8a8a8a] uppercase tracking-wider mb-2">
                    Trusted Developers
                  </p>
                  <p className="text-sm text-[#5a5a5a] font-light">
                    {highlight.developers}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] mb-4">
              Trusted Partners
            </h2>
            <p className="text-[#5a5a5a] text-lg font-light">
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
        
        </section>


      {/* The Asset Class Section (from ScreenFive) */}
      <section className="bg-[#1e1a14] text-white font-display antialiased min-h-screen flex items-center pt-20 md:pt-24 px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-white tracking-tight text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mx-auto mb-4">
              The Asset Class: <span className="font-bold text-accent">Unmatched Luxury</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light">
              Explore spaces designed for high-yield returns and uncompromising living standards.
            </p>
          </motion.div>

          {/* Horizontal Scroll Gallery */}
          <div className="relative overflow-hidden -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar" id="asset-gallery-scroll">
              {[
                {
                  image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkaZ8Bsno5mETdcqoxRqIA_asHwHXewiw8TyOB9bjzWNgbfv1YnzowzjOK5jUtcQOHd9DKzcaG1z_HTCCJaENM44-RX74chYl2TOXnQD9Vgt45EWKWNsZU7R-eBXDIGF0V5xaaza8IPcbebwJMt1nwkpkVV6qEe41gDy3bZ3snQILiSr4zcriB4IDUcTiC7CzBNUC6cde4uxUfeRuIHFr1ZjHKzxq2GDj5--nDJrOkBwReOKyZ1e0rD7afGp90YnUnD_9wlaXBhCIt')",
                  label: '01 / Logic',
                  title: 'Expansive Living',
                },
                {
                  image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9evTIpkLOb30EBhO6lhF47tnVRKgwcpvVLd434h0qCvLGoa1pDMSSeLCV1yDQt6mZPPxJ8XNpgpyhTFDUlZB7NnqvZ3cJvYS-PML7S42YjB4OeoK11CWAYrRqk-mFuyqdjZViflM-lbxyXMmsMzJGsu0j2qHwpeFCe8A9HODsvFv-QazOMw3HWn365qk8kvT2TYZ0gdRVyLFSLrOoxVPVOzNkFZfIFw7z2dNQ3lnez-Jb9-e9pPlsXXLDYAZwI-8Lwibho7plWRwK')",
                  label: '02 / Logic',
                  title: 'Serene Suites',
                },
                {
                  image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqX97KGzUmbCZL7AXtOsaxVOYaPb-lH00PPSZ5mG3jpye4ixQJ6tFH1j8vDVyYKIr4YtPG173oH1-QUY_g5g4T_8FlseBdtpQzCWrOdCJpHFZIP4ntGmPchfOH-13y2soMdF8kd1NXNIzkDYjt1R3DCX_dggzZS3qW4e_VgDyU5YzI6tCQL1bfvaARI1CLbXU_4Z5GMY1KzZLZ7KjgKCWTdp84XIFueSbICCtpt5HBxPY8MYPqUwn20EzsVny9KdStY_L_upsnX6kv')",
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
                  className="relative shrink-0 snap-center w-[85vw] max-w-[700px] md:w-[600px] lg:w-[700px] aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden group border border-white/10 shadow-2xl"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: item.image }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
                    <div>
                      <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                      <h3 className="text-white text-2xl md:text-4xl font-light">{item.title}</h3>
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
                      className="hidden md:flex items-center justify-center size-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-accent hover:border-accent hover:text-primary transition-all group-hover:translate-x-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined">arrow_forward</span>
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
            className="bg-accent w-full py-10 md:py-12 px-6 md:px-20 rounded-2xl mt-12 shadow-[0_-10px_40px_rgba(197,159,89,0.15)]"
          >
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center md:items-start divide-y md:divide-y-0 md:divide-x divide-primary/20">
                <div className="flex-1 flex flex-col items-center md:items-start px-4 w-full text-center md:text-left pt-4 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">ROI Potential</span>
                  </div>
                  <p className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight">12-15%</p>
                  <p className="text-primary/90 text-lg font-medium mt-1">Projected Annual Yield</p>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start px-4 w-full text-center md:text-left pt-8 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-xl">verified_user</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Ownership</span>
                  </div>
                  <p className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight">100%</p>
                  <p className="text-primary/90 text-lg font-medium mt-1">Freehold Ownership</p>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start px-4 w-full text-center md:text-left pt-8 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-xl">handyman</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Management</span>
                  </div>
                  <p className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight">Zero</p>
                  <p className="text-primary/90 text-lg font-medium mt-1">Maintenance Hassle</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </section>
        
        {/* Footer */}
           <Footer />
    </div>
  );
};

export default Home;
