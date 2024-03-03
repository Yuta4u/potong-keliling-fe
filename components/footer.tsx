"use client"

import Image from "next/image"

const Footer = () => {
  const footerData = ["whatsapp", "instagram", "twitter", "facebook"]

  return (
    <div className="flex flex-col w-4/5 justify-center text-center">
      <div className="flex justify-center  w-full">
        <hr
          className="border-t-1  my-4 w-1/2"
          style={{ borderColor: "#74642e" }}
        />
      </div>
      <div className="font-bold text-2xl mt-3" style={{ color: "#777777" }}>
        Punya Pertanyaan?
      </div>
      <div className="flex flex-col md:flex-row " style={{ height: "400px" }}>
        <div className="w-full h-full md:w-1/2 md:h-1/2  mt-4 md:mt-0">
          {/* LOCATION  */}
          <div className="flex mt-2">
            <div className="w-2/12 md:w-1/12 flex justify-center"></div>
            <div className="text-sm" style={{ color: "#777777" }}>
              Layanan Pelanggan
            </div>
          </div>
          <div className="  flex align-middle">
            <div className="w-2/12 md:w-1/12  flex justify-center ">
              <img src={"/images/whatsapp-icon.png"} />
            </div>
            <div
              className="font-semibold text-lg flex"
              style={{ alignItems: "center" }}
            >
              <div style={{ color: "#777777" }}>0812-9238-3814</div>
            </div>
          </div>

          {/* LOCATION  */}
          <div className="flex mt-2">
            <div className="w-2/12 md:w-1/12  flex justify-center"></div>
            <div className="text-sm" style={{ color: "#777777" }}>
              Lokasi
            </div>
          </div>
          <div className="  flex align-middle">
            <div className="w-2/12 md:w-1/12   flex justify-center">
              <img src={"/images/location-icon.png"} />
            </div>
            <div
              className="font-semibold text-lg flex"
              style={{ alignItems: "center" }}
            >
              <div style={{ color: "#777777" }}>Jakarta Selatan</div>
            </div>
          </div>

          {/* LOCATION  */}
          <div className="flex mt-2">
            <div className="w-2/12 md:w-1/12  flex justify-center"></div>
            <div className="text-sm" style={{ color: "#777777" }}>
              Jam Buka
            </div>
          </div>
          <div className="  flex align-middle">
            <div className="w-2/12 md:w-1/12   flex justify-center">
              <img src={"/images/clock-icon.png"} />
            </div>
            <div
              className="font-semibold text-lg flex"
              style={{ alignItems: "center" }}
            >
              <div style={{ color: "#777777" }}>Buka Senin-Minggu</div>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/12 md:w-1/12  flex justify-center"></div>
            <div className="text-sm" style={{ color: "#777777" }}>
              (10:00 - 18:00)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
