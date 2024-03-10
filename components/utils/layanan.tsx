import { ScissorsIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const Layanan = () => {
  const str = ["Cukur Kumis", "Cukur Jenggot"]

  return (
    <div
      id="layanan"
      className="w-full py-0 pb-20 md:py-20 "
      style={{ height: "600px" }}
    >
      <div className="text-center text-2xl md:text-4xl font-bold text-[#FA6709]">
        Layanan Kami
      </div>
      <div className="flex text-center  justify-center mt-2">
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
        <ScissorsIcon className="w-4 md:w-6 h-4 md:h-6" />
      </div>
      <div className=" h-72 mt-5">
        <div
          className="flex text-[#FA6709]  w-10/12 md:w-4/12 mx-auto"
          style={{ alignItems: "center" }}
        >
          <div className=" w-6/12 bg=blue-100">Cukur rambut all type</div>
          <div className="border-b-2 w-4/12 border-b-[#FA6709] border-dashed bg-green-100"></div>
          <div
            className=" w-3/12 text-center flex"
            style={{ alignItems: "center" }}
          >
            <span className="line-through mr-2 ml-2 text-base">20k</span>
            <span>
              <Image
                src={"/images/15k_2.png"}
                width={70}
                height={70}
                alt="price-tag"
                className="hidden sm:block"
              />

              <Image
                src={"/images/15k_2.png"}
                width={100}
                height={100}
                alt="price-tag"
                className="block sm:hidden"
              />
            </span>
          </div>
        </div>
        <div className="mx-auto text-center w-10/12">
          Cukur rambut tanpa keramas untuk semua tipe rambut yang diinginkan.
        </div>
        <div className="text-center text-lg md:text-2xl font-bold text-[#FA6709] mt-5 mb-5">
          Layanan Tambahan
          <br />
          (Add on)
        </div>
        {str.map((e, key) => (
          <div
            key={key}
            className="flex text-[#FA6709]  w-10/12 md:w-4/12 mx-auto"
          >
            <div className={`w-10/12 md:w-6/12`}>{e}</div>
            <div
              className={`border-b-2 w-4/12 border-b-[#FA6709] border-dashed mb-3`}
            ></div>
            <div className=" w-2/12 text-center">5k</div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Layanan
