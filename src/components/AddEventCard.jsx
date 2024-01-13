import { useEffect, useState } from "react";

import React from "react";

function AddEventCard({ bringEventData, disguiseCardEvent, day }) {
  const [count, setCount] = useState(0);
  const [booking, setBooking] = useState(1);
  const [timeValue, setTimeValue] = useState("00:00");
  const [isLate, setIslate] = useState();

  const savedEvent = () => {
    const bookingData = booking === 2 ? "Pickup" : "Presencial";
    const data = {
      day: day - 1,
      bookingData: bookingData,
      time: timeValue,
      count: count,
    };
    const calendarData = JSON.parse(localStorage.getItem("calendarData"));
    calendarData.map((date, index) => {
      if (index === day - 1) {
        date.value.push(data);
      }
    });

    const calendarDataString = JSON.stringify(calendarData);
    localStorage.setItem("calendarData", calendarDataString);
    bringEventData();
  };

  const handleChangeValue = (e) => {
    setTimeValue(e.target.value);
  };

  const check = () => {
    const time = `${timeValue[0]}${timeValue[1]}`;
    if (Number(time) <= 11) {
      setIslate(false);
    } else {
      setIslate(true);
    }
  };

  const incrementCount = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (!count < 1) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
    setBooking(1);
    setTimeValue("00:00");
    check();
  };

  useEffect(() => {
    check();
  }, [timeValue]);
  return (
    <>
      <article className="addEventCard-container">
        <section className="addEventCard-body">
          <div className="addEventCard-header">
            <span>Nuevo Evento</span>
            <div className="icon-calendar-container-header">
              <span className="material-symbols-outlined">calendar_month</span>
              {day}
              de Sept
            </div>
          </div>
        </section>
        <section className="addEventCard-options">
          <article className="addEventCard-options-container">
            <h5>Cena Chef</h5>
            <section className="addEventCard-options-body">
              <div
                onClick={() => setBooking(1)}
                className={booking === 1 ? "base selectBooking" : "base"}
              >
                Presencial
              </div>
              <div
                onClick={() => setBooking(2)}
                className={booking === 2 ? "base selectBooking" : "base"}
              >
                Pickup
              </div>
            </section>
          </article>
          <section className="container-count-people">
            <article className="number-of-people">N° de personas</article>
            <article className="container-count">
              <span
                onClick={decrementCount}
                className="material-symbols-outlined"
              >
                remove
              </span>
              <div>{count}</div>
              <span
                onClick={incrementCount}
                className="material-symbols-outlined"
              >
                add
              </span>
            </article>
          </section>
        </section>
        <section className="container-data-hours">
          <article className="data-hours">
            <section className="box-data-hours">
              <div className="data-in-hours">
                <input
                  type="time"
                  className="hours-data"
                  value={timeValue}
                  onChange={handleChangeValue}
                />
                <div>
                  <span>Hora</span> Minutos
                </div>
              </div>
            </section>
            <div className="container-morning-or-afternoon">
              <div
                className={
                  isLate
                    ? "morning-or-afternoon"
                    : "morning-or-afternoon islate"
                }
              >
                AM
              </div>
              <div
                className={
                  isLate
                    ? "morning-or-afternoon islate"
                    : "morning-or-afternoon"
                }
              >
                PM
              </div>
            </div>
          </article>
        </section>
        <section className="container-buttons-keep">
          <button
            onClick={() => {
              reset();
              disguiseCardEvent();
            }}
            className="eliminate"
          >
            Descartar Cambios
          </button>
          <button
            onClick={() => {
              savedEvent();
              disguiseCardEvent();
              reset()
            }}
            className="keep"
          >
            Guardar
          </button>
        </section>
      </article>
      
    </>
  );
}

export default AddEventCard;
