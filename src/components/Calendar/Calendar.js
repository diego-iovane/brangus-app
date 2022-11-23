import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import en from 'date-fns/locale/es'
import {
    CalendarContainer,
} from './Elements'

const Calendar = ({ selectedDay, setSelectedDay, openCalendar, setOpenCalendar }) => {

    const handleSelect = (date) => {
        const formated = format(date, 'dd/MM/yyyy')
        setSelectedDay(formated)
        setOpenCalendar(!openCalendar)
    }

    return (
        <CalendarContainer>
            <style>{`.rdp-day_selected {background-color: var(--light-gray);}`}</style>
            <DayPicker
            captionLayout="dropdown"
            selected={selectedDay}
            onSelect={handleSelect}
            mode="single"
            locale={es}
            toDate={new Date()}
            defaultMonth={new Date(1988, 10)}
            fromYear="1900"
            />
        </CalendarContainer>
    )
}

export default Calendar