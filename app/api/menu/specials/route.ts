import { NextResponse } from "next/server";
const data = [
  {
    image: "/assets/images/menu/1.jpg",
    title: "Greek Salad",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    price: "$12.99",
  },
  {
    image: "/assets/images/menu/2.jpg",
    title: "Bruchetta",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    price: "$5.99",
  },
  {
    image: "/assets/images/menu/3.jpg",
    title: "Lemon Dessert",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
  },
];
export const GET = () => {
  return NextResponse.json(data);
};
