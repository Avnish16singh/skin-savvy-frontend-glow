
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReport } from '@/services/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Calendar, MessageSquare, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ReportData {
  id: string;
  patientName: string;
  doctorName?: string;
  date: string;
  imageUrl: string;
  condition: string;
  severity: 'low' | 'medium' | 'high';
  diagnosis: string;
  treatment: string;
  notes?: string;
  feedbackGiven?: boolean;
}

const ReportDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        setLoading(true);
        const response = await getReport(id || '');
        setReport(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching report:', err);
        setError('Failed to load report details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchReportData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <Card className="max-w-3xl mx-auto mt-8">
        <CardHeader className="bg-destructive/10 text-destructive">
          <CardTitle>Error Loading Report</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p>{error || 'Report not found'}</p>
          <Button asChild className="mt-4">
            <Link to="/reports"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Reports</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/reports"><ArrowLeft className="mr-2 h-4 w-4" /> Back to All Reports</Link>
        </Button>
      </div>
      
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">Skin Analysis Report</CardTitle>
              <CardDescription>
                {new Date(report.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </CardDescription>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(report.severity)}`}>
              {report.severity.charAt(0).toUpperCase() + report.severity.slice(1)} Severity
            </span>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Image Analysis</h3>
              <div className="rounded-lg overflow-hidden border mb-4">
                <img 
                  src={report.imageUrl} 
                  alt="Skin Condition" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="font-medium">Identified Condition:</p>
                <p className="text-lg">{report.condition}</p>
              </div>
            </div>
            
            <div>
              <Tabs defaultValue="diagnosis">
                <TabsList className="mb-4">
                  <TabsTrigger value="diagnosis" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Diagnosis
                  </TabsTrigger>
                  <TabsTrigger value="treatment" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Treatment
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Notes
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="diagnosis" className="p-4 border rounded-md min-h-[240px]">
                  <h4 className="font-semibold mb-2">Medical Assessment</h4>
                  <p className="whitespace-pre-line">{report.diagnosis}</p>
                </TabsContent>
                
                <TabsContent value="treatment" className="p-4 border rounded-md min-h-[240px]">
                  <h4 className="font-semibold mb-2">Recommended Treatment</h4>
                  <p className="whitespace-pre-line">{report.treatment}</p>
                </TabsContent>
                
                <TabsContent value="notes" className="p-4 border rounded-md min-h-[240px]">
                  <h4 className="font-semibold mb-2">Additional Notes</h4>
                  <p className="whitespace-pre-line">{report.notes || 'No additional notes provided.'}</p>
                </TabsContent>
              </Tabs>
              
              {report.doctorName && (
                <div className="mt-4 border-t pt-4">
                  <p className="text-sm text-muted-foreground">Report prepared by:</p>
                  <p className="font-medium">{report.doctorName}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Patient: <span className="font-medium">{report.patientName}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Report ID: <span className="font-mono text-xs">{report.id}</span>
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReportDetail;
