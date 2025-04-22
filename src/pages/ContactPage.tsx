
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      
      // Clear form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)} 
                      placeholder="What is this regarding?" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Your message..." 
                      rows={4} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@skinsavvy.com" className="text-primary hover:underline">
                      info@skinsavvy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Address</p>
                    <address className="not-italic text-muted-foreground">
                      123 Skin Health Street<br />
                      Suite 456<br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">How accurate is the skin analysis?</h4>
                  <p className="text-muted-foreground">Our AI provides 90-95% accuracy compared to professional dermatologist assessments.</p>
                </div>
                <div>
                  <h4 className="font-medium">Is my data secure?</h4>
                  <p className="text-muted-foreground">Yes, we use encryption and secure servers to protect your personal information.</p>
                </div>
                <div>
                  <h4 className="font-medium">Can I delete my account?</h4>
                  <p className="text-muted-foreground">Yes, you can delete your account and all associated data at any time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
