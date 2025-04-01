"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import Link from "next/link";
import { Settings, User2Icon } from "lucide-react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("LogoutButton: handleLogout called");
    destroyCookie(null, "accessToken", { path: "/" });
    router.push("/login");
  };

  return (
    <Button onClick={handleLogout} className="hover:cursor-pointer">
      Sign Out
    </Button>
  );
};

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">AI Tube</div>
        <div className="space-x-6 flex items-center">
          <Link href="/pricing" className="hover:text-gray-400">
            Billing
          </Link>
          <Link href="/analytics" className="hover:text-gray-400">
            Analytics
          </Link>
          <Link href="/profile" className="hover:text-gray-400">
            <User2Icon />
          </Link>
          <Link href="/settings" className="hover:text-gray-400">
            <Settings />
          </Link>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
