
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Upload, 
  FileText, 
  UserPlus, 
  LogIn, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Advanced <span className="text-primary">AI-Powered</span> Skin Analysis
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Upload a photo of your skin condition and get instant AI analysis, personalized treatment recommendations, and connect with dermatologists.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/register">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-card rounded-lg overflow-hidden shadow-xl border">
                <img 
                  src="/placeholder.svg" 
                  alt="Skin Analysis Demo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get accurate skin condition analysis in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
              <p className="text-muted-foreground">
                Take a clear photo of your skin condition and upload it securely to our platform.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg 
                  className="h-6 w-6 text-primary" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI technology analyzes your skin condition and identifies potential issues.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed analysis, condition identification, and personalized treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* User Types Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who Can Benefit</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skin Analyze is designed for both patients and healthcare professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Patients */}
            <div className="bg-card rounded-xl overflow-hidden border shadow-sm">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">For Patients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick identification of common skin conditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Track your skin condition progress over time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Get personalized treatment recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Connect with dermatologists for professional advice</span>
                  </li>
                </ul>
                
                <Button asChild className="mt-6 gap-2">
                  <Link to="/register">
                    <UserPlus className="h-4 w-4" />
                    Sign Up as Patient
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Doctors */}
            <div className="bg-card rounded-xl overflow-hidden border shadow-sm">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">For Doctors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Manage patient records and analyze skin conditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Access AI-assisted diagnosis tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Track patient progress and treatment efficacy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Schedule appointments and manage patient communications</span>
                  </li>
                </ul>
                
                <Button asChild className="mt-6 gap-2">
                  <Link to="/register">
                    <UserPlus className="h-4 w-4" />
                    Sign Up as Doctor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-primary/5 p-8 rounded-lg">
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Privacy & Security</h2>
                <p className="text-muted-foreground mb-6">
                  Your privacy is our priority. All data is encrypted and securely stored. Your skin images are only used for analysis and are never shared with third parties without your consent.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>HIPAA Compliant Storage</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Trusted by Medical Professionals</h2>
              <p className="text-muted-foreground">
                Our AI skin analysis technology has been developed in collaboration with leading dermatologists and validated through extensive clinical testing.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* These would be actual logos in a real app */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-muted h-16 rounded flex items-center justify-center">
                    <span className="text-muted-foreground">Partner {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to analyze your skin?</h2>
          <p className="text-lg mb-8">
            Create an account today and get started with your first skin analysis. It only takes a few minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/register">
                <UserPlus className="h-5 w-5" />
                Create Account
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/login">
                <LogIn className="h-5 w-5" />
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
