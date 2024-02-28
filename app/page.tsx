"use client"

import dynamic from "next/dynamic"

const MainNavbar = dynamic(() => import("../components/navbar"))
const HamburgerMenu = dynamic(() => import("../components/utils/hamburger"))
const Banner = dynamic(() => import("../components/banner"))
const Content = dynamic(() => import("../components/content"))
const Dialog = dynamic(() => import("../components/utils/dialog"))

import { useEffect, useState } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    // Initial check
    checkWindowSize()

    // Listen for window resize events
    window.addEventListener("resize", checkWindowSize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  }, [])
  return (
    <main>
      <Dialog />
      {isMobile ? <HamburgerMenu /> : <MainNavbar />}
      <Banner />
      <Content />
    </main>
  )
}
