import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  boothNumber: string;
  numberOfAttendees: string;
  message: string;
}

const ExhibitorRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    boothNumber: '',
    numberOfAttendees: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        boothNumber: '',
        numberOfAttendees: '',
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
        
        {/* Mobile Image Panel */}
        <div className="lg:w-[45%] w-full relative bg-white p-3 min-[375px]:p-4 sm:p-4 md:p-5 lg:p-6 flex lg:hidden items-start justify-center h-[250px] min-[375px]:h-[280px] sm:h-[320px] md:h-[380px] lg:h-full lg:pt-8">
          <div className="relative w-full h-full rounded-xl min-[375px]:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/Exhibitor.webp" 
              alt="Exhibitor Registration" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Desktop Image Panel */}
        <div className="lg:w-[45%] w-full relative bg-white p-4 lg:p-6 hidden lg:flex items-start justify-center h-full pt-8">
          <div className="relative w-full h-[calc(100vh-8rem)] max-h-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/Exhibitor.webp" 
              alt="Exhibitor Registration" 
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
                  Exhibitor Registration
                </h1>
                <p className="text-primary/60 text-xs min-[375px]:text-sm sm:text-sm md:text-base mt-1 min-[375px]:mt-1.5 leading-relaxed">
                  Register as an exhibitor to showcase your products and services at SPFI 2026.
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

                {/* Company Name */}
                <InputField 
                  label="Company name" 
                  name="company" 
                  placeholder="Your Company Name" 
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                />

                {/* Designation */}
                <InputField 
                  label="Designation" 
                  name="designation" 
                  placeholder="CEO, Director, etc." 
                  value={formData.designation}
                  onChange={handleInputChange}
                />

                {/* Row 3: Booth and Attendees */}
                <div className="grid grid-cols-2 gap-3">
                  <InputField 
                    label="Booth Number (if assigned)" 
                    name="boothNumber" 
                    placeholder="A-101" 
                    value={formData.boothNumber}
                    onChange={handleInputChange}
                  />
                  <InputField 
                    label="Number of Attendees" 
                    name="numberOfAttendees" 
                    type="number"
                    placeholder="1" 
                    value={formData.numberOfAttendees}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="message" className="block text-primary/80 font-semibold text-xs mb-1">
                    Anything else?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white text-primary placeholder:text-gray-400 text-sm resize-none shadow-sm hover:border-gray-300"
                    placeholder="Tell us more about your exhibition needs, products, and any special requirements..."
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

export default ExhibitorRegistration;
