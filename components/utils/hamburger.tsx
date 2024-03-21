"use client"

import { Sling as Hamburger } from "hamburger-react"
import { useState } from "react"

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const nav = [
    {
      link: "Beranda",
      href: "beranda",
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
      link: "Model",
      href: "model",
    },
    {
      link: "Testimoni",
      href: "testimoni",
    },
    {
      link: "Kontak",
      href: "kontak",
    },
  ]

  const handleOnClick = (href: any) => {
    setOpen(false)
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className="z-50 fixed  bg-slate-400 w-full text-gray-100 p-2 flex justify-between"
      style={{ background: "rgba(0,0,0,0.7)", height: "50px" }}
    >
      <div>
        <img
          src={
            "https://utfs.io/f/ab005ddc-5c8f-4f4e-81b9-388506da8517-17k672.png"
          }
          alt="logo navbar"
          className="rounded-full"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div className="flex align-middle mr-3" style={{ alignItems: "center" }}>
        MENU
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <div className={`hamburger-sidebar ${isOpen && "open"}`}>
        <ul
          className="flex space-x-6 capitalize pr-10 flex-col justify-between  text-center"
          style={{ height: "80%" }}
        >
          {nav.map((e) => (
            <li
              key={e.link}
              className={`hover:text-orange-400 hover:underline transition-colors underline-offset-4 `}
            >
              {e?.href !== "beranda" ? (
                <a
                  href={`#${e.href}`}
                  className="z-30 "
                  onClick={(event) => {
                    event.preventDefault()
                    handleOnClick(e.href)
                  }}
                >
                  {e.link}
                </a>
              ) : (
                <a
                  href={`#`}
                  className="z-30 ml-6"
                  onClick={() => handleOnClick(e.href)}
                >
                  {e.link}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
