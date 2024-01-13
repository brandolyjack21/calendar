import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function ModalDetail({ data, ViewDetail, changeStatus }) {
  const [dataEvent, setDataEvent] = useState([]);

  const listDetailOfThePeople = () => {
    if (data) {
      const listOfThePeople = Array.from({ length: data.count }, () => ({
        name: faker.person.fullName(),
        count: data.count,
        booking: data.booking,
        day: data.day,
        time: data.time,
      }));
      setDataEvent(listOfThePeople);
    }
  };

  const extractTime = (time) => {
    const date = `${time[0]}${time[1]}`;
    if (Number(date) <= 11) {
      return "AM";
    } else {
      return "PM";
    }
  };

  useEffect(() => {
    listDetailOfThePeople();
  }, [ViewDetail]);
  return (
    <div>
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
                <span
                  onClick={changeStatus}
                  className="material-symbols-outlined"
                >
                  close
                </span>
              </div>
            </div>
            <div className="modal-detail-header-date">
              Lunes {data ? data.day + 1 : "10"} de septiembre del 2024
            </div>
            <div className="modal-detail-header-search">
              <input placeholder="Buscar..." type="text" />
            </div>
          </article>
          <article className="modal-detail-body">
            {dataEvent.length > 0 &&
              dataEvent.map((data, index) => (
                <div key={index} className="modal-detail-body-card">
                  <div className="modal-detail-body-card-header">
                    <div className="modal-detail-doby-card-header-icon"></div>
                    <div className="modal-detail-doby-card-header-descrition">
                      <div className="modal-detail-doby-card-header-descrition-icon">
                        <span className="material-symbols-outlined">
                          restaurant
                        </span>
                      </div>
                      <div className="modal-detail-doby-card-header-descrition-name">
                        <span>{data.name}</span>
                        <span>{data.count} sibaritas</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-detail-doby-card-data">
                    <div>$600</div>
                    <div>
                      {`${data.time[0]}${data.time[1]}  `}{" "}
                      {extractTime(data.time)} {data.day + 1} de septiembre
                    </div>
                    <div>{data.count} personas</div>
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
              ))}
          </article>
        </section>
      </article>
    </div>
  );
}

export default ModalDetail;
