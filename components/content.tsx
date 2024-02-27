// radix
import { ScissorsIcon, DrawingPinIcon } from "@radix-ui/react-icons"
import { Card } from "@radix-ui/themes"

// components
import Footer from "./footer"
import Slider from "./utils/slider"
import PopoverButton from "./utils/popover"
import CalendarComp from "./utils/calendar"

// others
import { useEffect, useState } from "react"

const Content = () => {
  const [value, onChange] = useState(new Date())

  useEffect(() => {
    console.log(value)
  }, [value])

  const layananData = [
    {
      name: "Yang Penting Rapih",
      img: "https://i.pinimg.com/564x/dc/7b/2d/dc7b2de51846e3b1d3fa55f593f047e8.jpg",
      price: "30k",
    },
    {
      name: "Yang Penting Gaya",
      img: "https://i.pinimg.com/564x/ef/8a/9a/ef8a9a5cf35f2a13cb17b54322d81ae3.jpg",
      price: "50k",
    },
    {
      name: "Yang Penting Ganteng",
      img: "https://i.pinimg.com/736x/d2/4b/7a/d24b7a018ad2f611f91c187050dbd8e9.jpg",
      price: "100k",
    },
    {
      name: "Udah Pasti Ganteng",
      img: "https://i.pinimg.com/236x/2b/39/7e/2b397e0cddaf6af0bf42aef95aa451cc.jpg",
      price: "200k",
    },
  ]

  return (
    <div>
      {/*  BERANDA */}
      <div className="content-1 h-10 md:h-28">
        <div className=" text-center sm:text-sm md:text-3xl h-auto mt-7">
          Ingin buat janji dengan barber kami?
        </div>
        <div className="text-center mt-3">
          <PopoverButton content={<CalendarComp />} />
          {/* <Button
            className="bg-zinc-200 text-black"
            onClick={() => alert("develop")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule
          </Button> */}
        </div>
        <div className="flex justify-center">
          <hr className="border-t-1 border-gray-300 my-4 w-1/2" />
        </div>
      </div>
      {/* LAYANAN */}
      <div id="layanan" className="pt-20">
        <div className="w-full flex justify-center">
          <div className="w-11/12 text-sm md:text-2xl flex items-center mb-3">
            Layanan <ScissorsIcon className="ml-2 h-4 w-4 md:h-6 md:w-6" />
          </div>
        </div>
        <div className="w-full flex justify-center relative">
          <div className="flex flex-wrap  w-11/12 justify-between gap-5 ">
            {layananData.map((e) => (
              <Card className="w-44 md:w-72 h-72 md:h-96 relative">
                <img
                  key={e?.name}
                  src={e.img}
                  style={{ width: "100%", height: "85%" }}
                  alt="img"
                />
                <div>{e.name}</div>
                <div className="flex justify-end">
                  <div className="price w-1/3">{e.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* TENTANG */}
      <div
        id="tentang"
        className=" h-80  pt-20 flex flex-column justify-center"
      >
        <div className="flex flex-wrap w-4/5 justify-center text-center">
          <div className="flex justify-center  w-full">
            <hr className="border-t-1 border-gray-300 my-4 w-1/2" />
          </div>
          <div className="font-bold text-2xl mt-3">Tentang Kami</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            perspiciatis cum. Fugiat totam saepe quod porro odio aliquam at
            ipsum consequatur, perferendis nulla sunt id earum, praesentium,
            natus reprehenderit. Doloremque! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Deleniti, perspiciatis cum. Fugiat
            totam saepe quod porro odio aliquam at ipsum consequatur,
            perferendis nulla sunt id earum, praesentium, natus reprehenderit.
            Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Deleniti, perspiciatis cum. Fugiat totam saepe quod porro odio
            aliquam at ipsum consequatur, perferendis nulla sunt id earum,
          </div>
        </div>
      </div>
      {/*  TESTIMONI */}
      <div id="testimoni" className="pt-72 md:pt-20">
        <div className="w-full flex justify-center">
          <div className="w-11/12 text-sm md:text-2xl flex items-center mb-3">
            Testimoni <DrawingPinIcon className="ml-2 h-4 w-4 md:h-6 md:w-6" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 text-sm md:text-2xl flex items-center mb-3">
            <Slider />
          </div>
        </div>
      </div>
      {/*  KONTAK */}
      <div
        id="kontak"
        className="pt-20 mt-5 md:mt-0 pb-12 flex flex-column justify-center"
      >
        <Footer />
      </div>
    </div>
  )
}

export default Content
