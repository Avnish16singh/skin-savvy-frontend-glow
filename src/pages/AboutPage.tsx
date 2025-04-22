
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">About SkinSavvy</h1>
          <p className="text-muted-foreground">
            Revolutionizing skin care with artificial intelligence
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Making skin health accessible to everyone</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              SkinSavvy was created with a simple mission: to make professional-level 
              skin analysis accessible to everyone. By leveraging the power of artificial 
              intelligence, we provide personalized skin care recommendations based on 
              your unique skin profile.
            </p>
            <p className="mt-4 leading-relaxed">
              Our technology analyzes various skin conditions including acne, dryness, 
              oiliness, sensitivity, pigmentation, and signs of aging. We then provide 
              tailored recommendations to help you achieve your healthiest skin.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Our Technology</CardTitle>
            <CardDescription>Advanced AI for accurate skin analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              SkinSavvy uses deep learning algorithms trained on thousands of skin 
              images to accurately identify various skin conditions and types. Our 
              models continue to learn and improve over time, ensuring increasingly 
              accurate results.
            </p>
            <p className="mt-4 leading-relaxed">
              The system analyzes multiple factors including skin texture, tone, 
              blemishes, pores, and more. It then categorizes your skin type and 
              provides specific recommendations tailored to your skin's needs.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Privacy & Security</CardTitle>
            <CardDescription>Your data is safe with us</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              We take your privacy seriously. All images uploaded to our platform are 
              encrypted and used solely for the purpose of analysis. We do not share 
              your personal data with third parties without your explicit consent.
            </p>
            <p className="mt-4 leading-relaxed">
              You have full control over your data. You can delete your images and 
              analysis reports at any time through your account settings.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
            <CardDescription>Experts in dermatology and artificial intelligence</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              SkinSavvy was developed by a team of dermatologists, data scientists, 
              and software engineers passionate about making skin care more accessible.
            </p>
            <p className="mt-4 leading-relaxed">
              Our dermatologists ensure that the recommendations provided by our AI 
              are medically sound, while our technical team continuously improves the 
              accuracy and capabilities of our platform.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
