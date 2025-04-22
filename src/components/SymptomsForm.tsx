
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { submitSymptoms } from '@/services/api';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  location: z.string().min(1, 'Please select a location'),
  duration: z.string().min(1, 'Please select a duration'),
  severity: z.string().min(1, 'Please select a severity level'),
  itchiness: z.string().min(1, 'Please select an option'),
  pain: z.string().min(1, 'Please select an option'),
  description: z.string().min(10, 'Please provide a detailed description (at least 10 characters)'),
  previousTreatment: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface SymptomsFormProps {
  onSuccess?: () => void;
}

const SymptomsForm: React.FC<SymptomsFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      duration: '',
      severity: '',
      itchiness: '',
      pain: '',
      description: '',
      previousTreatment: '',
    },
  });
  
  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Submit to backend API
      await submitSymptoms(data);
      
      toast({
        title: "Symptoms Submitted",
        description: "Your symptoms have been recorded and will be reviewed.",
      });
      
      // Reset form
      form.reset();
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting symptoms:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem submitting your symptoms. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location field */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Affected Area</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location on body" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="face">Face</SelectItem>
                    <SelectItem value="neck">Neck</SelectItem>
                    <SelectItem value="chest">Chest</SelectItem>
                    <SelectItem value="back">Back</SelectItem>
                    <SelectItem value="arms">Arms</SelectItem>
                    <SelectItem value="hands">Hands</SelectItem>
                    <SelectItem value="legs">Legs</SelectItem>
                    <SelectItem value="feet">Feet</SelectItem>
                    <SelectItem value="scalp">Scalp</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Duration field */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="How long have you had this?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="days">Days</SelectItem>
                    <SelectItem value="weeks">Weeks</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                    <SelectItem value="years">Years</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Severity field */}
          <FormField
            control={form.control}
            name="severity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Severity</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="How severe is it?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="mild">Mild</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="severe">Severe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Itchiness field */}
          <FormField
            control={form.control}
            name="itchiness"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Itchiness</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Is it itchy?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="no">Not itchy</SelectItem>
                    <SelectItem value="mild">Mildly itchy</SelectItem>
                    <SelectItem value="moderate">Moderately itchy</SelectItem>
                    <SelectItem value="severe">Severely itchy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Pain field */}
          <FormField
            control={form.control}
            name="pain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pain Level</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Is it painful?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="no">No pain</SelectItem>
                    <SelectItem value="mild">Mild pain</SelectItem>
                    <SelectItem value="moderate">Moderate pain</SelectItem>
                    <SelectItem value="severe">Severe pain</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Previous Treatment */}
          <FormField
            control={form.control}
            name="previousTreatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Previous Treatments (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Any previous treatments or medications?" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* Description field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please describe your symptoms in detail..." 
                  className="min-h-[150px]" 
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Include details like color, texture, any changes over time, and factors that make it better or worse.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Symptoms'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SymptomsForm;
