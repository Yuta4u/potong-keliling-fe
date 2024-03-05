// radix
import { DrawingPinIcon } from "@radix-ui/react-icons"
import Image from "next/image"

// components
import Footer from "./footer"
import Slider from "./utils/slider"
import Tentang from "./utils/tentang"
import Layanan from "./utils/layanan"
import PopoverButton from "./utils/popover"
import CalendarComp from "./utils/calendar"
import WhatsappBtn from "./utils/whatsapp"

const Content = () => {
  return (
    <div>
      {/* TENTANG  */}
      <Tentang />

      {/* BUAT JANJI  */}
      <div
        className="content-1 mb-32 md:mb-0 bg-[#ededed] text-black flex flex-col justify-center py-20"
        style={{ alignItems: "center" }}
      >
        <div className="text-center text-sm  md:text-3xl font-semibold">
          INGIN BUAT JANJI DENGAN
          <br />
          <span className="text-[#FA6709]">MISTER CUKUR</span> ?
        </div>
        <div className="text-center mt-3 flex justify-center flex-col">
          <PopoverButton content={<CalendarComp />} />
          <div className="text-sm  md:text-lg ">or</div>
          <WhatsappBtn />
        </div>
      </div>

      {/* LAYANAN */}
      <Layanan />

      {/*  TESTIMONI */}
      <div id="testimoni" className=" bg-[#ededed] text-black py-20 ">
        <div className="w-full flex justify-center">
          <div className="w-11/12 text-sm md:text-2xl flex items-center mb-3 font-semibold">
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
      <div id="kontak" className="flex flex-column justify-center">
        <Footer />
      </div>
      <div className="text-center bg-[#FA6709] text-[#ededed] text-xs md:text-sm pb-2">
        Copyright © 2024 All rights reserved | PT. Mister Cukur
      </div>
    </div>
  )
}

export default Content
