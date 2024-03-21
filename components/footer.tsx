"use client"

const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center text-center bg-[#FA6709] text-[#ededed] py-5 poppins">
      <div className="font-bold text-2xl mt-3">Punya Pertanyaan?</div>

      <div className="flex flex-col w-4/5 mx-auto text-[#ededed] my-7">
        {/* WHATSAPP  */}
        <div className="w-full mt-5 md:mt-0">
          <div className="ml-14 text-left text-sm md:mb-0 -mb-5 w-fit">
            Layanan Pelanggan
          </div>
          <div className="w-full md:w-1/2 h-10 flex mt-4 md:mt-0">
            <div className="flex w-14  justify-center">
              <img
                src={
                  "https://utfs.io/f/ea9a0c55-54fb-49a3-a37a-8352e0d7da46-221vl8.png"
                }
              />
            </div>
            <div
              className="flex w-4/5  font-semibold sm:text-xs md:text-2xl"
              style={{ alignItems: "center" }}
            >
              0812-9238-3814
            </div>
          </div>
        </div>

        {/* LOKASI  */}
        <div className="w-full mt-5">
          <div className="ml-14  text-left text-sm md:mb-0 -mb-5 w-fit">
            Lokasi
          </div>
          <div className="md:w-1/2   h-10 flex mt-4 md:mt-0 ">
            <div className="flex w-14  justify-center">
              <img
                src={
                  "https://utfs.io/f/13d18999-8461-441b-bbc3-21c624931d8a-uhcdin.png"
                }
              />
            </div>
            <div
              className="flex w-4/5  font-semibold sm:text-xs md:text-2xl"
              style={{ alignItems: "center" }}
            >
              Jakarta Selatan
            </div>
          </div>
        </div>

        {/* JAM BUKA  */}
        <div className="w-full mt-5">
          <div className="ml-14 text-left text-sm md:mb-0 -mb-5 w-fit">
            Jam Buka
          </div>
          <div className="md:w-1/2 h-10 flex mt-4 md:mt-0  ">
            <div className="flex w-14  justify-center">
              <img
                src={
                  "https://utfs.io/f/17ddc9e4-358f-4a04-9263-a268c9e48229-h9a9co.png"
                }
              />
            </div>
            <div
              className="flex w-4/5  font-semibold sm:text-xs md:text-2xl"
              style={{ alignItems: "center" }}
            >
              Buka Senin - Minggu
            </div>
          </div>
          <div className="ml-14 text-left text-sm  w-fit">(09:00 - 18:00)</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
