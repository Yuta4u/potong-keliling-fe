"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

const MainNav = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98
  const [scrolling, setScrolling] = useState(false)

  // handle fixed navbar dekstop
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 50
      setScrolling(scrollPosition > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // handle navbar on click
  useEffect(() => {
    const scrollLinks = document.querySelectorAll(".scroll-link")

    scrollLinks.forEach((scrollLink: any) => {
      scrollLink.addEventListener("click", scrollToSection)

      return () => {
        scrollLink.removeEventListener("click", scrollToSection)
      }
    })

    function scrollToSection(e: any) {
      e.preventDefault()
      const targetId: any = e.target.getAttribute("href").substring(1)
      const targetElement: any = document.getElementById(targetId)
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    document
      .getElementById("nav-beranda")
      ?.addEventListener("click", function (e: any) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
  }, [])

  const nav = [
    {
      link: "Beranda",
      href: null,
    },
    {
      link: "Tentang",
      href: "tentang",
    },
    {
      link: "Layanan",
      href: "layanan",
    },

    {
      link: "Testimoni",
      href: "testimoni",
    },
    {
      link: "Kontak Kami",
      href: "kontak",
    },
  ]
  return (
    <nav
      className={`flex justify-center z-20 space-x-6 px-5 items-center h-16 w-full  text-sm fixed ${
        scrolling && "backdrop-blur-sm bg-[rgba(0,0,0,0.8)] shadow-xl "
      } ${!scrolling && "text-slate-500"}
      `}
      style={{ color: "#777777" }}
    >
      <ul className="relative flex space-x-6 capitalize pr-10 flex-row">
        <li className="text-white fixed left-2" style={{ top: "1px" }}>
          <Image
            src={"/images/navbar-logo.png"}
            width={65}
            height={65}
            alt="this is logo image"
          />
        </li>
        {nav.map((e) => (
          <li
            key={e.link}
            className={`px-4 text-base py-1 bg-[#FA6709] text-[#ededed] rounded-md hover:text-slate-500 transition-colors underline-offset-4 ${
              scrolling && "bg-transparent hover:text-[#FA6709]"
            }`}
          >
            {e?.href ? (
              <Link href={`#${e.href}`} className="scroll-link z-30">
                {e.link}
              </Link>
            ) : (
              <Link href={`#`} id="nav-beranda" className="z-30">
                {e.link}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
