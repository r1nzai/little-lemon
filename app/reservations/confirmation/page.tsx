"use client";
import Confirm from "@/components/Icons/Confirm";
import { karla, markazi } from "@/fonts";
import { Booking } from "@/types/Booking";
import { cx } from "@/utils/cx";
import React, { useEffect } from "react";
export default function Confirmation() {
  const [reservation, setReservation] = React.useState<Booking>();
  useEffect(() => {
    const reservationData = localStorage.getItem("reservation");
    if (!reservationData) {
      return;
    }
    const reservation = JSON.parse(reservationData) as Booking;
    setReservation(reservation);
  }, []);

  return (
    <main className="min-h-[60dvh] w-full px-5 md:px-40 2xl:px-80 flex items-center justify-center">
      {reservation ? (
        <section className="flex flex-col items-center gap-5">
          <h1 className={cx("text-6xl", markazi.className)}>Confirmation</h1>
          <div className="text-primary-main">
            <Confirm />
          </div>
          <p className={cx(karla.className, "text-2xl text-center leading-10")}>
            You have made a reservation <br />
            for <strong>{reservation.guests}</strong> guest(s) <br />
            on <strong>{reservation.date}</strong> at{" "}
            <strong>{reservation.time}</strong>
            <br />
            for <strong>{reservation.occassion}</strong>.
          </p>
        </section>
      ) : (
        <section className="">
          <h1 className={cx("text-6xl", markazi.className)}>
            Sorry, you don't have a reservation
          </h1>
        </section>
      )}
    </main>
  );
}
