import React, { useRef } from "react";

const ImageUpload: React.FC = () => {
  const imageFormRef = useRef<HTMLFormElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!imageInputRef.current || !imageInputRef.current.files || imageInputRef.current.files.length === 0) {
      console.error("No file selected.");
      return;
    }

    const file = imageInputRef.current.files[0];

    try {
      // Get secure URL from server
      const response = await fetch("/s3Url");
      if (!response.ok) {
        throw new Error("Failed to fetch the secure URL.");
      }
      const { url }: { url: string } = await response.json();
      console.log(url);

      // Post the image directly to the S3 bucket
      const uploadResponse = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload the file to S3.");
      }

      const imageUrl = url.split("?")[0];
      console.log(imageUrl);

      // Optionally, post a request to your server to store any extra data here
      // Example:
      // await fetch('/saveImage', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ imageUrl }),
      // });

      // Add the uploaded image to the page
      const img = document.createElement("img");
      img.src = imageUrl;
      document.body.appendChild(img);
    } catch (error) {
      console.error("Error during image upload:", error);
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
