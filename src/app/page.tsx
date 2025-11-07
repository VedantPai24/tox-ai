"use client";

import { CheckIcon, ArrowRightIcon } from '@/components/icons';
import MainNavbar from '@/components/layout/MainNavbar';

const ImagePlaceholderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24 text-gray-400"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18.274-8.664a2.25 2.25 0 01.399-.647L12 3m0 0l-3.182 3.182a2.25 2.25 0 01-.399.647M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 6.75v11.25A2.25 2.25 0 003.75 21z"
    />
  </svg>
);

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-800 relative z-10">
      <MainNavbar />

      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          <div className="lg:w-1/2 text-center lg:text-left w-full">
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">Neque porro quisquam est qui dolorem ipsum quia</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue leading-tight mb-4 sm:mb-6">
              AI-POWERED TOXICITY <br className="hidden sm:block" /> PREDICTION
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary-blue text-white rounded-md text-base sm:text-lg font-medium hover:opacity-90 transition-opacity min-h-[48px]">
                Get Access
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-primary-blue text-primary-blue rounded-md text-base sm:text-lg font-medium flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors min-h-[48px]">
                Explore PredictTox <ArrowRightIcon />
              </button>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="lg:w-1/2 flex justify-center items-center bg-gray-200 rounded-lg p-8 sm:p-12 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] w-full">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white mb-4 flex items-center justify-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-tl-lg"></div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-tr-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Choose your Access Level Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-section-heading mb-3 sm:mb-4 px-4">
            Choose your Access Level
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8">
            {/* Academic Card */}
            <div className="bg-box-bg border border-box-border rounded-xl p-6 sm:p-8 lg:w-1/3 max-w-md mx-auto w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-heading-blue mb-4">Academic (Public)</h3>
              <p className="text-body-gray mb-6 text-left text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <ul className="space-y-3 mb-8 text-text-black text-left">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">Lorem ipusum dolor sit amet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">Lorem ipusum dolor sit amet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">Lorem ipusum dolor sit amet</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3.5 bg-button-blue text-white rounded-lg text-base sm:text-lg font-medium hover:opacity-90 transition-opacity min-h-[48px]">
                Get Academic Access
              </button>
            </div>

            {/* Private Card */}
            <div className="bg-box-bg border border-box-border rounded-xl p-6 sm:p-8 lg:w-1/3 max-w-md mx-auto w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-heading-blue mb-4">Private</h3>
              <p className="text-body-gray mb-6 text-left text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <ul className="space-y-3 mb-8 text-text-black text-left">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">Lorem ipusum dolor sit amet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">Lorem ipusum dolor sit amet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-sm sm:text-base">Lorem ipusum dolor sit amet</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3.5 bg-button-blue text-white rounded-lg text-base sm:text-lg font-medium hover:opacity-90 transition-opacity min-h-[48px]">
                Get Private Access
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

