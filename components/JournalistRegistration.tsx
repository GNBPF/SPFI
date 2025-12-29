import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface FormData {
  applicantType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mediaOutlet: string;
  designation: string;
  socialMediaHandles: string;
  platforms: string[];
  followerCount: string;
  message: string;
}

const JournalistRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    applicantType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mediaOutlet: '',
    designation: '',
    socialMediaHandles: '',
    platforms: [],
    followerCount: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        applicantType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        mediaOutlet: '',
        designation: '',
        socialMediaHandles: '',
        platforms: [],
        followerCount: '',
        message: '',
      });
    }, 3000);
  };

  // Compact Input Component
  const InputField = ({ 
    label, 
    name, 
    type = "text", 
    placeholder, 
    required = false, 
    value, 
    onChange,
    className = ""
  }: any) => (
    <div className={className}>
      <label htmlFor={name} className="block text-primary/80 font-semibold text-[10px] min-[375px]:text-xs sm:text-xs mb-1 min-[375px]:mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-2.5 min-[375px]:px-3 sm:px-3 py-2 min-[375px]:py-2.5 sm:py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white text-primary placeholder:text-gray-400 text-xs min-[375px]:text-sm sm:text-sm shadow-sm hover:border-gray-300"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="bg-white text-primary antialiased min-h-screen flex flex-col font-public overflow-x-hidden w-full pt-20 min-[375px]:pt-22 sm:pt-24 md:pt-26 lg:pt-28">
      
      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
        
        {/* Left Side - Image Panel */}
        <div className="lg:w-[45%] w-full relative bg-white p-3 min-[375px]:p-4 sm:p-4 md:p-5 lg:p-6 flex lg:hidden items-start justify-center h-[250px] min-[375px]:h-[280px] sm:h-[320px] md:h-[380px] lg:h-full lg:pt-8">
          <div className="relative w-full h-full rounded-xl min-[375px]:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/media.webp" 
              alt="Media and Influencer Registration" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Desktop Image Panel */}
        <div className="lg:w-[45%] w-full relative bg-white p-4 lg:p-6 hidden lg:flex items-start justify-center h-full pt-8">
          <div className="relative w-full h-[calc(100vh-8rem)] max-h-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/media.webp" 
              alt="Media and Influencer Registration" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side - Form Content */}
        <div className="lg:w-[55%] w-full flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-xl mx-auto px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 min-[375px]:py-5 sm:py-6 md:py-8 flex flex-col justify-center min-h-full">
            
            {/* Compact Header */}
            <div className="mb-4 min-[375px]:mb-5 sm:mb-6 flex flex-col gap-2">
              <div>
                <h1 className="text-primary text-2xl min-[375px]:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                  Media & Influencer Registration
                </h1>
                <p className="text-primary/60 text-xs min-[375px]:text-sm sm:text-sm md:text-base mt-1 min-[375px]:mt-1.5 leading-relaxed">
                  Register as a journalist or social media influencer to get exclusive access to SPFI 2026.
                </p>
              </div>
            </div>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center animate-fade-in my-auto">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl">check</span>
                </div>
                <h3 className="text-primary text-lg font-bold mb-1">Registration Complete</h3>
                <p className="text-primary/60 text-sm">
                  We'll review your application and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                
                {/* Applicant Type */}
                <div>
                  <label htmlFor="applicantType" className="block text-primary/80 font-semibold text-xs mb-1">
                    I am a <span className="text-accent">*</span>
                  </label>
                  <select
                    id="applicantType"
                    name="applicantType"
                    required
                    value={formData.applicantType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white text-primary text-sm shadow-sm hover:border-gray-300"
                  >
                    <option value="">Select type</option>
                    <option value="journalist">Journalist</option>
                    <option value="influencer">Social Media Influencer</option>
                    <option value="both">Both (Journalist & Influencer)</option>
                  </select>
                </div>

                {/* Row 1: Name */}
                <div className="grid grid-cols-2 gap-3">
                  <InputField 
                    label="First name" 
                    name="firstName" 
                    placeholder="First name" 
                    required 
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <InputField 
                    label="Last name" 
                    name="lastName" 
                    placeholder="Last name" 
                    required 
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Row 2: Contact */}
                <div className="grid grid-cols-2 gap-3">
                  <InputField 
                    label="Work email" 
                    name="email" 
                    type="email"
                    placeholder="Email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <InputField 
                    label="Work phone" 
                    name="phone" 
                    type="tel"
                    placeholder="Phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Media Outlet - Required for journalists, optional for influencers */}
                <InputField 
                  label={formData.applicantType === 'influencer' ? 'Media Outlet / Brand (Optional)' : 'Media Outlet'}
                  name="mediaOutlet" 
                  placeholder={formData.applicantType === 'influencer' ? 'e.g. Independent Creator, Brand Name' : 'e.g. BBC Sport, TechCrunch'}
                  required={formData.applicantType === 'journalist' || formData.applicantType === 'both'}
                  value={formData.mediaOutlet}
                  onChange={handleInputChange}
                />

                {/* Designation */}
                <InputField 
                  label="Designation / Role" 
                  name="designation" 
                  placeholder={formData.applicantType === 'influencer' ? 'e.g. Content Creator, Lifestyle Influencer' : 'e.g. Senior Journalist, Reporter'}
                  value={formData.designation}
                  onChange={handleInputChange}
                />

                {/* Social Media Section - More prominent for influencers */}
                {(formData.applicantType === 'influencer' || formData.applicantType === 'both') && (
                  <>
                    <div>
                      <label className="block text-primary/80 font-semibold text-xs mb-2">
                        Social Media Platforms
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Instagram', 'Twitter/X', 'YouTube', 'TikTok', 'LinkedIn', 'Facebook'].map((platform) => (
                          <label key={platform} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.platforms.includes(platform)}
                              onChange={() => handleCheckboxChange(platform)}
                              className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent/20"
                            />
                            <span className="text-xs text-primary/70">{platform}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <InputField 
                        label="Social Media Handles" 
                        name="socialMediaHandles" 
                        placeholder="@username (primary)" 
                        value={formData.socialMediaHandles}
                        onChange={handleInputChange}
                      />
                      <InputField 
                        label="Total Followers / Reach" 
                        name="followerCount" 
                        type="text"
                        placeholder="e.g. 100K, 1M+" 
                        value={formData.followerCount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                )}

                {/* Social Handle for journalists (optional) */}
                {formData.applicantType === 'journalist' && (
                  <InputField 
                    label="Social Media Handle (Optional)" 
                    name="socialMediaHandles" 
                    placeholder="@username" 
                    value={formData.socialMediaHandles}
                    onChange={handleInputChange}
                  />
                )}

                {/* Coverage Plans / Content Plans */}
                <div>
                  <label htmlFor="message" className="block text-primary/80 font-semibold text-xs mb-1">
                    {formData.applicantType === 'influencer' ? 'Content Plans' : formData.applicantType === 'both' ? 'Coverage & Content Plans' : 'Coverage Plans'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white text-primary placeholder:text-gray-400 text-sm resize-none shadow-sm hover:border-gray-300"
                    placeholder={formData.applicantType === 'influencer' ? 'Describe your content style, audience, and what you plan to cover...' : 'Brief description of your coverage plans...'}
                  />
                </div>

                {/* Submit Button - Compact */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 h-10 bg-accent text-white hover:bg-accent/90 text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Submit Application'}
                  </button>
                </div>
                
                {/* Footer Link */}
                <p className="text-xs text-gray-400 text-center pb-4">
                    Need help? <a href="#" className="text-accent hover:underline">Support</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JournalistRegistration;