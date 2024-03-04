import Image from "next/image"
import { Cross1Icon } from "@radix-ui/react-icons"

const DialogWithBackgroundFocus = ({ isOpen, setIsOpen }: any) => {
  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div className="overlay bg-red-400">
          <div className="dialog">
            <button className="close-dialog" onClick={closeDialog}>
              <Cross1Icon className="w-6 h-6" />
            </button>
            <Image
              src={"/images/warning-img.png"}
              width={8000}
              height={8000}
              style={{ width: "100%", height: "100%" }}
              alt="dialog"
            />
          </div>
        </div>
      )}
      {/* Your main website content goes here */}
    </>
  )
}

export default DialogWithBackgroundFocus
