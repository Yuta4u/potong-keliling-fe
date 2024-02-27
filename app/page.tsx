"use client"

import dynamic from "next/dynamic"

const MainNavbar = dynamic(() => import("../components/navbar"))
const Banner = dynamic(() => import("../components/banner"))
const Content = dynamic(() => import("../components/content"))

export default function Home() {
  return (
    <main>
      <MainNavbar />
      <Banner />
      <Content />
    </main>
  )
}
