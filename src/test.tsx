import React, { useRef } from 'react';

const ImageUpload: React.FC = () => {
  const imageFormRef = useRef<HTMLFormElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!imageInputRef.current || !imageInputRef.current.files || imageInputRef.current.files.length === 0) {
      console.error('No file selected.');
      return;
    }

    const file = imageInputRef.current.files[0];

    try {
      // Step 1: Get secure URL from the backend
      const response = await fetch('/s3Url');
      if (!response.ok) {
        throw new Error('Failed to fetch the secure URL.');
      }

      const { url }: { url: string } = await response.json();
      console.log('Received S3 URL:', url);

      // Step 2: Upload the image to S3 using the signed URL
      const uploadResponse = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type, // Ensure content-type matches the file type
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        const errorBody = await uploadResponse.text();
        throw new Error(`Failed to upload the file to S3: ${errorBody}`);
      }

      const imageUrl = url.split('?')[0]; // Extract the base URL without query params
      console.log('Image uploaded successfully:', imageUrl);

      // Optionally, display the image after upload
      const img = document.createElement('img');
      img.src = imageUrl;
      document.body.appendChild(img);
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  };

  return (
    <form ref={imageFormRef} onSubmit={handleSubmit} id="imageForm">
      <input ref={imageInputRef} type="file" id="imageInput" />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUpload;