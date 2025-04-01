import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rocket, ImagePlus, BookOpen, Film } from "lucide-react"; // Icons for features
import NavBar from "@/components/Navbar";

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} AI YouTube Automation SaaS. All
          rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="/pricing"
            className="hover:text-purple-300 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/support"
            className="hover:text-purple-300 transition-colors"
          >
            Support
          </Link>
          <Link
            href="/terms"
            className="hover:text-purple-300 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

const Dashboard = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      {/* NavBar */}
      <NavBar />

      {/* Dashboard Header */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Title & Description */}
          <div className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4">
              <Rocket className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold">AI Title & Description</h2>
            </div>
            <p className="text-gray-300 mt-2">
              Create catchy titles and descriptions for your YouTube videos in
              seconds.
            </p>
            <Link href="/generate-title-description">
              <Button className="mt-4">Generate Now</Button>
            </Link>
          </div>

          {/* Thumbnail Generator */}
          <div className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4">
              <ImagePlus className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold">Thumbnail Generator</h2>
            </div>
            <p className="text-gray-300 mt-2">
              Design stunning thumbnails to increase your video click-through
              rates.
            </p>
            <Link href="/generate-thumbnail">
              <Button className="mt-4">Generate Now</Button>
            </Link>
          </div>

          {/* Script Generator */}
          <div className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold">Script Generator</h2>
            </div>
            <p className="text-gray-300 mt-2">
              Let our AI help you create detailed and engaging video scripts.
            </p>
            <Link href="/generate-script">
              <Button className="mt-4">Generate Now</Button>
            </Link>
          </div>

          {/* Video Creation */}
          <div className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4">
              <Film className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-semibold">
                Automated Video Creation
              </h2>
            </div>
            <p className="text-gray-300 mt-2">
              Seamlessly integrate with third-party tools to automate your video
              creation.
            </p>
            <Link href="/create-video">
              <Button className="mt-4">Create Now</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
