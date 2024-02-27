"use client"

import Image from "next/image"

const Footer = () => {
  const footerData = ["whatsapp", "instagram", "twitter", "facebook"]

  return (
    <div className="flex flex-col w-4/5 justify-center text-center">
      <div className="flex justify-center  w-full">
        <hr className="border-t-1  my-4 w-1/2" />
      </div>
      <div className="font-bold text-2xl mt-3">Kontak Kami</div>
      <div className=" w-full flex justify-center mt-9">
        <div className="flex w-3/5  justify-center md:justify-between flex-wrap text-center">
          {footerData.map((e) => (
            <a href="https://www.youtube.com/watch?v=Shm39XHEiuw">
              <div className="w-32 h-32">
                <Image
                  className="logo-img"
                  src={`/images/logo-${e}.png`}
                  height={100}
                  width={300}
                  alt="logo"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
