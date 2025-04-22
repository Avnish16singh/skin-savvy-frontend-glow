
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Upload, MessageSquare, Plus } from 'lucide-react';
import ImageUploadForm from '@/components/ImageUploadForm';
import SymptomsForm from '@/components/SymptomsForm';
import ReportList from '@/components/ReportList';

const PatientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reports');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Patient Dashboard</h1>
        <p className="text-muted-foreground">
          Track your skin condition, submit symptoms, and view your analysis reports
        </p>
      </div>
      
      <Tabs 
        defaultValue="reports" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <TabsList className="grid grid-cols-3 max-w-md">
            <TabsTrigger value="reports" className="gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">My Reports</span>
              <span className="sm:hidden">Reports</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Upload Image</span>
              <span className="sm:hidden">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Symptoms</span>
              <span className="sm:hidden">Symptoms</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* My Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>My Analysis Reports</CardTitle>
              <CardDescription>
                View all your skin condition analysis reports and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ReportList />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Upload Image Tab */}
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Image</CardTitle>
              <CardDescription>
                Upload a clear photo of your skin to get an AI-powered analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUploadForm onSuccess={() => setActiveTab('reports')} />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Symptoms Form Tab */}
        <TabsContent value="symptoms">
          <Card>
            <CardHeader>
              <CardTitle>Submit Symptoms</CardTitle>
              <CardDescription>
                Provide details about your symptoms for a more accurate analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SymptomsForm onSuccess={() => setActiveTab('reports')} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientDashboard;
