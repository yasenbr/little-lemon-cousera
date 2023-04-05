import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReservationForm.css";
import { submitAPI } from "../../bookingAPI";

function ReservationForm(data) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    data.availableTimes.map((times) => <option>{times}</option>)
  );

  const formSubmit = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    tel: tel,
    people: people,
    date: date,
    time: time,
    occasion: occasion,
    preferences: preferences,
    comments: comments,
  };
  console.log("22:", formSubmit);

  function handleSubmit(formSubmit) {
    const res = submitAPI(formSubmit);
    console.log("24:", res);
  }

  return (
    <section className="reservation-form-container">
      <h1>Reservation form</h1>
      <form className="reservation-form" onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label> <br></br>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={50}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label> <br></br>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            required
            minLength={4}
            maxLength={200}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="phonenum">Phone Number</label> <br></br>
          <input
            type="tel"
            id="phonenum"
            placeholder="(xxx)-xxx-xxxx"
            value={tel}
            required
            minLength={10}
            maxLength={25}
            onChange={(e) => setTel(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="people">Number of People</label> <br></br>
          <input
            type="number"
            id="people"
            placeholder="Number of People"
            value={people}
            required
            min={1}
            max={100}
            onChange={(e) => setPeople(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="date">Select Date</label> <br></br>
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="time">Select Time</label> <br></br>
          <select
            type="time"
            id="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {finalTime}
          </select>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label> <br></br>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferences">Seating preferences</label> <br></br>
          <select
            id="preferences"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          >
            <option>None</option>
            <option>Indoors</option>
            <option>Outdoor (Patio)</option>
            <option>Outdoor (Sidewalk)</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">Additional Comments</label> <br></br>
          <textarea
            id="comments"
            rows={8}
            cols={50}
            placeholder="Additional Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>

        <div className="reservation-note">
          <small>
            <p>
              Note: You cannot edit your reservation after submission. Please
              double-check your answer before submitting your reservation
              request.
            </p>
          </small>
        </div>
        <div>
          <Link type="submit" className="reservation-action-button" to="/">
            Book Table
          </Link>
        </div>
      </form>
    </section>
  );
}

export default ReservationForm;
