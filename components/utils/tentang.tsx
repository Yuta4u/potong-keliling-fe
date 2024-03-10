import Image from "next/image"

const Tentang = () => {
  return (
    <div id="tentang" className="w-full py-0 pb-20 mt-0 md:mt-20 md:py-20 ">
      <Image
        src={"/images/logo-tentang-kami.png"}
        width={200}
        height={200}
        alt="logo-text"
        className="mx-auto mb-6 rounded-full"
      />
      <div className="w-full md:w-3/5 mx-auto text-[10px] md:text-lg font-semibold text-center">
        <span className="text-[#FA6709]">POLING</span> atau{" "}
        <span className="text-[#FA6709]">Potong Keliling</span> adalah tempat
        potong rambut berbasis <br />
        <span>online</span> di Indonesia. Seperti namanya, kami selalu melakukan
        <br /> mobilisasi atau berkeliling setiap harinya untuk menawarkan jasa{" "}
        <br /> potong rambut. <span className="text-[#FA6709]">
          POLING
        </span>{" "}
        hadir untuk menjadi solusi bagi kalian yang <br /> memiliki waktu
        terbatas dan mageran, Klik pesan dan kami siap datang <br />
      </div>
    </div>
  )
}

export default Tentang
