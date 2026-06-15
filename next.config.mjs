/** @type {import('next').NextConfig} */
const nextConfig = {

  allowedDevOrigins: ['10.0.0.57', '172.18.0.75', '172.18.0.77', '172.18.0.67', '127.0.0.1'], // 👈 THIS fixes your IP issue
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
