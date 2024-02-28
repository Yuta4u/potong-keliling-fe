import { useState } from "react"
import Image from "next/image"

const DialogWithBackgroundFocus = ({ isOpen, setIsOpen }: any) => {
  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="dialog">
            <button className="close-button" onClick={closeDialog}>
              ✖
            </button>
            <Image
              src={"/images/warning-dialog.png"}
              width={100}
              height={100}
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
