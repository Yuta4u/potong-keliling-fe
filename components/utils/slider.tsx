import React, { useRef } from "react"
//
import Image from "next/image"

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

  const testimoniData = [
    "style-1.jpg",
    "style-2.jpg",
    "style-3.jpg",
    "style-4.jpg",
    "style-5.jpg",
    "style-6.jpg",
    "style-7.jpg",
    "style-8.jpg",
    "style-9.jpg",
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
        {testimoniData?.map((e, i) => (
          <SwiperSlide key={i} className="swiper-slide-testimoni">
            <Image src={`/images/${e}`} width={500} height={500} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
