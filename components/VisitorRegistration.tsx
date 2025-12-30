import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  purpose: string;
  message: string;
}

const VisitorRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    purpose: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    try {
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
          purpose: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert('An error occurred. Please try again.');
    }
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
    className = "",
    error
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
        className={`w-full px-2.5 min-[375px]:px-3 sm:px-3 py-2 min-[375px]:py-2.5 sm:py-2.5 border rounded-md focus:outline-none focus:ring-2 transition-all bg-white text-primary placeholder:text-gray-400 text-xs min-[375px]:text-sm sm:text-sm shadow-sm ${
          error 
            ? 'border-red-300 focus:ring-red-200 focus:border-red-400' 
            : 'border-gray-200 focus:ring-accent/20 focus:border-accent hover:border-gray-300'
        }`}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
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
              src="/visitor.jpg" 
              alt="Visitor Registration" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        {/* Desktop Image Panel */}
        <div className="lg:w-[45%] w-full relative bg-white p-4 lg:p-6 hidden lg:flex items-start justify-center h-full pt-8">
          <div className="relative w-full h-[calc(100vh-8rem)] max-h-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/visitor.jpg" 
              alt="Visitor Registration" 
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
                  Visitor Registration
                </h1>
                <p className="text-primary/60 text-xs min-[375px]:text-sm sm:text-sm md:text-base mt-1 min-[375px]:mt-1.5 leading-relaxed">
                  Register as a visitor to explore opportunities at SPFI 2026.
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
                    error={errors.firstName}
                  />
                  <InputField 
                    label="Last name" 
                    name="lastName" 
                    placeholder="Last name" 
                    required 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
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
                    error={errors.email}
                  />

                  <InputField 
                    label="Work phone" 
                    name="phone" 
                    type="tel"
                    placeholder="Phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                  />
                </div>

                {/* Company / Organization */}
                <InputField 
                  label="Company / Organization (Optional)" 
                  name="company" 
                  placeholder="Your Company Name" 
                  value={formData.company}
                  onChange={handleInputChange}
                />

                {/* Purpose of Visit */}
                <div>
                  <label htmlFor="purpose" className="block text-primary/80 font-semibold text-xs mb-1">
                    Purpose of Visit
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white text-primary text-sm shadow-sm hover:border-gray-300"
                  >
                    <option value="">Select a purpose</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="networking">Networking</option>
                    <option value="education">Education & Learning</option>
                    <option value="exploration">General Exploration</option>
                    <option value="other">Other</option>
                  </select>
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
                    placeholder="Tell us more about your visit plans, interests, and any special requirements..."
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

export default VisitorRegistration;
