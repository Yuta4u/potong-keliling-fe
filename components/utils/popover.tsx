"use client"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover"

function PopoverButton({ content }: any) {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="popover-button">Cek Schedule</button>
      </PopoverTrigger>
      <PopoverContent className="popover-content">{content}</PopoverContent>
    </Popover>
  )
}

export default PopoverButton
