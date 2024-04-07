import React from "react";
import Navbar from "@/components/nav-bar";
import { Quicksand } from "next/font/google";

const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});
const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`${quickSand.className} h-full w-full bg-stone-900`}>
    
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
