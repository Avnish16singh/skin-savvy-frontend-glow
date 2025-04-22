
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { uploadImage } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Loader2 } from 'lucide-react';

const UploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!selectedFile) {
      toast.error('Please select an image to upload');
      return;
    }

    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await uploadImage(formData);
      
      // Store analysis result in sessionStorage to access it on the analysis page
      sessionStorage.setItem('analysisResult', JSON.stringify(response.data));
      
      toast.success('Image uploaded successfully!');
      navigate('/analysis');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="image-upload" className="block text-sm font-medium">
              Upload your skin image
            </label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
          </div>

          {previewUrl && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Preview:</p>
              <div className="border rounded-md overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={!selectedFile || loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Analyze My Skin
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UploadForm;
