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
        <Button color="cyan" variant="solid" className="w-36">
          <CalendarIcon width="16" height="16" /> Schedule
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-content">{content}</PopoverContent>
    </Popover>
  )
}

export default PopoverButton
