// radix
import { DrawingPinIcon } from "@radix-ui/react-icons"

// components
import Footer from "./footer"
import Slider from "./utils/slider"
import Testimoni from "./utils/testimoni"
import Tentang from "./utils/tentang"
import Layanan from "./utils/layanan"
import PopoverButton from "./utils/popover"
import CalendarComp from "./utils/calendar"
import WhatsappBtn from "./utils/whatsapp"

const Content = () => {
  return (
    <div>
      {/* TENTANG  */}
      <div id="tentang" className="py-20">
        <Tentang />
      </div>

      {/* BUAT JANJI  */}
      <div
        className="content-1 mb-32 md:mb-0 bg-[#ededed] text-black flex flex-col justify-center py-20"
        style={{ alignItems: "center" }}
      >
        <div className="text-center text-base  md:text-3xl font-semibold poppins">
          INGIN BUAT JANJI DENGAN{" "}
          <span className="text-[#FA6709]">POLING?</span>
        </div>
        <div className="text-center text-xs md:text-sm font-semibold mt-2 poppins">
          JANJIAN YUK!
          <br />
          Booking <span className="text-[#FA6709]"> Potong Keliling </span>{" "}
          Disini
        </div>
        <div className="text-center mt-3 flex justify-center flex-col">
          <PopoverButton content={<CalendarComp />} />
          <div className="text-sm  md:text-lg text-[#FA6709] font-semibold">
            or
          </div>
          <WhatsappBtn />
        </div>
      </div>

      {/* LAYANAN */}
      <div id="layanan" className="pt-20">
        <Layanan />
      </div>

      {/*  MODEL */}
      <div id="model" className=" bg-[#ededed] text-black py-20 ">
        <div className="w-full flex justify-center">
          <div className="w-11/12 text-sm md:text-2xl flex items-center mb-3 font-semibold poppins">
            Model <DrawingPinIcon className="ml-2 h-4 w-4 md:h-6 md:w-6" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 text-sm md:text-2xl flex items-center mb-3">
            <Slider />
          </div>
        </div>
      </div>

      {/* TESTIMONI  */}
      <div id="testimoni" className="pt-20">
        <div className="text-sm md:text-2xl flex font-semibold poppins justify-center underline-offset-2 underline">
          Testimoni
        </div>
        <Testimoni />
      </div>

      {/*  KONTAK */}
      <div id="kontak" className="flex flex-column justify-center">
        <Footer />
      </div>

      {/* FOOTER  */}
      <div className="text-center bg-[#FA6709] text-[#ededed] text-xs pb-2 poppins">
        Copyright © 2024 All rights reserved | PT. Potong Keliling Indonesia
      </div>
    </div>
  )
}

export default Content
