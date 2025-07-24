"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sanitizeInput } from "../../utils/sanitizeInput";

export default function SearchHeader() {
  const [isSearchActive, setIsSearchActive] = useState(false)
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("")
  
  const navLinks = [
    { name: "登入", href: "/login" },
    { name: "辦活動", href:"/myevents", isButton: true}
  ];

  const handleSearchClick = () => {
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue)}`)
    } else {
      router.push("/search")
    }
  };

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

          {/* search/lag/mode/user */}
          <div className="flex items-center gap-1 sm:gap-1 md:gap-2  text-sm">
            <div className="flex items-center gap-4 text-sm pl-2 "
            onMouseEnter={() => setIsSearchActive(true)}
            onMouseLeave={() => setIsSearchActive(false)}
            >
              <span className="hidden lg:flex  border-l border-gray-300 h-4 transition-all duration-300 ease-linear"></span>
              <div className="hidden lg:flex items-center gap-3">
                {isSearchActive ? (
                  <input
                  type="text"
                  placeholder="搜尋活動"
                  value={searchValue}
                  onChange={(e) => setSearchValue(sanitizeInput(e.target.value))}
                  className="px-2 py-1 rounded-2xl bg-gray-100 text-gray-800 text-sm w-[100px] transition-all duration-300"
                  />
                ):(
                  <Link href="/search" className="hover:bg-gray-100 hover:text-gray-800 transition-all duration-300"> 台北萬豪時光酒展 </Link>
                ) 
                }
              </div>
              <i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={handleSearchClick} style={{color:'#008bd0'}}></i>
              <span className="border-l border-gray-300 h-4"></span>
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <div className="hidden lg:flex items-center cursor-pointer hover:opacity-70">
                <span>語言</span>
                <i className="fa-solid fa-caret-down text-sm cursor-pointer ml-1" style={{color:'#6b7280'}}></i>
              </div>
              <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-70">
                <span>模式</span>
              </div>
            </div>

            {navLinks.map((link)=>
              link.isButton ? (
                <Link href={link.href} key={link.name}>
                  <button className="hidden lg:flex bg-[#008bd0] text-white rounded px-3 py-1 hover:bg-[#1c7abc] ">
                    {link.name}
                  </button>
                </Link>
              ): (
                <Link key={link.name} href={link.href} className="hover:opacity-70">
                  {link.name}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  )
} 