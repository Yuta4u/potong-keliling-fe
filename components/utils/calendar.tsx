"use client"

import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { AlertDialog, Button, Flex } from "@radix-ui/themes"

// handle calendar action
const AlertDialogComp = ({ time, date }: any) => {
  const handleTimeSelect = () => {
    const month: any = {
      Jan: "Januari",
      Feb: "Februari",
      Mar: "Maret",
      Apr: "April",
      May: "Mei",
      Jun: "Juni",
      Jul: "Juli",
      Aug: "Agustus",
      Sep: "September",
      Oct: "Oktober",
      Nov: "November",
      Dec: "Desember",
    }

    const tgl = date.toString().split(" ")[2]
    const bln = date.toString().split(" ")[1]
    const msg = `Halo Mister Cukur, apakah untuk tanggal ${+tgl} ${
      month[bln]
    }, jam ${time} tersedia?`
    const phoneNumber = "6281292383814" // Ganti dengan nomor yang diinginkan
    const messageText = encodeURIComponent(msg)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`
    window.open(whatsappUrl, "_blank")

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.location.href = whatsappUrl
    }
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button className="btn-jam">{time}</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Buat Janji?</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Apakah kamu yakin ingin buat janji dengan Mister Cukur?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Tidak
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="soft" color="gray" onClick={handleTimeSelect}>
              Iya
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

function CalendarComp() {
  const [date, setDate] = useState(new Date())
  const [showTimePicker, setShowTimePicker] = useState(false)

  // handle today
  const tempToday = new Date()
  const today = new Date(tempToday)
  today.setDate(tempToday.getDate())

  const handleDateChange = (date: any) => {
    setDate(date)
    setShowTimePicker(true) // Menampilkan pop-over jam saat tanggal diubah
  }

  return (
    <div className="flex">
      <Calendar
        className={"z-50"}
        onChange={handleDateChange}
        value={date}
        minDate={today}
      />
      {showTimePicker && (
        <div className="time-picker">
          <div>Waktu Tersedia</div>
          <hr className="mt-1" />
          <div
            className="flex justify-between mx-auto font-semibold mt-1"
            style={{ width: "80%" }}
          >
            <div>Morning</div>
            <div>Afternoon</div>
            <div>Evening</div>
          </div>
          <div className="h-40 mt-2 md:mt-0 mx-auto flex justify-between gap-2 p-0 md:p-2">
            <div className="w-1/3 flex flex-col justify-between">
              <AlertDialogComp time={"08:00"} date={date} />
              <AlertDialogComp time={"09:00"} date={date} />
              <AlertDialogComp time={"10:00"} date={date} />
              <AlertDialogComp time={"11:00"} date={date} />
            </div>
            <div className="w-1/3 flex flex-col justify-between">
              <AlertDialogComp time={"12:00"} date={date} />
              <AlertDialogComp time={"13:00"} date={date} />
              <AlertDialogComp time={"14:00"} date={date} />
              <AlertDialogComp time={"15:00"} date={date} />
            </div>
            <div className="w-1/3 flex flex-col justify-between">
              <AlertDialogComp time={"16:00"} date={date} />
              <AlertDialogComp time={"17:00"} date={date} />
              <AlertDialogComp time={"18:00"} date={date} />
              <AlertDialogComp time={"19:00"} date={date} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CalendarComp
