import React, { useEffect } from "react";
import DayCell from "./DayCell";
import EventDetails from "./EventDetails";
import { useState } from "react";


function Calendar () {
  const [ selectedDay, setSelectDay ] = useState( 1 )
  const [dataOfTheDay, setDataOfTheDay] = useState()
  const [ dataOfTheMonth, setDataOfTheMonth ] = useState(Array.from({ length: 30 }, () => ({ value: [] })))
  

  const actualizarDia = ( day) => {
    setSelectDay(day)
    localStorage.setItem('selected', JSON.stringify(day))
  }

  const extractDataForCalendar = (data) => {
    const calendarData = JSON.parse(localStorage.getItem('calendarData'))
    setDataOfTheMonth(calendarData)
  }

  useEffect(() => {
  },[dataOfTheMonth, dataOfTheDay])

  return (
    <div className="container-calendar-and-eventDetails">
      <section className="calendar-container">
        <section className="calendar-header">
          <h4>Calendario</h4>
          <span className="container-name-month">
            <span className="material-symbols-outlined">keyboard_arrow_left</span>
            septiembre
            <span className="material-symbols-outlined">keyboard_arrow_right</span>
          </span>
        </section>
        <section className="container-date-calendar">
          <ul className="container-week">
            <li>Lunes</li>
            <li>Martes</li>
            <li>Miércoles</li>
            <li>Jueves</li>
            <li>Viernes</li>
            <li>Sábado</li>
            <li>Domingo</li>
          </ul>
          <ul className="calendar-container-days">
            {dataOfTheMonth?.map((data, index) => (
              <DayCell
              key={index}
              day={index + 1}
              data={data.value}
              actualizarDia={actualizarDia}
              />
            ))}
          </ul>
        </section>
      </section>
      <section>
        <EventDetails 
        day={selectedDay}
        extractDataForCalendar={extractDataForCalendar}
        />
      </section>
    </div>
  );
}

export default Calendar;
