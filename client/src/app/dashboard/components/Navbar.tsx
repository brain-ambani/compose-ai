"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Settings, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
export const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <span className="text-xl font-semibold text-gray-800">
            AI Email Assistant
          </span>
        </div>
        {/* */}
        <div className="hidden lg:flex items-center gap-6">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
          <Button>Sign Out</Button>
        </div>
        <div className="lg:hidden">
          <Button variant="ghost" onClick={onMenuClick}>
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4 space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-xl font-semibold text-gray-800">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="lg:hidden"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <Button variant="ghost" className="w-full justify-start">
              Features
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Pricing
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contact
            </Button>
            <Button className="w-full">Sign Out</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
