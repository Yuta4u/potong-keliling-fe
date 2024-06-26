import { Button } from "@radix-ui/themes"
import { RocketIcon } from "@radix-ui/react-icons"

const WhatsappBtn = () => {
  const handleOnClickWhatsapp = () => {
    const phoneNumber = "6281292383814" // Ganti dengan nomor yang diinginkan
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`
    window.open(whatsappUrl)

    // handle ios
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.location.href = whatsappUrl
    }
  }
  return (
    <div className="text-center">
      <Button
        size="4"
        color="grass"
        variant="solid"
        className="w-60 hover:text-slate-700"
        onClick={handleOnClickWhatsapp}
      >
        <RocketIcon className="w-6 h-6" />
        <span className="text-2xl"> Whatsapp</span>
      </Button>
    </div>
  )
}

export default WhatsappBtn
