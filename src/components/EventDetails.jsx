import React, { useEffect } from "react";
import { useState } from "react";
import AddEventCard from "./addEventCard";

function EventDetails({ day, extractDataForCalendar }) {
  const [dataEvent, setDataEvent] = useState([]);
  const [updateNewData, setUpdateNewData] = useState(false);
  const [visibilityCardEvents, setVisivilityCardEvents] = useState(false);
  const [ViewDetail, setViewDetail] = useState(false);

  const disguiseCardEvent = () => {
    setVisivilityCardEvents(!visibilityCardEvents);
  };

  const bringEventData = (data) => {
    setUpdateNewData(!updateData);
  };

  const updateData = () => {
    const calendarData = JSON.parse(localStorage.getItem("calendarData"));
    calendarData.map((date, index) => {
      if (index === day - 1) {
        setDataEvent(date.value);
      }
    });
  };

  const extractTime = (time) => {
    const date = `${time[0]}${time[1]}`;
    if (Number(date) <= 11) {
      return "AM";
    } else {
      return "PM";
    }
  };

  const prepareDataForCalendar = () => {
    extractDataForCalendar();
  };

  useEffect(() => {
    updateData();
    prepareDataForCalendar();
  }, [updateNewData, visibilityCardEvents]);

  useEffect(() => {
    updateData();
  }, [day]);
  return (
    <>
      <section className="eventDetails">
        <article className="eventDetails-header">
          <span>Listas de eventos</span>
          <div className="icon-calendar-container-header">
            <span className="material-symbols-outlined">calendar_month</span>
            {day} de Sept
          </div>
        </article>
        <article className="description-eventDetails">
          <h2>Cena Chef</h2>
          <div className="eventDetails-data">
            <span>Total de cupos: 50 (9 presencial / 36 Pickup)</span>
            <span>Cupos reservados: 45 (9 presencial / 36 Pickup)</span>
            <span>Disponibles: 5 (9 presencial / 36 Pickup)</span>
          </div>
        </article>
        <ul className="container-list-events-day">
          {dataEvent.length > 0 ? (
            dataEvent.map(
              (data, index) =>
                index < 8 && (
                  <article key={index} className="container-events-day">
                    <div className="container-icon-fork">
                      {data.bookingData === "Presencial" ? (
                        <span className="material-symbols-outlined">
                          restaurant
                        </span>
                      ) : (
                        <span className="material-symbols-outlined">
                          shopping_bag
                        </span>
                      )}
                    </div>
                    <div className="container-amountOfPeople">
                      <span style={{ color: "white" }}>
                        {`${data.time[0]}${data.time[1]}  `}{" "}
                        {extractTime(data.time)}
                      </span>
                      <div className="amountOfPeople">
                        {data.count}/{data.count + 2}{" "}
                        <span className="material-symbols-outlined">
                          group{" "}
                          <span className="material-symbols-outlined material-symbols-outlined-checkbox">
                            checkbook
                          </span>
                        </span>
                      </div>
                      <div
                        onClick={() => setViewDetail(!ViewDetail)}
                        className="container-butoon-detalle"
                      >
                        Detalle
                      </div>
                    </div>
                  </article>
                )
            )
          ) : (
            <></>
          )}
        </ul>
        <article className="container-addEventButton">
          <div
            onClick={() => setVisivilityCardEvents(!visibilityCardEvents)}
            className="addEventButton"
          >
            + Agregar evento
          </div>
        </article>
      </section>

      <section
        className={
          visibilityCardEvents
            ? "addEventCard addEventCard-visible"
            : "addEventCard"
        }
      >
        <AddEventCard
          day={day}
          bringEventData={bringEventData}
          disguiseCardEvent={disguiseCardEvent}
        />
      </section>

      <article
        className={
          ViewDetail
            ? "container-modal-detail container-modal-detail-visible"
            : "container-modal-detail"
        }
      >
        <section className="modal-detail">
          <article className="modal-detail-header">
            <div className="modal-detail-header-icon">
              <div className="container-icon-material-symbols-outlined">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div className="modal-detail-header-type">
                <div>Carlos Perez</div>
                <div>6 sibaritas</div>
              </div>
              <div>
                <span onClick={() => setViewDetail(!ViewDetail)} className="material-symbols-outlined">close</span>
              </div>
            </div>
            <div className="modal-detail-header-date">
              Lunes 15 de septiembre del 2024
            </div>
            <div className="modal-detail-header-search">
              <input placeholder="Buscar..." type="text" />
            </div>
          </article>
          <article className="modal-detail-body">
            <div className="modal-detail-body-card">
              <div className="modal-detail-body-card-header">
                <div className="modal-detail-doby-card-header-icon"></div>
                <div className="modal-detail-doby-card-header-descrition">
                  <div className="modal-detail-doby-card-header-descrition-icon">
                    <span className="material-symbols-outlined">restaurant</span>
                  </div>
                  <div className="modal-detail-doby-card-header-descrition-name">
                    <span>Carlos Perez</span>
                    <span>6 sibaritas</span>
                  </div>
                </div>
              </div>
              <div className="modal-detail-doby-card-data">
                <div>$600</div>
                <div>9pm 15 de septiembre</div>
                <div>6 personas</div>
                <div>Extra</div>
              </div>
              <div className="modal-detail-doby-card-options">
                <button className="modal-detail-doby-card-options-button">
                  ver
                </button>
                <span className="modal-detail-doby-card-options-approved">
                  aprobado
                  <div className="modal-detail-doby-card-options-approved-focus"></div>
                </span>
              </div>
            </div>
            <div className="modal-detail-body-card">
              <div className="modal-detail-body-card-header">
                <div className="modal-detail-doby-card-header-icon"></div>
                <div className="modal-detail-doby-card-header-descrition">
                  <div className="modal-detail-doby-card-header-descrition-icon">
                    <span className="material-symbols-outlined">restaurant</span>
                  </div>
                  <div className="modal-detail-doby-card-header-descrition-name">
                    <span>Carlos Perez</span>
                    <span>6 sibaritas</span>
                  </div>
                </div>
              </div>
              <div className="modal-detail-doby-card-data">
                <div>$600</div>
                <div>9pm 15 de septiembre</div>
                <div>6 personas</div>
                <div>Extra</div>
              </div>
              <div className="modal-detail-doby-card-options">
                <button className="modal-detail-doby-card-options-button">
                  ver
                </button>
                <span className="modal-detail-doby-card-options-approved">
                  aprobado
                  <div className="modal-detail-doby-card-options-approved-focus"></div>
                </span>
              </div>
            </div>
            <div className="modal-detail-body-card">
              <div className="modal-detail-body-card-header">
                <div className="modal-detail-doby-card-header-icon"></div>
                <div className="modal-detail-doby-card-header-descrition">
                  <div className="modal-detail-doby-card-header-descrition-icon">
                    <span className="material-symbols-outlined">restaurant</span>
                  </div>
                  <div className="modal-detail-doby-card-header-descrition-name">
                    <span>Carlos Perez</span>
                    <span>6 sibaritas</span>
                  </div>
                </div>
              </div>
              <div className="modal-detail-doby-card-data">
                <div>$600</div>
                <div>9pm 15 de septiembre</div>
                <div>6 personas</div>
                <div>Extra</div>
              </div>
              <div className="modal-detail-doby-card-options">
                <button className="modal-detail-doby-card-options-button">
                  ver
                </button>
                <span className="modal-detail-doby-card-options-approved">
                  aprobado
                  <div className="modal-detail-doby-card-options-approved-focus"></div>
                </span>
              </div>
            </div>
          </article>
        </section>
      </article>
    </>
  );
}

export default EventDetails;
