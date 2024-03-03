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

import Image from "next/image"

const Banner = () => {
  const progressCircle: any = useRef(null)
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress)
  }

  const banner = [1, 2, 3]
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
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {banner?.map((e: number, i: number) => (
            <SwiperSlide key={i}>
              {/* <img src={"/images/banner-1.jpg"} /> */}
              <Image
                src={`/images/banner-img-${1}.png`}
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
