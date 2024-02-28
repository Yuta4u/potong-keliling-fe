"use client"

import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function CalendarComp() {
  const [date, setDate] = useState(new Date())
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [selectedTime, setSelectedTime] = useState(null)

  // handle today
  const tempToday = new Date()
  const today = new Date(tempToday)
  today.setDate(tempToday.getDate())

  const handleDateChange = (date: any) => {
    setDate(date)
    setShowTimePicker(true) // Menampilkan pop-over jam saat tanggal diubah
  }

  const handleTimeSelect = (time: any) => {
    const tgl = date.toString().split(" ")[2]
    const jam = time
    const msg = `Halo Mister Cukur, apakah untuk tanggal ${+tgl} jam ${jam} tersedia?`
    const phoneNumber = "6285156269982" // Ganti dengan nomor yang diinginkan
    const messageText = encodeURIComponent(msg)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`
    window.open(whatsappUrl, "_blank")
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
        <div
          className="time-picker w-32"
          style={{
            border: "2px solid #d0433a",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
          }}
        >
          <p>Select time:</p>
          <select
            onChange={(e) => handleTimeSelect(e.target.value)}
            style={{ backgroundColor: "#1b4552", borderRadius: "5px" }}
          >
            <option value="09:00">09:00</option>
            <option value="12:00">10:00</option>
            <option value="15:00">11:00</option>
            <option value="18:00">12:00</option>
            <option value="09:00">13:00</option>
            <option value="12:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="18:00">16:00</option>
            <option value="09:00">17:00</option>
            <option value="12:00">18:00</option>
            <option value="15:00">19:00</option>
            <option value="18:00">20:00</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default CalendarComp
