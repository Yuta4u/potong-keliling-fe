import Image from "next/image"

const Tentang = () => {
  return (
    <div id="tentang" className="w-full py-0 pb-20 border-t-2 mt-20 md:py-10 ">
      <Image
        src={"/images/logo-text.png"}
        width={300}
        height={300}
        alt="logo-text"
        className="mx-auto"
      />
      <div className="w-full md:w-3/5 mx-auto text-[10px] md:text-lg font-medium text-center -mt-7 md:mt-0">
        <span className="text-[#FA6709]">Mister Cukur</span> adalah tempat cukur
        berbasis online pertama di <br /> Indonesia. Kami memiliki tagline
        <span className="text-[#FA6709]"> D'Ganteng Solution</span> agar semua
        <br />
        lapisan masyarakat dapat merasakat kemudahan dalam mencukur
        <br /> rambut dimanapun dan kapanppun.{" "}
        <span className="text-[#FA6709]">Mister Cukur</span> hadir untuk menjadi
        <br />
        solusi bagi kalian yang memiliki waktu terbatas dan mageran. Klik
        <br /> pesan dan kami siap datang.
      </div>
    </div>
  )
}

export default Tentang
