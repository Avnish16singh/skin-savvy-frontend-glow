
import React from 'react';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to access your Skin Analyze account and continue your skin health journey.
          </p>
          <div className="hidden md:block mt-8">
            <img 
              src="/placeholder.svg" 
              alt="Skin Health Illustration" 
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
