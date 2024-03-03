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
      className="z-50 fixed m-1 bg-slate-400 rounded-full  text-gray-100"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
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
