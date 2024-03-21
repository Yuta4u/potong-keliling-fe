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
        <link
          rel="shortcut icon"
          href="https://utfs.io/f/a195d04d-3648-4a88-8c14-a40ab1b6913a-hru0oc.ico"
        />
        <meta
          name="description"
          content="Selamat datang di Potong Keliling, Jasa potong rambut datang ke tempat nomer 1 di Indonesia. Gak perlu ribet, tinggal telfon kami, kami akan datang."
        />
        <meta
          name="keywords"
          content=" potong rambut, salon potong rambut, gaya rambut, gaya rambut pria, gaya rambut wanita, potong rambut pendek, potong rambut panjang, potong rambut layer, potong rambut undercut, potong rambut bob, potong rambut pixie, potong rambut shaggy, potong rambut ombre, potong rambut balayage, potong rambut warna, potong rambut highlight, potong rambut bayi, potong rambut anak-anak, potong rambut remaja, potong rambut dewasa, potong rambut modern, potong rambut klasik, potong rambut vintage, potong rambut retro, potong rambut trendy, potong rambut fashion, potong rambut celeb, potong rambut red carpet, potong rambut formal, potong rambut casual, potong rambut profesional, potong rambut pernikahan, potong rambut prom, potong rambut acara khusus, potong rambut kerja, potong rambut kantor, potong rambut sekolah, potong rambut kampus, potong rambut haji, potong rambut umrah, potong rambut pria dewasa, potong rambut wanita dewasa, potong rambut anak, potong rambut bayi baru lahir, potong rambut balita, potong rambut toddler, potong rambut anak sekolah, potong rambut anak remaja, potong rambut anak muda, potong rambut lansia, potong rambut orang tua, potong rambut model, potong rambut artis, potong rambut musisi, potong rambut selebriti, potong rambut influencer, potong rambut bintang sosial, potong rambut fotografi, potong rambut video, potong rambut streaming, potong rambut tutorial, potong rambut langkah demi langkah, potong rambut panduan, potong rambut teknik, potong rambut alat, potong rambut pisau, potong rambut gunting, potong rambut sisir, potong rambut gunting rambut, potong rambut clippers, potong rambut trimmer, potong rambut stiker, potong rambut tata rambut, potong rambut catok, potong rambut keriting, potong rambut lurus, potong rambut gelombang, potong rambut curly, potong rambut wavy, potong rambut afro, potong rambut dreadlocks, potong rambut rasta, potong rambut cornrows, potong rambut updo, potong rambut half-up half-down, potong rambut ponytail, potong rambut braids, potong rambut twist, potong rambut fishtail, potong rambut french braid, potong rambut waterfall braid, potong rambut rope braid, potong rambut crown braid, potong rambut halo braid, potong rambut Dutch braid, potong rambut box braid, potong rambut micro braid, potong rambut cornrow braid, potong rambut braid bun, potong rambut bun, potong rambut chignon, potong rambut top knot, potong rambut messy bun, potong rambut sleek bun, potong rambut ballerina bun, potong rambut bun updo, potong rambut bun with braid, potong rambut bun with flowers, potong rambut bun with accessories, potong rambut bun with scarf, potong rambut bun with ribbon, potong rambut bun with twist, potong rambut bun with curls, potong rambut bun with bangs, potong rambut bun with layers, potong rambut bun with highlights, potong rambut bun with lowlights, potong rambut bun with volume, potong rambut bun with texture, potong rambut bun with waves, potong rambut bun with straight hair, potong rambut bun with curly hair, potong rambut bun with long hair, potong rambut bun with short hair, potong rambut bun with medium hair, potong rambut bun with thick hair, potong rambut bun with thin hair, potong rambut bun with fine hair, potong rambut bun with natural hair, potong rambut bun with dyed hair, potong rambut bun with dark hair, potong rambut bun with light hair, potong rambut bun with blonde hair, potong rambut bun with brown hair, potong rambut bun with black hair, potong rambut bun with red hair, potong rambut bun with auburn hair, potong rambut bun with chestnut hair, potong rambut bun with caramel hair, potong rambut bun with burgundy hair, potong rambut bun with platinum hair, potong rambut bun with silver hair, potong rambut bun with gray hair, potong rambut bun with ash hair, potong rambut bun with copper hair, potong rambut bun with mahogany hair, potong rambut bun with olive hair, potong rambut bun with honey hair, potong rambut bun with walnut hair, potong rambut bun with chocolate hair, potong rambut bun with espresso hair, potong rambut bun with jet black hair, potong rambut bun with sandy hair, potong rambut bun with beach blonde hair, potong rambut bun with sun-kissed hair, potong rambut bun with highlighted hair, potong rambut bun with layered hair, potong rambut bun with textured hair, potong rambut bun with curly hair, potong rambut bun with straight hair, potong rambut bun with wavy hair, potong rambut bun with thick hair, potong rambut bun with thin hair, potong rambut bun with fine hair, potong rambut bun with natural hair, potong rambut bun with dyed hair, potong rambut bun with short hair, potong rambut bun with long hair, potong rambut bun with medium hair, Cukur rambut pria, Cukur rambut wanita, Salon cukur rambut, Teknik cukur rambut, Model rambut pria, Model rambut wanita, Gaya rambut pendek, Gaya rambut panjang, Gaya rambut undercut, Gaya rambut fade, Gaya rambut pompadour, Gaya rambut bob, Gunting rambut pria, Gunting rambut wanita, Potong rambut pendek, Potong rambut panjang, Potong rambut layer, Potong rambut ala Korea, Potong rambut ala Jepang, Potong rambut ala Barat, Cukur rambut model, Cukur rambut artis, Cukur rambut anak, Cukur rambut bayi, Cukur rambut modern, Cukur rambut tradisional, Cukur rambut profesional, Cukur rambut cepat, Cukur rambut murah, Cukur rambut eksklusif, Cukur rambut premium, Cukur rambut di rumah, Cukur rambut di salon, Cukur rambut di barbershop, Cukur rambut dengan mesin, Cukur rambut dengan gunting, Cukur rambut dengan pisau, Cukur rambut dengan silet, Cukur rambut dengan trimmer, Cukur rambut dengan foil shaver, Cukur rambut dengan rotary shaver, Cukur rambut dengan straight razor, Cukur rambut dengan electric shaver, Cukur rambut dengan safety razor, Cukur rambut dengan open razor, Cukur rambut dengan cartridge razor, Cukur rambut dengan disposable razor, Cukur rambut dengan double edge razor, Cukur rambut dengan single edge razor, Cukur rambut dengan sliding razor, Cukur rambut dengan shavette, Cukur rambut dengan hair clipper, Cukur rambut dengan beard trimmer, Cukur rambut dengan hair trimmer, Cukur rambut dengan body groomer, Cukur rambut dengan detail trimmer, Cukur rambut dengan nose trimmer, Cukur rambut dengan ear trimmer, Cukur rambut dengan eyebrow trimmer, Cukur rambut dengan precision trimmer, Cukur rambut dengan vacuum trimmer, Cukur rambut dengan cordless trimmer, Cukur rambut dengan corded trimmer, Cukur rambut dengan waterproof trimmer, Cukur rambut dengan rechargeable trimmer, Cukur rambut dengan professional clipper, Cukur rambut dengan salon clipper, Cukur rambut dengan barber clipper, Cukur rambut dengan home clipper, Cukur rambut dengan beginner clipper, Cukur rambut dengan advanced clipper, Cukur rambut dengan corded clipper, Cukur rambut dengan cordless clipper, Cukur rambut dengan taper lever, Cukur rambut dengan adjustable clipper, Cukur rambut dengan carbon steel blade, Cukur rambut dengan stainless steel blade, Cukur rambut dengan ceramic blade, Cukur rambut dengan titanium blade, Cukur rambut dengan detachable blade, Cukur rambut dengan fixed blade, Cukur rambut dengan rotating blade, Cukur rambut dengan sliding blade, Cukur rambut dengan oscillating blade, Cukur rambut dengan swivel blade, Cukur rambut dengan dual blade, Cukur rambut dengan triple blade, Cukur rambut dengan floating blade, Cukur rambut dengan self-sharpening blade, Cukur rambut dengan hypoallergenic blade, Cukur rambut dengan long-lasting blade, Cukur rambut dengan precision blade, Cukur rambut dengan smooth blade, Cukur rambut dengan fast blade, Cukur rambut dengan powerful motor, Cukur rambut dengan quiet motor, Cukur rambut dengan lightweight design, Cukur rambut dengan ergonomic grip, Cukur rambut dengan slim design, Cukur rambut dengan sturdy construction, Cukur rambut dengan versatile settings, Cukur rambut dengan adjustable settings, Cukur rambut dengan user-friendly interface, Cukur rambut dengan easy maintenance, Cukur rambut dengan long battery life, Cukur rambut dengan fast charging, Cukur rambut dengan portable size, Cukur rambut dengan travel-friendly design, Cukur rambut dengan safety features, Cukur rambut dengan warranty coverage, Cukur rambut dengan professional results, Cukur rambut dengan precise results, Cukur rambut dengan consistent results, Cukur rambut dengan clean finish, Cukur rambut dengan smooth finish, Cukur rambut dengan sharp finish, Cukur rambut dengan defined lines, Cukur rambut dengan blended transitions, Cukur rambut dengan textured look, Cukur rambut dengan voluminous style, Cukur rambut dengan sleek appearance, Cukur rambut dengan stylish finish, Cukur rambut dengan modern twist, Cukur rambut dengan classic touch, Cukur rambut dengan edgy vibe, Cukur rambut dengan sophisticated touch, Cukur rambut dengan funky style, Cukur rambut dengan trendy look, Cukur rambut dengan elegant finish, Cukur rambut dengan natural charm, Cukur rambut dengan effortless style, Cukur rambut dengan glamorous appeal, Cukur rambut dengan rugged appeal, Cukur rambut dengan urban vibe, Cukur rambut dengan suburban charm, Cukur rambut dengan rural style, Cukur rambut dengan city look, Cukur rambut dengan beachy vibe, Cukur rambut dengan bohemian style, Cukur rambut dengan vintage appeal, Cukur rambut dengan retro charm, Cukur rambut dengan futuristic style, Cukur rambut dengan minimalist touch, Cukur rambut dengan maximalist vibe, Cukur rambut dengan avant-garde look, Cukur rambut dengan alternative style, Cukur rambut dengan indie charm, Cukur rambut dengan hipster appeal, Cukur rambut dengan preppy style, Cukur rambut dengan sporty touch"
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
