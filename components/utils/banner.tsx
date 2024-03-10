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

  const banner = [1, 2]
  return (
    <div id="beranda" className="flex justify-center">
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 1000000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="container-swiper"
        >
          {banner?.map((e: number, i: number) => (
            <SwiperSlide key={i}>
              <Image
                src={`/images/img-slider-${e}.png`}
                width={500}
                height={500}
                objectFit="contain"
                alt="banner"
                className="banner-img block sm:hidden"
              />
              <Image
                src={`/images/img-slider-${e}.png`}
                width={2000}
                height={2000}
                objectFit="contain"
                alt="banner"
                className="banner-img hidden sm:block"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
