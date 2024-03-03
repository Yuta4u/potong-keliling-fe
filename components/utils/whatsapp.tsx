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
        color="grass"
        variant="solid"
        className="w-36"
        onClick={handleOnClickWhatsapp}
      >
        <RocketIcon width="16" height="16" />
        Whatsapp
      </Button>
    </div>
  )
}

export default WhatsappBtn
