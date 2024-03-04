// radix
import { ScissorsIcon, DrawingPinIcon } from "@radix-ui/react-icons"
import { Card } from "@radix-ui/themes"

// components
import Footer from "./footer"
import Slider from "./utils/slider"
import Tentang from "./utils/tentang"
import Layanan from "./utils/layanan"
import PopoverButton from "./utils/popover"
import CalendarComp from "./utils/calendar"
import WhatsappBtn from "./utils/whatsapp"

const Content = () => {
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
      {/* TENTANG  */}
      <Tentang />

      {/* BUAT JANJI  */}
      <div
        className="content-1 mb-32 md:mb-0 bg-[#ededed] text-black flex flex-col justify-center h-60"
        style={{ alignItems: "center" }}
      >
        <div className="text-center text-sm  md:text-lg font-medium">
          Ingin buat janji dengan{" "}
          <span className="text-[#FA6709]">Mister Cukur</span> ?
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
      <div id="kontak" className="flex flex-column justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default Content
