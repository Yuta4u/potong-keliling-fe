import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import Banner1 from "../public/images/banner-1.jpg"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/banner.css"

// import required modules
import { Pagination } from "swiper/modules"
import { Autoplay } from "swiper/modules"

import Image from "next/image"

const Banner = () => {
  const progressCircle: any = useRef(null)
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress)
  }

  const banner = [1, 2, 3]
  return (
    <div id="beranda" className="flex justify-center">
      <div className="w-full md:w-11/12 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {banner?.map((e: number) => (
            <SwiperSlide>
              {/* <img src={"/images/banner-1.jpg"} /> */}
              <Image
                src={`/images/banner-1.jpg`}
                width={2000}
                height={2000}
                objectFit="cover"
                alt="banner"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
