
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getReport } from '@/services/api';
import ResultCard from '@/components/ResultCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';

interface ReportDetail {
  id: string;
  date: string;
  skinType: string;
  imageUrl?: string;
  issues: Array<{
    type: string;
    probability: number;
    description: string;
  }>;
  recommendations: Array<{
    title: string;
    description: string;
  }>;
}

const ReportDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [report, setReport] = useState<ReportDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportDetail = async () => {
      try {
        // In a real application, you would fetch the report data from the API
        // const response = await getReport(id || '');
        // setReport(response.data);
        
        // For demonstration purposes, we'll use dummy data
        setTimeout(() => {
          setReport({
            id: id || '1',
            date: '2025-04-18T14:22:00Z',
            skinType: 'Combination',
            imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
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
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching report detail:', error);
        setLoading(false);
      }
    };

    fetchReportDetail();
  }, [id]);

  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    alert('Download PDF functionality would go here');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-slate-200 rounded w-1/3"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
            <div className="h-96 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Report not found</h2>
        <Button onClick={() => navigate('/reports')}>Back to Reports</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/reports')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Reports
          </Button>
          <span className="text-muted-foreground">
            {new Date(report.date).toLocaleDateString()} at {new Date(report.date).toLocaleTimeString()}
          </span>
        </div>
        
        <h1 className="text-3xl font-bold">Skin Analysis Report</h1>
        
        {report.imageUrl && (
          <div className="rounded-lg overflow-hidden shadow-sm border">
            <img 
              src={report.imageUrl} 
              alt="Analyzed skin"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        )}
        
        <ResultCard 
          skinType={report.skinType}
          issues={report.issues}
          recommendations={report.recommendations}
        />
        
        <div className="flex justify-center pt-4">
          <Button variant="outline" onClick={handleDownloadPDF} className="gap-2">
            <Download className="h-5 w-5" />
            Download as PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage;
