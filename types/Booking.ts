export interface Booking {
  date: string;
  time: string;
  guests: number;
  occasion: "Birthday" | "Anniversary" | "Engagement";
}
