import React, { useRef, useState, useEffect } from "react"
//

// slider
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const Slider = () => {
  const progressCircle: any = useRef(null)
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress)
  }

  const [isMobile, setIsMobile] = useState(false)

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

  const imgData = [
    "https://utfs.io/f/a73885e6-221e-4915-a002-c51dc66808e1-v0gdm3.jpg",
    "https://utfs.io/f/3a851b02-5ad9-4d41-93a2-781d626659cf-v0gdm2.jpg",
    "https://utfs.io/f/f5e41b24-e39b-40ee-bc51-a0b5004dae4f-v0gdm1.jpg",
    "https://utfs.io/f/c46227c5-f772-42d6-8c52-2d619475628d-v0gdm0.jpg",
    "https://utfs.io/f/db2e3195-e64a-47e6-8bd1-2a8f492a5f9c-v0gdlz.jpg",
    "https://utfs.io/f/45e71b9b-81cd-4c5a-84f3-f5ae8a55a6ed-v0gdly.jpg",
    "https://utfs.io/f/248fe16a-7916-4cfe-8c27-a956327bd5e6-v0gdlx.jpg",
    "https://utfs.io/f/6e17d7b6-69e8-41e3-80b0-cea70bc83403-v0gdlw.jpg",
  ]

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {imgData?.map((e, i) => (
          <SwiperSlide key={i} className="swiper-slide-testimoni">
            <img src={e} alt="" className="slider-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
