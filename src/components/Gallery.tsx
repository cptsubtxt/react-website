import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = "www.cptcapture.de"; // Your WordPress base URL
  const apiKey = "JjzM vMdy uwAO oglT mU2c kx0w"; // Replace with your actual API key
  const username = "cptcapture@gmail.com"; // Replace with your WordPress username

  useEffect(() => {
    const fetchGallery = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(
          `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=123`,
          {
            // Example category ID: 123
            headers: {
              Authorization: `Basic ${btoa(`${username}:${apiKey}`)}`, // Basic Authentication
            },
          }
        );

        const posts = response.data;
        const images: GalleryImage[] = [];

        posts.forEach((post: any) => {
          // Type 'any' here as structure might vary
          if (post._embedded && post._embedded["wp:featuredmedia"]) {
            post._embedded["wp:featuredmedia"].forEach((image: any) => {
              // Type 'any' here as structure might vary
              images.push({ src: image.source_url, alt: image.alt_text || "" }); // Provide a default alt text
            });
          }
        });

        setGalleryImages(images);
      } catch (err: any) {
        // Type 'any' here as structure might vary
        console.error("Error fetching gallery:", err);
        setError(err.message || "An error occurred."); // Set error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Carousel>
      {galleryImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Gallery;
