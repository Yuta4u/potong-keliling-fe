import "@radix-ui/themes/styles.css"
import "../styles/globals.css"
import { Theme } from "@radix-ui/themes"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

const Content = dynamic(() => import("./page"))

export const metadata: Metadata = {
  title: "Potong Keliling",
  description: "Mau ganteng? hubungin aja Potong Keliling..",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-late-50 poppins"
        style={{
          height: "1200px",
        }}
      >
        <Theme>
          <Content />
        </Theme>
      </body>
    </html>
  )
}
