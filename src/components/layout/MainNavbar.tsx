"use client";

import Link from 'next/link';
import { useState } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from '@/components/icons';
import { useAuth } from '@/contexts/AuthContext';

export default function MainNavbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-background-gray">
        <nav className="flex items-center justify-between p-3 sm:p-4 md:px-8 lg:px-16 py-3 sm:py-4">
          <div className="flex items-center min-w-0 flex-1">
            <LogoIcon />
            <span className="text-primary-blue text-base sm:text-lg md:text-xl font-semibold ml-2 truncate">
              <span className="hidden sm:inline">Galactic ToxAI Platform</span>
              <span className="sm:hidden">ToxAI</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700">
            <Link href="#" className="hover:text-primary-blue transition-colors text-sm xl:text-base">Home</Link>
            <Link href="#" className="hover:text-primary-blue transition-colors text-sm xl:text-base">About Us</Link>
            <Link href="#" className="hover:text-primary-blue transition-colors text-sm xl:text-base">Tutorials</Link>
            <Link href="#" className="hover:text-primary-blue transition-colors text-sm xl:text-base">License</Link>
            <Link href="#" className="hover:text-primary-blue transition-colors text-sm xl:text-base">Co(labs)</Link>
            <Link href="#" className="hover:text-primary-blue transition-colors text-sm xl:text-base">Partners</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 ml-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3 xl:gap-4">
                <span className="text-sm xl:text-base font-medium text-heading-blue truncate max-w-[150px] xl:max-w-[200px]">
                  Welcome, {user?.fullName.split(' ')[0]}
                </span>
                <button
                  onClick={logout}
                  className="px-4 xl:px-6 py-2.5 xl:py-3 bg-primary-blue text-white rounded-md hover:opacity-90 transition-opacity text-sm xl:text-base font-medium whitespace-nowrap"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/sign-in" className="px-4 xl:px-6 py-2.5 xl:py-3 bg-primary-blue text-white rounded-md hover:opacity-90 transition-opacity text-sm xl:text-base font-medium">
                  Sign In
                </Link>
                <Link href="/sign-up" className="px-4 xl:px-6 py-2.5 xl:py-3 border border-primary-blue text-primary-blue rounded-md hover:bg-black hover:text-white transition-colors text-sm xl:text-base font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Separator line */}
        <div className="w-full h-0.5 bg-primary-blue"></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background-gray border-t border-gray-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="#"
              className="text-gray-700 hover:text-primary-blue transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary-blue transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary-blue transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary-blue transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              License
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary-blue transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Co(labs)
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary-blue transition-colors py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <>
                  <div className="text-center py-2 text-sm font-medium text-heading-blue">
                    Welcome, {user?.fullName.split(' ')[0]}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-6 py-3.5 bg-primary-blue text-white rounded-md hover:opacity-90 transition-opacity text-base font-medium text-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="w-full px-6 py-3.5 bg-primary-blue text-white rounded-md hover:opacity-90 transition-opacity text-base font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="w-full px-6 py-3.5 border border-primary-blue text-primary-blue rounded-md hover:bg-black hover:text-white transition-colors text-base font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

