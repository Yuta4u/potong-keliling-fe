import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../../styles/banner.css"

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules"

const Banner = () => {
  const progressCircle: any = useRef(null)
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress)
  }

  const banner = [
    "https://utfs.io/f/0174de66-8080-4912-8d91-28f5895d7ce7-s17z75.png",
    "https://utfs.io/f/87886cc1-01ab-4809-a815-3ba5ea4f92d6-s17z74.png",
  ]
  return (
    <div id="beranda" className="flex justify-center">
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="container-swiper"
        >
          {banner?.map((e: string, i: number) => (
            <SwiperSlide key={i}>
              <img
                src={e}
                alt="banner"
                className="banner-img block sm:hidden"
                style={{ width: "100%", height: "300px" }}
              />
              <img
                src={e}
                alt="banner"
                className="banner-img hidden sm:block md:hidden lg:hidden"
                style={{ width: "100%", height: "400px" }}
              />
              <img
                src={e}
                alt="banner"
                className="banner-img hidden sm:hidden md:block lg:hidden"
                style={{ width: "100%", height: "100vh" }}
              />
              <img
                src={e}
                alt="banner"
                className="banner-img hidden sm:hidden md:hidden lg:block"
                style={{ width: "100%", height: "100vh" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
