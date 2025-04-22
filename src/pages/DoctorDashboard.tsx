
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, MessageSquare, Calendar } from 'lucide-react';
import { getPatients, getReports } from '@/services/api';
import UserCard from '@/components/UserCard';
import ReportList from '@/components/ReportList';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

interface Patient {
  id: string;
  name: string;
  email: string;
  age: number;
  lastVisit: string;
  condition?: string;
  imageUrl?: string;
}

interface AppointmentType {
  id: string;
  patientName: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

const DoctorDashboard: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const response = await getPatients();
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };
    
    // Mock data for appointments - replace with actual API call
    const fetchAppointments = () => {
      // Simulating appointments data
      const mockAppointments = [
        {
          id: '1',
          patientName: 'John Doe',
          date: new Date(2025, 3, 24, 10, 0),
          status: 'scheduled',
          notes: 'Follow-up on skin treatment'
        },
        {
          id: '2',
          patientName: 'Sarah Wilson',
          date: new Date(2025, 3, 24, 14, 30),
          status: 'scheduled',
          notes: 'Initial consultation'
        }
      ] as AppointmentType[];
      
      setAppointments(mockAppointments);
    };
    
    fetchPatients();
    fetchAppointments();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Doctor Dashboard</h1>
        <p className="text-muted-foreground">
          Manage patients, view reports, and schedule appointments
        </p>
      </div>
      
      <Tabs defaultValue="patients" className="space-y-4">
        <TabsList className="grid grid-cols-4 max-w-[600px]">
          <TabsTrigger value="patients" className="gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Patients</span>
            <span className="sm:hidden">Patients</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Reports</span>
            <span className="sm:hidden">Reports</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Calendar</span>
            <span className="sm:hidden">Calendar</span>
          </TabsTrigger>
          <TabsTrigger value="notes" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Notes</span>
            <span className="sm:hidden">Notes</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Patients Tab */}
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Patient List</CardTitle>
              <CardDescription>
                View and manage your patients
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {patients.length > 0 ? (
                    patients.map((patient) => (
                      <UserCard 
                        key={patient.id}
                        user={patient}
                        role="patient"
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-10 text-muted-foreground">
                      No patients found. New patients will appear here.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Reports</CardTitle>
              <CardDescription>
                View all patient skin analysis reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ReportList doctorView />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Calendar Tab */}
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Appointments Calendar</CardTitle>
              <CardDescription>
                View and manage patient appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border pointer-events-auto"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">
                    Appointments for {date?.toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </h3>
                  
                  <div className="space-y-3">
                    {appointments.filter(apt => 
                      date && apt.date.getDate() === date.getDate() &&
                      apt.date.getMonth() === date.getMonth() &&
                      apt.date.getFullYear() === date.getFullYear()
                    ).map(apt => (
                      <Card key={apt.id} className="overflow-hidden">
                        <div className={`h-2 ${apt.status === 'scheduled' ? 'bg-primary' : apt.status === 'cancelled' ? 'bg-destructive' : 'bg-green-500'}`}></div>
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{apt.patientName}</h4>
                            <span className="text-sm text-muted-foreground">
                              {apt.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </span>
                          </div>
                          {apt.notes && <p className="text-sm mt-1">{apt.notes}</p>}
                        </CardContent>
                      </Card>
                    ))}
                    
                    {appointments.filter(apt => 
                      date && apt.date.getDate() === date.getDate() &&
                      apt.date.getMonth() === date.getMonth() &&
                      apt.date.getFullYear() === date.getFullYear()
                    ).length === 0 && (
                      <p className="text-center py-4 text-muted-foreground">
                        No appointments scheduled for this day.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notes Tab */}
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Patient Notes</CardTitle>
              <CardDescription>
                View and manage your patient notes and communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="py-8 text-center text-muted-foreground">
                <MessageSquare className="mx-auto h-12 w-12 opacity-30 mb-2" />
                <h3 className="text-lg font-medium">No active conversations</h3>
                <p className="mt-1">Select a patient to view or add notes.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorDashboard;
