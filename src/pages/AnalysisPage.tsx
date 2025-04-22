
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultCard from '@/components/ResultCard';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

interface AnalysisResult {
  skinType: string;
  issues: Array<{
    type: string;
    probability: number;
    description: string;
  }>;
  recommendations: Array<{
    title: string;
    description: string;
  }>;
  imageUrl?: string;
}

const AnalysisPage: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from the API
    // or get it from the previous step (stored in sessionStorage)
    const storedResult = sessionStorage.getItem('analysisResult');
    
    if (storedResult) {
      try {
        setResult(JSON.parse(storedResult));
      } catch (error) {
        console.error('Error parsing analysis result:', error);
      }
    } else {
      // If no result is found, we'll use placeholder data for demonstration
      // In a real app, you might want to redirect to the upload page
      setResult({
        skinType: 'Combination',
        issues: [
          {
            type: 'Mild Acne',
            probability: 0.85,
            description: 'Few inflammatory papules and comedones detected in the T-zone area.'
          },
          {
            type: 'Dryness',
            probability: 0.65,
            description: 'Some dry patches detected on cheeks and around the mouth area.'
          }
        ],
        recommendations: [
          {
            title: 'Gentle Cleanser',
            description: 'Use a pH-balanced cleanser twice daily to remove excess oil without drying your skin.'
          },
          {
            title: 'Moisturizer',
            description: 'Apply a lightweight, non-comedogenic moisturizer to hydrate dry areas.'
          },
          {
            title: 'Exfoliation',
            description: 'Use a BHA exfoliant 2-3 times weekly to help with acne and oil control.'
          }
        ]
      });
    }
    
    setLoading(false);
  }, [navigate]);

  const handleSaveReport = () => {
    // In a real application, this would save the report to the backend
    // For now, we'll just navigate to the reports page
    navigate('/reports');
  };

  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    // For now, we'll just show an alert
    alert('Download PDF functionality would go here');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
            <div className="h-96 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-semibold mb-4">No analysis result found</h2>
        <Button onClick={() => navigate('/upload')}>Upload an Image</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Your Skin Analysis</h1>
          <p className="text-muted-foreground">
            Based on the image you uploaded, our AI has analyzed your skin condition
          </p>
        </div>
        
        {result.imageUrl && (
          <div className="rounded-lg overflow-hidden shadow-sm border">
            <img 
              src={result.imageUrl} 
              alt="Analyzed skin"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        )}
        
        <ResultCard 
          skinType={result.skinType}
          issues={result.issues}
          recommendations={result.recommendations}
        />
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button onClick={handleSaveReport} className="gap-2">
            <FileText className="h-5 w-5" />
            Save to My Reports
          </Button>
          <Button variant="outline" onClick={handleDownloadPDF} className="gap-2">
            <Download className="h-5 w-5" />
            Download as PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
