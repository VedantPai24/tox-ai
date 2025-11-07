import Link from 'next/link';
import { LogoIcon } from '@/components/icons';

export default function AuthPageNavbar() {
  return (
    <div className="sticky top-0 z-50 bg-background-gray">
      <nav className="flex items-center justify-between p-3 sm:p-4 md:px-8 lg:px-16 py-3 sm:py-4">
        <Link href="/" className="flex items-center min-w-0 flex-1">
          <LogoIcon />
          <span className="text-primary-blue text-base sm:text-lg md:text-xl font-semibold ml-2 truncate">
            <span className="hidden sm:inline">Galactic ToxAI Platform</span>
            <span className="sm:hidden">ToxAI</span>
          </span>
        </Link>
        <Link
          href="/"
          className="text-gray-700 hover:text-primary-blue transition-colors text-sm sm:text-base font-medium"
        >
          Back to Home
        </Link>
      </nav>
      <div className="w-full h-0.5 bg-primary-blue"></div>
    </div>
  );
}

