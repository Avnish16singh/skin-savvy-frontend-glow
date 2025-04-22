
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Upload, BarChart3, FileText, Info, Contact } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background sticky top-0 z-10 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">SkinSavvy</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'} 
                className="flex items-center"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/upload">
              <Button 
                variant={isActive('/upload') ? 'default' : 'ghost'} 
                className="flex items-center"
              >
                <Upload className="mr-2 h-4 w-4" />
                Analyze
              </Button>
            </Link>
            <Link to="/reports">
              <Button 
                variant={isActive('/reports') ? 'default' : 'ghost'} 
                className="flex items-center"
              >
                <FileText className="mr-2 h-4 w-4" />
                Reports
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive('/about') ? 'default' : 'ghost'} 
                className="flex items-center"
              >
                <Info className="mr-2 h-4 w-4" />
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant={isActive('/contact') ? 'default' : 'ghost'} 
                className="flex items-center"
              >
                <Contact className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" className="inline-flex items-center justify-center p-2">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
