/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dumnrb366/image/upload/v1621712847/**",
      },
    ],
  },
};

export default nextConfig;
