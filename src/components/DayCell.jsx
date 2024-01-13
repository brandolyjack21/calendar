import React, { useEffect, useState } from "react";

function DayCell({ day, data, actualizarDia }) {

  const [calendarData, setCalendarData] = useState({
    Presencial: "",
    Pickup: "",
    countPresencial: 0,
    countPickup: 0,
    peoplePresencial: 0,
    peoplePickup: 0,
  });

  const handleClick = () => {
    actualizarDia(day);

    localStorage.setItem('selected', JSON.stringify(day))
    const selected = JSON.parse(localStorage.getItem('selected'))
  };

  const builder = () => {
    const dataOfDay = {
      Presencial: "",
      Pickup: "",
      countPresencial: 0,
      countPickup: 0,
      peoplePresencial: 0,
      peoplePickup: 0,
      alert:0
    };
    data.map((data) => {
      if (data.bookingData === "Presencial") {
        dataOfDay.Presencial = "Presencial";
        dataOfDay.countPresencial = dataOfDay.countPresencial + 1;
        dataOfDay.peoplePresencial = dataOfDay.peoplePresencial + data.count;
        dataOfDay.alert = 1
      }
      if (data.bookingData === "Pickup") {
        dataOfDay.Pickup = "Pickup";
        dataOfDay.countPickup = dataOfDay.countPickup + 1;
        dataOfDay.peoplePickup = dataOfDay.peoplePickup + data.count;
        dataOfDay.alert = 1
      }
    });
    setCalendarData(dataOfDay);
  };
  useEffect(() => {
    builder();
  }, [data]);

  return (
    <>
      <section onClick={handleClick} className={calendarData.alert > 0 ? "DayCell-container DayCell-container-color":"DayCell-container"}>
        <span className="numberDay">{day}</span>
        <section className="container-eventos">
          {calendarData.Presencial ? (
            <article className="eventos">
              <span className="eventos-count">
                {calendarData.countPresencial}x
              </span>
              <span className="material-symbols-outlined">restaurant</span>
              <span className="eventos-participants">
                {calendarData.peoplePresencial}
              </span>
            </article>
          ) : (
            <></>
          )}
          {calendarData.Pickup ? (
            <article className="eventos">
              <span className="eventos-count">{calendarData.countPickup}x</span>
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="eventos-participants">
                {calendarData.peoplePickup}
              </span>
            </article>
          ) : (
            <></>
          )}
        </section>
      </section>
    </>
  );
}

export default DayCell;
