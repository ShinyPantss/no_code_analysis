/** @type {import('next').NextConfig} */
export const images = {
  domains: ["dummyimage.com"], // Add dummyimage.com to the list of allowed domains
  remotePatterns: [
    {
      protocol: "https",
      hostname: "wxaczqrilsebdiqdcyle.supabase.co",
      port: "",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "https://dummyimage.com",
      port: "",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "images.pexels.com",
      port: "",
      pathname: "/**",
    },
  ],
};
