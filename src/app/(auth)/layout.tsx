//auth 路由組共享layout
'use client'
import Header from "../components/Header";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
} 