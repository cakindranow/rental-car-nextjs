/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com', 'orfarm-next-js.vercel.app', 'img.freepik.com', 'www.freepik.com' , '127.0.0.1'],
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
