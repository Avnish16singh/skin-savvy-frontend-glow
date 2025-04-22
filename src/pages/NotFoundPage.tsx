
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-2 mb-6">Page Not Found</h2>
      
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link to="/">
        <Button className="gap-2">
          <Home className="h-5 w-5" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
