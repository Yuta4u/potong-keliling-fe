"use client"

import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function CalendarComp() {
  const [date, setDate] = useState(new Date())
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [selectedTime, setSelectedTime] = useState(null)

  const handleMsgWhatsapp = () => {
    const phoneNumber = "6285156269982" // Ganti dengan nomor yang diinginkan
    const messageText = encodeURIComponent("PALO ALTO")
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`
    window.open(whatsappUrl, "_blank")
  }

  const handleDateChange = (date: any) => {
    setDate(date)
    setShowTimePicker(true) // Menampilkan pop-over jam saat tanggal diubah
  }

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time)
    setShowTimePicker(false)
    handleMsgWhatsapp()
  }

  return (
    <div className="flex">
      <Calendar className={"z-50"} onChange={handleDateChange} value={date} />
      {showTimePicker && (
        <div className="time-picker w-32">
          <p>Select time:</p>
          <select onChange={(e) => handleTimeSelect(e.target.value)}>
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
