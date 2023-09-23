import { useState, useEffect } from "react";
import {
  ImageContainer,
  ImageUploadContainer,
  ImageView,
} from "./image-upload.styles";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

const ImageUpload = ({ value, onChange, disabled }) => {
  // Check for mounted / handle hydration
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true
    setIsMounted(true);
  }, []);

  // Prevents the hydration
  if (!isMounted) return null;

  return (
    <ImageUploadContainer>
      <CldUploadButton
        onUpload={(result) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 1,
        }}
        uploadPreset='ggyi0oni'
      >
        <ImageContainer>
          <ImageView>
            <Image
              fill
              src={value || "/images/avatar-placeholder.jpg"}
              alt='Upload'
              className='rounded-lg object-cover'
            />
          </ImageView>
        </ImageContainer>
      </CldUploadButton>
    </ImageUploadContainer>
  );
};

export default ImageUpload;
