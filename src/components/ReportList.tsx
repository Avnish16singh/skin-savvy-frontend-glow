
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ChevronRight } from 'lucide-react';

interface Report {
  id: string;
  date: string;
  skinType: string;
  thumbnail?: string;
}

interface ReportListProps {
  reports: Report[];
  isLoading?: boolean;
}

const ReportList: React.FC<ReportListProps> = ({ reports, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="w-full">
            <CardContent className="p-6">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-md bg-slate-200 h-24 w-24"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">No Reports Yet</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            You haven't created any skin analysis reports yet.
          </p>
          <Link to="/upload">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Create Your First Report
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <Card key={report.id} className="w-full">
          <Link to={`/reports/${report.id}`}>
            <div className="p-4 flex justify-between items-center hover:bg-accent/50 transition-colors">
              <div className="flex items-center space-x-4">
                {report.thumbnail ? (
                  <img 
                    src={report.thumbnail} 
                    alt="Report thumbnail" 
                    className="h-16 w-16 rounded-md object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                <div>
                  <h3 className="font-medium">Skin Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(report.date).toLocaleDateString()}
                  </p>
                  <Badge variant="outline" className="mt-1">
                    {report.skinType}
                  </Badge>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ReportList;
