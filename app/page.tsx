"use client"

import dynamic from "next/dynamic"

const MainNavbar = dynamic(() => import("../components/navbar"))
const HamburgerMenu = dynamic(() => import("../components/utils/hamburger"))
const Banner = dynamic(() => import("../components/utils/banner"))
const Content = dynamic(() => import("../components/content"))
const Dialog = dynamic(() => import("../components/utils/dialog"))

import { useEffect, useState } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    // Initial check
    checkWindowSize()
    window.addEventListener("resize", checkWindowSize)
    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  }, [])
  return (
    <main>
      {/* <Dialog isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {isMobile ? <HamburgerMenu /> : <MainNavbar />}
      <Banner />
      <Content />
    </main>
  )
}
