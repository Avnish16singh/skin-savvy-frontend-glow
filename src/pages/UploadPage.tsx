
import React from 'react';
import UploadForm from '@/components/UploadForm';

const UploadPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Upload Your Skin Photo</h1>
          <p className="text-muted-foreground">
            Take a clear, well-lit photo of your skin for the most accurate analysis
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Guidelines for best results:</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Use natural lighting when possible</li>
              <li>Avoid using filters or editing the photo</li>
              <li>Ensure the area of concern is clearly visible</li>
              <li>For facial skin, take a photo from approximately 12-18 inches away</li>
              <li>Remove makeup before taking the photo if possible</li>
            </ul>
          </div>
          
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
