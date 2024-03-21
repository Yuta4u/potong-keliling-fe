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
            <img
              src={
                "https://utfs.io/f/041e6b7f-f302-448c-bbec-3fad03111892-c93168.png"
              }
              style={{ width: "100%", height: "100%" }}
              alt="dialog"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default DialogWithBackgroundFocus
