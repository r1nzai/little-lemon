"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import { markazi } from "@/fonts";
import { fetchAPI } from "@/utils/availableTimeHelper";
import { cx } from "@/utils/cx";
import { FormEventHandler, useState } from "react";
export default function Reservations() {
  const handleReservation: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const date = formData.get("date");
    const time = formData.get("time");
    const guests = formData.get("guests");
    const occasion = formData.get("occasion");
    localStorage.setItem(
      "reservation",
      JSON.stringify({
        date,
        time,
        guests,
        occasion,
      }),
    );
    window.location.href = "/reservations/confirmation";
  };
  const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

  return (
    <main className="flex min-h-screen flex-col items-center w-full px-5 md:px-40 2xl:px-80 gap-5">
      <h1 className={cx(markazi.className, "text-6xl")}>
        Make your Reservation
      </h1>
      <form
        className="flex flex-col gap-5 w-full lg:w-3/4"
        onSubmit={handleReservation}
      >
        <label htmlFor="date">Choose a date</label>
        <Input
          type="date"
          name="date"
          id="date"
          required
          min={new Date().toISOString().slice(0, 10)}
          onBlur={(e) => {
            setAvailableTimes(fetchAPI(new Date(e.target.value)));
          }}
          defaultValue={new Date().toISOString().slice(0, 10)}
        />
        <label htmlFor="time">Choose a time</label>
        <Select name="time" id="time" required>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
        <label htmlFor="guests">Number of guests</label>
        <Input
          required
          type="number"
          name="guests"
          id="guests"
          min={1}
          defaultValue={1}
        />
        <label htmlFor="occasion">Occasion</label>
        <Select name="occasion" id="occasion" required>
          <Select.Option value="birthday">Birthday</Select.Option>
          <Select.Option value="anniversary">Anniversary</Select.Option>
          <Select.Option value="engagement">Engagement</Select.Option>
        </Select>
        <Button type="submit">Reserve</Button>
      </form>
    </main>
  );
}
