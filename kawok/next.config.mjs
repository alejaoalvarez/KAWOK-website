/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a folder of plain HTML/CSS/JS files. That is what Cloudflare
  // Pages serves, and it means there is no server to run, pay for or patch.
  output: "export",
  // next/image's on-the-fly resizing needs a server, so we pre-size images
  // ourselves in /public/images and turn the optimiser off.
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
