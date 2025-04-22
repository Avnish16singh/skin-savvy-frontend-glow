
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SkinSavvy</h3>
            <p className="text-muted-foreground">
              Advanced skin analysis using AI technology to help you understand and improve your skin health.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-muted-foreground hover:text-primary transition-colors">
                  Analyze Your Skin
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-muted-foreground hover:text-primary transition-colors">
                  Your Reports
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Questions? Reach out to us.
            </p>
            <Link to="/contact" className="text-primary hover:underline mt-2 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} SkinSavvy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
