
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI-Powered <span className="text-primary">Skin Analysis</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Upload a photo of your skin and get personalized recommendations based on AI analysis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/upload">
            <Button size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Analyze Your Skin
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="gap-2">
              <Info className="h-5 w-5" />
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Upload</h3>
              <p className="text-muted-foreground">
                Take a clear photo of your skin and upload it to our secure platform.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                  <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10"></path>
                  <path d="M12 8v4l2 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analyze</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your skin's condition, identifying issues and determining your skin type.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Results</h3>
              <p className="text-muted-foreground">
                Get personalized recommendations and a detailed report about your skin health.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 px-4 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to analyze your skin?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Get started now and receive personalized recommendations for healthier skin.
        </p>
        <Link to="/upload">
          <Button size="lg" className="gap-2">
            <Upload className="h-5 w-5" />
            Start Your Skin Analysis
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
