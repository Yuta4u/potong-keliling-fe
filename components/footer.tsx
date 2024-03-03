"use client"

import Image from "next/image"

const Footer = () => {
  const footerData = ["whatsapp", "instagram", "twitter", "facebook"]

  return (
    <div className="flex flex-col w-full justify-center text-center bg-[#FA6709] text-[#ededed]">
      <div className="font-bold text-2xl mt-3">Punya Pertanyaan?</div>
      <div
        className="flex flex-col md:flex-row w-4/5 mx-auto"
        style={{ height: "400px" }}
      >
        <div className="w-full md:w-1/2 md:h-3/5 flex flex-col justify-between   mt-4 md:mt-0">
          {/* LOCATION  */}
          <div>
            <div className="flex mt-2">
              <div className="w-2/12 md:w-1/12 flex justify-center"></div>
              <div className="text-sm">Layanan Pelanggan</div>
            </div>
            <div className="  flex align-middle">
              <div className="w-2/12 md:w-1/12  flex justify-center ">
                {/* <img src={"/images/whatsapp-icon.png"} /> */}
              </div>
              <div
                className="font-semibold text-lg flex"
                style={{ alignItems: "center" }}
              >
                <div>0812-9238-3814</div>
              </div>
            </div>
          </div>

          {/* LOCATION  */}
          <div>
            <div className="flex mt-2">
              <div className="w-2/12 md:w-1/12  flex justify-center"></div>
              <div className="text-sm">Lokasi</div>
            </div>
            <div className="  flex align-middle">
              <div className="w-2/12 md:w-1/12   flex justify-center">
                {/* <img src={"/images/location-icon.png"} /> */}
              </div>
              <div
                className="font-semibold text-lg flex"
                style={{ alignItems: "center" }}
              >
                <div>Jakarta Selatan</div>
              </div>
            </div>
          </div>

          {/* LOCATION  */}
          <div>
            <div className="flex mt-2">
              <div className="w-2/12 md:w-1/12  flex justify-center"></div>
              <div className="text-sm">Jam Buka</div>
            </div>
            <div className="  flex align-middle">
              <div className="w-2/12 md:w-1/12   flex justify-center">
                {/* <img src={"/images/clock-icon.png"} /> */}
              </div>
              <div
                className="font-semibold text-lg flex"
                style={{ alignItems: "center" }}
              >
                <div>Buka Senin-Minggu</div>
              </div>
            </div>
            <div className="flex">
              <div className="w-2/12 md:w-1/12  flex justify-center"></div>
              <div className="text-sm">(10:00 - 18:00)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
