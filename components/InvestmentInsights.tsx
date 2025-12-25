import React from 'react';

const InvestmentInsights: React.FC = () => {
  return (
    <div className="bg-primary text-cream antialiased min-h-screen flex flex-col selection:bg-accent selection:text-white pt-20 font-public">
      
      {/* Background Grain Effect */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-15 mix-blend-overlay"
           style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAydGDNmBQ8Du2-oJnoLhAbTuf3C4vfquyrljfq06AN8KqBNBwEMLCW8vqZ97UBFdaWOFZwJSFJoSvgBSG662-70dWtT1shq0Ci2UXXbmCAqGsOSOAnO8GYthXDL0X6eiJM_7Tsl_wGo0xMtc1wL2CEhfyCJNdGfpU8OVbJajIye1jRXV_apVX0Rk8xQVXf57qNwFJVX6DvtwTT4UCI0QqxIh5VtrK4RHw8dZnaYS_wMxWP0rgkmfH7gAKlB_OOAZWQUKAmMtg1BkWZ')" }}>
      </div>

      <main className="relative z-10 flex-grow py-12 px-6 lg:px-12 max-w-[1280px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 animate-fade-in-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-accent text-xl">analytics</span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Market Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight tracking-tight">
              The India Advantage: <br className="hidden md:block"/>
              <span className="text-white/90">Financial Forecasts</span>
            </h1>
            <p className="mt-4 text-text-muted text-lg max-w-xl font-light">
                An in-depth analysis of predicted occupancy, currency leverage, and asset yield for luxury Indian real estate.
            </p>
          </div>
          <div className="bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-sm self-start lg:self-end">
            <div className="flex items-center">
              {['1 Year', '3 Year', '5 Year', '10 Year Forecast'].map((label, i) => (
                <label key={i} className="cursor-pointer group relative px-4 py-2 rounded-lg transition-all has-[:checked]:bg-accent has-[:checked]:shadow-lg has-[:checked]:text-primary">
                  <input className="sr-only" name="timeframe" type="radio" defaultValue={label.includes('5') ? 'on' : undefined} defaultChecked={label.includes('5')} />
                  <span className="text-xs md:text-sm font-medium text-text-muted group-hover:text-cream group-has-[:checked]:text-primary group-has-[:checked]:font-bold transition-colors relative z-10">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Top KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* KPI 1 */}
          <div className="animate-fade-in-up [animation-delay:100ms] bg-background-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border-gold hover:border-accent transition-colors duration-300 shadow-card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-accent/20 rounded-lg text-accent">
                <span className="material-symbols-outlined">real_estate_agent</span>
              </div>
              <span className="text-[#4ADE80] text-sm font-bold bg-[#4ADE80]/10 px-2 py-1 rounded border border-[#4ADE80]/20">+1.2% vs Global</span>
            </div>
            <p className="text-text-muted text-sm font-medium uppercase tracking-wide">Projected Annual Yield</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-4xl font-bold text-accent tracking-tight">8.5%</h3>
              <span className="text-xs text-cream/70">Net ROI</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-5 overflow-hidden">
              <div className="bg-accent h-full rounded-full w-[85%] group-hover:w-[88%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="animate-fade-in-up [animation-delay:200ms] bg-background-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border-gold hover:border-accent transition-colors duration-300 shadow-card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-accent/20 rounded-lg text-accent">
                <span className="material-symbols-outlined">currency_exchange</span>
              </div>
              <span className="text-[#4ADE80] text-sm font-bold bg-[#4ADE80]/10 px-2 py-1 rounded border border-[#4ADE80]/20">+22.4% vs 2020</span>
            </div>
            <p className="text-text-muted text-sm font-medium uppercase tracking-wide">USD vs INR Appreciation</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-4xl font-bold text-accent tracking-tight">+22.4%</h3>
              <span className="text-xs text-cream/70">Buying Power</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-5 overflow-hidden">
              <div className="bg-accent h-full rounded-full w-[65%] group-hover:w-[70%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="animate-fade-in-up [animation-delay:300ms] bg-background-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border-gold hover:border-accent transition-colors duration-300 shadow-card group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-accent/20 rounded-lg text-accent">
                <span className="material-symbols-outlined">bed</span>
              </div>
              <span className="text-[#4ADE80] text-sm font-bold bg-[#4ADE80]/10 px-2 py-1 rounded border border-[#4ADE80]/20">+5% YoY</span>
            </div>
            <p className="text-text-muted text-sm font-medium uppercase tracking-wide">Peak Season Occupancy</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-4xl font-bold text-accent tracking-tight">94%</h3>
              <span className="text-xs text-cream/70">Dec - Feb</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-5 overflow-hidden">
              <div className="bg-accent h-full rounded-full w-[94%] group-hover:w-[96%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Chart 1: Global Yield */}
          <div className="animate-fade-in-up [animation-delay:200ms] bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-card flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-cream mb-1">Global Yield Comparison</h4>
              <p className="text-sm text-text-muted mb-6">India vs Established Markets (Annual Avg)</p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-3xl font-bold text-accent">8.5%</span>
                <span className="text-sm font-medium text-cream mb-1">India</span>
                <span className="text-xs text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-0.5 rounded font-bold mb-1.5 ml-2 border border-[#4ADE80]/20">Leader</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative group">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-cream">India</span>
                  <span className="text-accent group-hover:scale-110 transition-transform">8.5%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent h-full rounded-full shadow-[0_0_10px_rgba(197,160,89,0.3)]" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between text-xs font-medium mb-1 text-text-muted">
                  <span>Dubai</span>
                  <span>6.8%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/30 h-full rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between text-xs font-medium mb-1 text-text-muted">
                  <span>London</span>
                  <span>4.2%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/30 h-full rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between text-xs font-medium mb-1 text-text-muted">
                  <span>New York</span>
                  <span>3.5%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/30 h-full rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5">
              <p className="text-[10px] text-text-muted uppercase tracking-wider opacity-60">Source: Global Property Guide 2024</p>
            </div>
          </div>

          {/* Chart 2: Currency Graph */}
          <div className="animate-fade-in-up [animation-delay:100ms] bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-card flex flex-col justify-between col-span-1 lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-bold text-cream mb-1">Currency Buying Power</h4>
                <p className="text-sm text-text-muted">5 Year Trend: USD / INR Appreciation</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-2xl font-bold text-accent">₹92 / $1</p>
                  <p className="text-xs text-[#4ADE80] font-medium">+12% Forecast</p>
                </div>
              </div>
            </div>
            <div className="flex-grow min-h-[220px] relative w-full">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 250">
                <defs>
                  <linearGradient id="goldGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3"></stop>
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
                <path d="M0,180 C100,170 150,190 250,140 C350,90 450,110 550,60 C650,10 750,30 800,20 L800,250 L0,250 Z" fill="url(#goldGradient)"></path>
                <path className="animate-draw" style={{strokeDasharray: 1000, strokeDashoffset: 1000}} d="M0,180 C100,170 150,190 250,140 C350,90 450,110 550,60 C650,10 750,30 800,20" fill="none" stroke="#C5A059" strokeLinecap="round" strokeWidth="3"></path>
                <circle cx="250" cy="140" fill="#0E3A2F" r="4" stroke="#C5A059" strokeWidth="2"></circle>
                <circle cx="550" cy="60" fill="#0E3A2F" r="4" stroke="#C5A059" strokeWidth="2"></circle>
                <circle cx="800" cy="20" fill="#C5A059" r="6" stroke="#fff" strokeWidth="2"></circle>
                <rect fill="#134235" height="24" rx="4" stroke="rgba(197, 160, 89, 0.5)" width="70" x="730" y="0"></rect>
                <text fill="#C5A059" fontSize="12" fontWeight="bold" textAnchor="middle" x="765" y="16">2029 Est.</text>
              </svg>
            </div>
            <div className="flex justify-between text-xs font-semibold text-text-muted mt-2 px-2 opacity-70">
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
              <span>2027</span>
              <span>2028</span>
              <span>2029</span>
            </div>
          </div>

          {/* Chart 3: Occupancy Bar Chart */}
          <div className="animate-fade-in-up [animation-delay:300ms] bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-card flex flex-col justify-between col-span-1 lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h4 className="text-lg font-bold text-cream mb-1">Projected Airbnb Occupancy Trends</h4>
                <p className="text-sm text-text-muted">Monthly Seasonality for Luxury Assets</p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent shadow-glow"></span>
                  <span className="text-xs font-medium text-text-muted">Occupancy Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white/20"></span>
                  <span className="text-xs font-medium text-text-muted">Market Avg</span>
                </div>
              </div>
            </div>
            <div className="relative h-[200px] w-full">
              <div className="flex items-end justify-between h-full gap-2 md:gap-4 px-2">
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[60%] relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background-surface border border-accent/30 text-accent text-[10px] px-2 py-1 rounded whitespace-nowrap">60% Avg</div>
                </div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[55%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[40%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[35%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[45%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[50%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[60%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[55%]"></div>
                <div className="flex-1 bg-gradient-to-t from-accent/10 to-accent/40 hover:to-accent/60 transition-colors rounded-t-sm h-[75%] border-t border-accent/30"></div>
                <div className="flex-1 bg-gradient-to-t from-accent/20 to-accent/60 hover:to-accent/80 transition-colors rounded-t-sm h-[85%] border-t border-accent/50"></div>
                <div className="flex-1 bg-gradient-to-t from-accent/30 to-accent hover:to-primary-dark transition-colors rounded-t-sm h-[94%] relative group border-t border-accent shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-100 transition-opacity bg-accent text-background-base text-[10px] px-2 py-1 rounded font-bold shadow-lg">94%</div>
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>
                <div className="flex-1 bg-gradient-to-t from-accent/20 to-accent/80 hover:to-accent transition-colors rounded-t-sm h-[90%] border-t border-accent/60"></div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,70 Q10,75 20,80 T40,85 T60,80 T80,40 T100,10" fill="none" opacity="0.4" stroke="#C5A059" strokeDasharray="2 2" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-text-muted mt-4 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span className="text-accent font-bold">Oct</span>
              <span className="text-accent font-bold">Nov</span>
              <span className="text-accent font-bold">Dec</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 bg-gradient-to-br from-background-surface to-[#0a2b22] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-white/5 group fade-in-up delay-300">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-accent/10 opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full border border-accent/20 opacity-30 group-hover:scale-105 transition-transform duration-1000 delay-75"></div>
          <div className="absolute right-10 top-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-cream mb-2">Detailed Financial Breakdown</h2>
              <p className="text-text-muted max-w-lg text-sm md:text-base font-light">
                  Download the full 24-page report including specific asset class performance, tax implications for NRIs, and long-term legacy planning structures.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-accent hover:bg-white text-background-base font-bold py-3 px-6 rounded-lg transition-all shadow-glow hover:shadow-lg flex items-center justify-center gap-2 min-w-[180px]">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Download PDF</span>
              </button>
              <button className="bg-transparent border border-accent/40 hover:bg-accent/10 hover:border-accent text-accent font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 min-w-[180px]">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Book Wealth Manager</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentInsights;