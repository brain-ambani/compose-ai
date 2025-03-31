"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { Send } from "lucide-react";
import {
  Zap, // For Powerful Automation
  Users, // For Real-time Collaboration
  TrendingUp, // For Advanced Analytics
  LifeBuoy, // For 24/7 Support
  ShieldCheck, // For Secure & Reliable
  LayoutDashboard, // Intuitive Interface
} from "lucide-react";

// Reusable Glassmorphism Feature Box
const FeatureBox = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-xl backdrop-blur-md shadow-lg p-6 hover:scale-[1.02] flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-4 text-center">
        {title}
      </h4>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  buttonLink,
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-[1.02] backdrop-filter:blur(12px)">
      <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <p className="text-4xl font-bold text-white mb-6">{price}</p>
      <ul className="space-y-3 text-gray-300">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg block text-center"
      >
        {buttonText}
      </Link>
    </div>
  );
};

// Testimonial Card
const TestimonialCard = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg backdrop-filter:blur(12px)">
      <p className="text-gray-300 mb-4 italic">&quot;{quote}&quot;</p>
      <p className="text-white font-semibold">- {author}</p>
    </div>
  );
};

// Contact Form
const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Replace this with your actual form submission logic (e.g., API call)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setName("");
    setEmail("");
    setMessage("");
    alert("Form submitted! (Simulated)");
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-200">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/20 text-white border-gray-700 placeholder:text-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-200">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/20 text-white border-gray-700 placeholder:text-gray-400"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-gray-200">
            Message
          </Label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-black/20 text-white border-gray-700 placeholder:text-gray-400 w-full rounded-md"
            required
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

// Logo Component
const MaildoneLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Send className="w-6 h-6" />
      </div>
      <span className="text-xl font-bold text-white">Maildone</span>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <MaildoneLogo />
      <nav className="hidden md:flex space-x-6">
        <Link
          href="#features"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#testimonials"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Testimonials
        </Link>
        <Link
          href="#contact"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div className="flex gap-4">
        <Link href="/register">
          <Button variant="outline" className="text-black hover:bg-white/10">
            Sign Up
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            Sign In
          </Button>
        </Link>
      </div>
    </header>
  );
};

// Main Landing Page Component
const SaasLandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Blob Backgrounds */}
      <div className="blob top-left"></div>
      <div className="blob bottom-right"></div>

      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          Revolutionize Your Workflow with{" "}
          <span className="bg-gradient-to-r from-61f1fa to-928bff -webkit-background-clip: text; color: transparent;">
            Maildone
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
          The ultimate platform to streamline your email processes, boost
          productivity, and achieve your goals.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register">
            <Button
              variant="outline"
              className="text-black hover:bg-white/10 text-lg"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Sign In
            </Button>
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold text-center text-white mb-12">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureBox
            title="Intuitive Interface"
            description="Clean, modern design for seamless navigation and user experience."
            icon={LayoutDashboard}
          />
          <FeatureBox
            title="Powerful Automation"
            description="Automate repetitive tasks and free up your time for more strategic work."
            icon={Zap}
          />
          <FeatureBox
            title="Real-time Collaboration"
            description="Work together with your team in real-time, no matter where they are."
            icon={Users}
          />
          <FeatureBox
            title="Advanced Analytics"
            description="Gain deep insights into your data with our comprehensive analytics tools."
            icon={TrendingUp}
          />
          <FeatureBox
            title="24/7 Support"
            description="Our dedicated support team is here to help you whenever you need it."
            icon={LifeBuoy}
          />
          <FeatureBox
            title="Secure & Reliable"
            description="Your data is safe with us. We use industry-leading security measures."
            icon={ShieldCheck}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-gradient-to-br from-black via-purple-900 to-black container mx-auto px-4 py-16 rounded-3xl shadow-2xl mb-20"
      >
        <h3 className="text-3xl font-semibold text-center text-white mb-12">
          Pricing Plans
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            description="For small teams and startups."
            price="$9/month"
            features={[
              "10 Users",
              "100 GB Storage",
              "Basic Features",
              "Email Support",
            ]}
            buttonText="Get Started"
            buttonLink="/signup" // Use Next.js Link
          />
          <PricingCard
            title="Pro"
            description="For growing businesses."
            price="$29/month"
            features={[
              "50 Users",
              "500 GB Storage",
              "Advanced Features",
              "Priority Email Support",
            ]}
            buttonText="Get Started"
            buttonLink="/signup" // Use Next.js Link
          />
          <PricingCard
            title="Enterprise"
            description="For large organizations."
            price="Custom"
            features={[
              "Unlimited Users",
              "Unlimited Storage",
              "All Features",
              "24/7 Dedicated Support",
            ]}
            buttonText="Contact Us"
            buttonLink="/contact" // Use Next.js Link
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold text-center text-white mb-12">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="My SaaS product has completely transformed the way we work. It's intuitive, efficient, and has boosted our productivity by 30%."
            author="John Smith, CEO of TechCorp"
          />
          <TestimonialCard
            quote="The real-time collaboration features have been a game-changer for our team. We can now work seamlessly together, even when we're miles apart."
            author="Jane Doe, Project Manager at Global Innovations"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-16 bg-gradient-to-br from-black via-purple-900 to-black rounded-3xl shadow-2xl mb-20"
      >
        <h3 className="text-3xl font-semibold text-center text-white mb-12">
          Contact Us
        </h3>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Maildone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SaasLandingPage;
