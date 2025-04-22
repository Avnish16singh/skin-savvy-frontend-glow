
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReportList from '@/components/ReportList';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { getReports } from '@/services/api';

interface Report {
  id: string;
  date: string;
  skinType: string;
  thumbnail?: string;
}

const ReportsPage: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // In a real application, uncomment this to fetch from the API
        // const response = await getReports();
        // setReports(response.data);
        
        // For demonstration purposes, we'll use dummy data
        // Remove this in a real application
        setTimeout(() => {
          setReports([
            {
              id: '1',
              date: '2025-04-18T14:22:00Z',
              skinType: 'Combination',
              thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150'
            },
            {
              id: '2',
              date: '2025-04-10T09:15:00Z',
              skinType: 'Dry',
              thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150'
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching reports:', error);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Skin Reports</h1>
          <Link to="/upload">
            <Button className="gap-2">
              <Upload className="h-4 w-4" />
              New Analysis
            </Button>
          </Link>
        </div>
        
        <ReportList reports={reports} isLoading={loading} />
      </div>
    </div>
  );
};

export default ReportsPage;
