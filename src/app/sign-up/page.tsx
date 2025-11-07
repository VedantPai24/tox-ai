"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedChemicalBackground from '@/components/backgrounds/AnimatedChemicalBackground';
import AuthPageNavbar from '@/components/layout/AuthPageNavbar';
import { EyeIcon, EyeOffIcon } from '@/components/icons';
import { saveUser } from '@/lib/auth-storage';

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save user to localStorage
      const newUser = saveUser({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      });

      // Success - redirect to sign-in page
      router.push('/sign-in?registered=true');
    } catch (err) {
      // Handle errors (e.g., email already exists)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatedChemicalBackground />
      <div className="min-h-screen text-gray-800 relative z-10">
        <AuthPageNavbar />

      {/* Sign Up Form Section */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-blue mb-3 sm:mb-4">
              Create Account
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Sign up to get started with Galactic ToxAI Platform
            </p>
          </div>

          {/* Sign Up Form Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-primary-blue text-white rounded-md text-base sm:text-lg font-medium hover:opacity-90 transition-opacity min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm sm:text-base text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/sign-in"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}

