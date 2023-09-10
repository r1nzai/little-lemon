export interface Booking {
  date: string;
  time: string;
  guests: number;
  occassion: "Birthday" | "Anniversary" | "Engagement";
}
