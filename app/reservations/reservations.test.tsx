import { submitAPI } from "@/utils/availableTimeHelper";
import { vi, it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import Reservations from "./page";
import "@testing-library/jest-dom/vitest";
vi.mock("next/font/google", () => ({
  Markazi_Text: () => ({ className: "markazi" }),
  Karla: () => ({ className: "karla" }),
}));
describe("Reservations", () => {
  it("renders the page", async () => {
    const { container } = render(<Reservations />);
    const chooseDate = container.querySelector("label[for='date']");
    expect(chooseDate).toHaveTextContent("Choose a date");
    const chooseTime = container.querySelector("label[for='time']");
    expect(chooseTime).toHaveTextContent("Choose a time");
    const chooseGuests = container.querySelector("label[for='guests']");
    expect(chooseGuests).toHaveTextContent("Number of guests");
    const chooseOccasion = container.querySelector("label[for='occasion']");
    expect(chooseOccasion).toHaveTextContent("Occasion");
    const chooseDateInput = container.querySelector("input#date");
    expect(chooseDateInput).toHaveAttribute("type", "date");
    expect(chooseDateInput).toHaveAttribute("name", "date");
    expect(chooseDateInput).toHaveAttribute("id", "date");
    expect(chooseDateInput).toHaveAttribute("required", "");
    const chooseTimeInput = container.querySelector("select#time");
    expect(chooseTimeInput).toHaveAttribute("name", "time");
    expect(chooseTimeInput).toHaveAttribute("id", "time");
    expect(chooseTimeInput).toHaveAttribute("required", "");
    const chooseGuestsInput = container.querySelector("input#guests");
    expect(chooseGuestsInput).toHaveAttribute("type", "number");
    expect(chooseGuestsInput).toHaveAttribute("name", "guests");
    expect(chooseGuestsInput).toHaveAttribute("id", "guests");
    expect(chooseGuestsInput).toHaveAttribute("required", "");
    const chooseOccasionInput = container.querySelector("select#occasion");
    expect(chooseOccasionInput).toHaveAttribute("name", "occasion");
    expect(chooseOccasionInput).toHaveAttribute("id", "occasion");
    expect(chooseOccasionInput).toHaveAttribute("required", "");
    const submitButton = container.querySelector("button[type='submit']");
    expect(submitButton).toHaveTextContent("Reserve");
  });
  it("validates the form", async () => {
    const { container } = render(<Reservations />);
    const chooseDateInput = container.querySelector("input#date");
    expect(chooseDateInput).toHaveAttribute("required", "");
    const chooseTimeInput = container.querySelector("select#time");
    expect(chooseTimeInput).toHaveAttribute("required", "");
    const chooseGuestsInput = container.querySelector("input#guests");
    expect(chooseGuestsInput).toHaveAttribute("required", "");
    const chooseOccasionInput = container.querySelector("select#occasion");
    expect(chooseOccasionInput).toHaveAttribute("required", "");
  });
  it("submitAPI returns true", () => {
    const formData = {
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    } as const;
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
