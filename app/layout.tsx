import "@radix-ui/themes/styles.css"
import "../styles/globals.css"
import { Theme } from "@radix-ui/themes"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

const Content = dynamic(() => import("./page"))

export const metadata: Metadata = {
  title: "Mister Cukur",
  description: "Mau ganteng? mampir ke mister cukur..",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          height: "1200px",
          backgroundColor: "#000000",
        }}
      >
        <Theme>
          <Content />
        </Theme>
      </body>
    </html>
  )
}
