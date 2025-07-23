"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from 'clsx'
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { sanitizeInput } from "../../utils/sanitizeInput";



export default function Header() {
  // const pathname = usePathname()
  const [isSearchActive, setIsSearchActive] = useState(false)
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("")
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <header className="fixed w-full h-[50px] bg-[#008bd0] z-50 text-white px-[10px]">
      <div className="max-w-[1080px] w-auto mx-auto">
        <nav className="flex items-center justify-between h-[50px]">
          
          {/* Hamburger */}
          <div className="flex items-center">
            <div className="flex justify-center items-center h-[50px] min-w-5 pr-[5px] cursor-pointer">
              <i className="fa-solid fa-bars fa-xl" style={{color:'#fff'}}></i>
            </div>
            <div className="flex justify-center items-center h-[50px] mr-[10px] ml-[5px] px-[5px] transition duration-200 ease-in-out">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i>
                <span>台北</span>
                <i className="fa-solid fa-caret-down text-sm cursor-pointer" style={{color:'#e5e7eb'}}></i>
              </div>
            </div>
          </div>

          {/* LOGO*/}
          <div className="absolute left-1/2 transform -translate-x-1/2 ">
            <Link href="/" className="relative w-[130px] h-[32px] block">
              <Image
                src="/images/icon-logo.svg"
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
              <span className="hidden lg:flex  border-l border-white h-4 transition-all duration-300 ease-linear"></span>
              <div className="hidden lg:flex items-center gap-3">
                {isSearchActive ? (
                  <input
                  type="text"
                  placeholder="搜尋活動"
                  value={searchValue}
                  onChange={(e) => setSearchValue(sanitizeInput(e.target.value))}
                  className="px-2 py-1 rounded-2xl bg-white text-[#0088d3] text-sm w-[100px] transition-all duration-300"
                  />
                ):(
                  <Link href="/search" className="hover:bg-[#1c7abc] hover:text-white transition-all duration-300"> 台北萬豪時光酒展 </Link>
                ) 

                }
              </div>
              <i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={handleSearchClick}></i>
              <span className="border-l border-white h-4"></span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <div className="hidden lg:flex items-center cursor-pointer hover:opacity-70">
                <span>語言</span>
                <i className="fa-solid fa-caret-down text-sm cursor-pointer ml-1" style={{color:'#e5e7eb'}}></i>
              </div>
              <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-70">
                <span>模式</span>
              </div>
            </div>

            {navLinks.map((link)=>
              link.isButton ? (
                <Link href={link.href} key={link.name}>
                  <button className="hidden lg:flex bg-[#2ab3fc] text-white rounded px-3 py-1 hover:bg-[#1c7abc] ">
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
