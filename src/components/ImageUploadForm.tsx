
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Image, X, Check, Loader2 } from 'lucide-react';
import { uploadImage } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadFormProps {
  onSuccess?: () => void;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onSuccess }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);
    
    if (!file) return;
    
    // File validation
    if (!file.type.match('image.*')) {
      setError('Please select an image file (JPEG, PNG).');
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('Image size should be less than 10MB.');
      return;
    }
    
    setSelectedImage(file);
    
    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      setError('Please select an image to upload.');
      return;
    }
    
    try {
      setIsUploading(true);
      
      const formData = new FormData();
      formData.append('image', selectedImage);
      
      if (description) {
        formData.append('description', description);
      }
      
      // Submit to backend API
      const response = await uploadImage(formData);
      
      toast({
        title: "Upload Successful",
        description: "Your image has been uploaded and is being analyzed.",
      });
      
      // Clear form
      setSelectedImage(null);
      setImagePreview(null);
      setDescription('');
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to upload image. Please try again.');
      
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "There was an error uploading your image. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="image-upload">Upload Skin Image</Label>
        
        {!imagePreview ? (
          <div 
            className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-10 w-10 text-muted-foreground" />
              <div>
                <p className="font-medium">Click to upload</p>
                <p className="text-sm text-muted-foreground">or drag and drop</p>
              </div>
              <p className="text-xs text-muted-foreground">
                PNG, JPG or JPEG (max. 10MB)
              </p>
            </div>
          </div>
        ) : (
          <div className="relative rounded-lg overflow-hidden border">
            <img 
              src={imagePreview} 
              alt="Selected skin image" 
              className="w-full h-auto max-h-[300px] object-contain"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-90"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="bg-background/80 backdrop-blur-sm p-2 absolute bottom-0 left-0 right-0">
              <p className="text-sm truncate">
                Selected: {selectedImage?.name}
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description (Optional)</Label>
        <Textarea
          id="description"
          placeholder="Describe your skin condition... (e.g., location, duration, symptoms)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[100px]"
        />
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="gap-2"
          disabled={!selectedImage || isUploading}
        >
          {isUploading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Check className="h-4 w-4" />
              {selectedImage ? 'Upload & Analyze' : 'Select an Image'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ImageUploadForm;
