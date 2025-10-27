/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static HTML export
  images: {
    unoptimized: true, // required if you use <Image>
  },
};

export default nextConfig;
