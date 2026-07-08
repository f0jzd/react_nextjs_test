import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

    // Use if you want to get images for example from external websites rather than locally, be careful with the protocol part
    // Remember to make sure the pages are trustworthy and dont inject maliciouis code into the projects 
    remotePatterns: [
      {
      protocol: "https",
      hostname: "images.unsplash.com",
      },
      {
      protocol: "https",
      hostname: "futuramaapi.com",
      },
      {
      protocol: "https",
      hostname: "placehold.co",
      }
  ]
  }
};

export default nextConfig;
