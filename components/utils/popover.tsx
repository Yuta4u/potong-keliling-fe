"use client"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover"
import { Button } from "@radix-ui/themes"
import { CalendarIcon } from "@radix-ui/react-icons"

function PopoverButton({ content }: any) {
  return (
    <Popover>
      <PopoverTrigger>
        {/* <button className="popover-button">Cek Schedule</button> */}
        <Button
          size={"4"}
          variant="solid"
          className="w-40 bg-[#FA6709] text-[#ededed] hover:text-slate-600"
        >
          <CalendarIcon className="w-6 h-6" /> Schedule
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-content">{content}</PopoverContent>
    </Popover>
  )
}

export default PopoverButton
