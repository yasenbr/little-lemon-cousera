import React, { useReducer } from "react";
import "./Reservation.css";
import ReservationForm from "./ReservationForm";
import { fetchAPI } from "../../bookingAPI";

function Reservation() {

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <header>
      <article className="reservation-page-Container">
        <section className="reservation-page-heading-text">
          <ReservationForm
            availableTimes={availableTimes}
            updateTimes={dispatch}
          />
        </section>
      </article>
    </header>
  );
}

export default Reservation;
