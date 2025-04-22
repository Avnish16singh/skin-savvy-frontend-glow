
import React from 'react';
import RegisterForm from '@/components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Join Skin Analyze</h1>
          <p className="text-muted-foreground">
            Create an account to access personalized skin analysis, track your skin health, and get professional recommendations.
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>AI-powered skin analysis</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Track skin condition progress</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Get personalized treatment recommendations</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
