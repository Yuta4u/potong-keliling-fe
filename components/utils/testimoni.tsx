import React, { useRef, useState, useEffect } from "react"
//

// slider
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const Testimoni = () => {
  const progressCircle: any = useRef(null)
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress)
  }

  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    // Initial check
    checkWindowSize()
    window.addEventListener("resize", checkWindowSize)
    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  }, [])

  const arr = ["", "", ""]

  const imgData = [
    "https://utfs.io/f/286c64c1-9f88-47b5-8f8a-c0f5573e7961-17k.png",
    "https://utfs.io/f/b5f6dd1b-ead6-4aa7-860a-cd1bb37110c9-17m.png",
    "https://utfs.io/f/f35ef831-ad21-4ff9-b402-a5c14d1867e0-17o.png",
  ]

  const str = [
    "Makasih Poling, ada lu waktu gw gak kebuang buat ngantri.",
    "Murah, meriah, ramah dan keren jg hasilnya, Thanks kang cukur Poling.",
    "Enak banget dah sekarang kalau mau cukuran gak ribet, bisa nentuin waktu sendiri.",
    "Mau nanya, kalau buat cukur perempuan ada tidak?",
    "Min, tambah armadanya dong buat booking daerah Bogor.",
    "Tukang cukurnya ramah dan sopan, saran saja kalau bisa sekalian cat rambut min.",
    "Amazing, ga perlu antri tinggal WA atur waktu dan tempat, cukur deh, Thanks Poling, lu ngebantu banget.",
    "YA AMPUN! Rasanya tidak percaya! saya tampak luar biasa. Kebetulan saya dan kakak sedang berkunjung ke kota ini seminggu, kami memutuskan untuk mencoba layanan POLING. Saya ingin mencoba gaya yang berbeda untuk penampilan sehari-hari. Stylist di sini memberikan hasil yang memuaskan.",
    "Harus saya akui, saya ini klien yang pemilih. Saya sangat senang, rambut saya tampak luar biasa dan saya merasa makin keren, Terima kasih atas layanannya. Saya merekomendasikan ke teman-teman.",
  ]

  const name = [
    "Evan",
    "Yatno",
    "M. Ryan",
    "Sutrisno Klender",
    "Bagas",
    "Jajang Mulyana",
    "Tyo",
    "Bambang",
    "Amorulloh",
  ]

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // breakpoints={slide}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {isMobile ? (
          <div className="block sm:block md:hidden ">
            {str?.map((e, i) => (
              <SwiperSlide key={i} className="testimoni-swiper poppins my-5">
                <div className="p-5 ">
                  <div className="h-3/4">{e}</div>
                  <div className="h-1/4 ">{`[${name[i]}]`}</div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <div className="hidden sm:hidden md:block ">
            {arr?.map((e, i) => (
              <SwiperSlide key={i} className="testimoni-swiper poppins">
                <div className=" w-full h-56 my-2 flex justify-between px-8">
                  <div className="w-1/4 p-3">
                    <div className="h-2/4 ">{str[i]}</div>
                    <div className="h-1/4 ">{`[${name[i]}]`}</div>
                  </div>
                  <div className="w-1/4 p-3">
                    <div className="h-2/4 ">{str[i + 1]}</div>
                    <div className="h-1/4 ">{`[${name[i + 1]}]`}</div>
                  </div>{" "}
                  <div className="w-1/4 p-3">
                    <div className="h-2/4 ">{str[i + 2]}</div>
                    <div className="h-1/4 ">{`[${name[i + 2]}]`}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </>
  )
}

export default Testimoni
