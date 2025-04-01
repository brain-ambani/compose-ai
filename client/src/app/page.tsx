import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Rocket,
  Sparkles,
  Film,
  BrainCircuit,
  ImagePlus,
  BookOpen,
  Zap,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import Image from 'next/image'; // Removed next/image
// Replaced with standard img tag

// Dummy data for testimonials
const testimonials = [
  {
    name: "Alice Smith",
    role: "Content Creator",
    quote:
      "This SaaS has revolutionized my workflow. The AI-generated titles and descriptions save me so much time!",
    avatar: "https://source.unsplash.com/random/100x100/?woman,face,1",
  },
  {
    name: "Bob Johnson",
    role: "Marketing Manager",
    quote:
      "The thumbnail generator is a game-changer. Our click-through rates have increased significantly.",
    avatar: "https://source.unsplash.com/random/100x100/?man,face,2",
  },
  {
    name: "Casey Williams",
    role: "Video Editor",
    quote:
      "The script generator helps me overcome writer's block and create engaging content faster.",
    avatar: "https://source.unsplash.com/random/100x100/?person,face,3",
  },
];

// Feature data with icons
const features = [
  {
    title: "AI-Generated Titles & Descriptions",
    description:
      "Instantly create compelling titles and descriptions that attract viewers.",
    icon: BrainCircuit,
  },
  {
    title: "Thumbnail Generator",
    description:
      "Generate eye-catching thumbnails that boost click-through rates.",
    icon: ImagePlus,
  },
  {
    title: "Script Generator",
    description: "Quickly create video scripts with AI assistance.",
    icon: BookOpen,
  },
  {
    title: "Automated Video Creation",
    description:
      "Integrate with third-party tools to automate the entire video creation process.",
    icon: Film,
  },
];

// Pricing data
const pricingPlans = [
  {
    title: "Basic",
    price: "$49/month",
    description: "Ideal for small creators",
    features: [
      "10 Videos/month",
      "AI Title & Descriptions",
      "Basic Thumbnails",
      "Email Support",
    ],
  },
  {
    title: "Pro",
    price: "$99/month",
    description: "For growing creators",
    features: [
      "50 Videos/month",
      "All Basic Features",
      "Advanced Thumbnails",
      "Script Generator",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large teams & businesses",
    features: [
      "Unlimited Videos",
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
  },
];

const perUsePricing = [
  { service: "Title/Description Generation", price: "$0.50/use" },
  { service: "Thumbnail Generation", price: "$1.00/use" },
  { service: "Script Generation", price: "$2.00/use" },
  { service: "Video Creation (via API)", price: "$5.00/video" },
];

// Workflow data
const workflowSteps = [
  {
    title: "Step 1: Idea Generation",
    description: "Use our AI tools to brainstorm viral video ideas.",
    icon: Sparkles,
  },
  {
    title: "Step 2: Scripting",
    description: "Generate a compelling script with our AI script generator.",
    icon: BookOpen,
  },
  {
    title: "Step 3: Video Creation",
    description: "Automate video creation with 3rd party integration.",
    icon: Film,
  },
  {
    title: "Step 4: Thumbnail Design",
    description:
      "Create eye-catching thumbnails with our AI thumbnail generator.",
    icon: ImagePlus,
  },
  {
    title: "Step 5: Publish & Optimize",
    description:
      "Publish your video and use our AI tools to optimize titles and descriptions.",
    icon: TrendingUp,
  },
];

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
        {/* Logo  */}
        <div className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://placehold.co/150x40/EEE/31343C?text=AI+Tube&font=Montserrat"
            alt="AI Tube Logo"
            width={150}
            height={40}
            className="mx-auto rounded-md"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 sm:mb-6">
          Revolutionize Your YouTube Workflow
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 sm:mb-12">
          The ultimate AI-powered SaaS to automate your YouTube growth. Create
          amazing content faster and easier than ever before.
        </p>

        <Button
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <Rocket className="w-5 h-5" />
          <Link href="/register">Get Started - Try for Free</Link>
        </Button>
      </header>

      {/* Features Section */}
      <section className="bg-gray-950 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={cn(
                  "bg-white/5 backdrop-blur-lg border border-white/10",
                  "shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300",
                  "hover:border-purple-500/20"
                )}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                    <CardTitle className="text-lg font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <Zap className="w-4 h-4 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="default"
                    className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Per-Use Pricing
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {perUsePricing.map((item, index) => (
                <div key={index} className="text-gray-300">
                  {item.service}:{" "}
                  <span className="text-white font-medium">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-gray-950 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Create Viral Videos in 5 Easy Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center p-6 space-y-4"
              >
                <div className="flex flex-col items-center">
                  <step.icon className="w-14 h-14 text-purple-400 mb-4" />
                  <CardTitle className="text-xl font-semibold text-white">
                    {step.title}
                  </CardTitle>
                </div>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-white">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} AI YouTube Automation SaaS. All
            rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/pricing"
              className="hover:text-purple-300 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/support"
              className="hover:text-purple-300 transition-colors"
            >
              Support
            </a>
            <a
              href="/terms"
              className="hover:text-purple-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
