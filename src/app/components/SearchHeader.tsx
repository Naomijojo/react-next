"use client";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";

export default function SearchHeader() {
  
  return (
    <header className="fixed w-full h-[50px] bg-white z-50 text-gray-800 px-[10px] border-b border-gray-200">
      <div className="max-w-[1080px] w-auto mx-auto">
        <nav className="flex items-center justify-between h-[50px]">
          
          {/* 藍色hamburger */}
          <div className="flex items-center">
            <div className="flex justify-center items-center h-[50px] min-w-5 pr-[5px] cursor-pointer">
              <i className="fa-solid fa-bars fa-xl" style={{color:'#008bd0'}}></i>
            </div>
            <div className="flex justify-center items-center h-[50px] mr-[10px] ml-[5px] px-[5px] transition duration-200 ease-in-out">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot" style={{color:'#008bd0'}}></i>
                <span>台北</span>
                <i className="fa-solid fa-caret-down text-sm cursor-pointer" style={{color:'#6b7280'}}></i>
              </div>
            </div>
          </div>

          {/* 藍色logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 ">
            <Link href="/" className="relative w-[130px] h-[32px] block">
              <Image
                src="/images/icon-blue-logo.svg"
                alt="LOGO"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 130px"
                priority
                style={{ position: "absolute", inset: 0 }}
              />
            </Link>
          </div>

          {/* 登入按鈕 */}
          <div className="flex items-center gap-2 text-sm">
            <Link href="/login">
              <button className="hidden lg:flex bg-white text-base text-gray-600 rounded px-3 py-1 hover:bg-[#1c7abc] ">
                登入
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 