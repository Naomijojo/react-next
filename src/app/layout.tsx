// 根佈局
import type { Metadata } from 'next'
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { LanguageProvider } from '@/i18n/LanguageProvider';

// 原字體設置
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>        {/* 在 App Router 中，Ant Design 組件需要 Registry 包裹，防止的 SSR 問題*/}
          <LanguageProvider>  {/* 單一數據源*/}
            {children}
          </LanguageProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}