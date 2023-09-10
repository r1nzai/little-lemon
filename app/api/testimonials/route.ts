import { NextResponse } from "next/server";

const data = [
  {
    rating: 5,
    comment:
      "This place is a Mediterranean paradise! From the inviting ambiance to the flavorful lamb kebabs and zesty tabbouleh, every bite was a delight. Attentive staff made it even better!",
  },
  {
    rating: 4,
    comment:
      "Exceptional Mediterranean cuisine! Silky hummus, perfect paella, and top-notch service make every visit memorable. A must for Mediterranean food lovers.",
  },
  {
    rating: 3,
    comment:
      "Decent, but didn't meet high expectations. Dim lighting, okay chicken shawarma, and slightly slow service. Other places offer better Mediterranean food. ",
  },
  {
    rating: 5,
    comment:
      "A Mediterranean culinary adventure! Falafel wraps, grilled octopus, and knowledgeable staff make dining here a true journey.",
  },
];
export const GET = async () => {
  const users = await fetch("https://randomuser.me/api?results=4", {
    cache: "no-cache",
  }).then((res) => res.json());
  const usersWithReviews = users.results.map((user: User, index: number) => ({
    name: user.name.first,
    picture: user.picture.large,
    ...data[index],
  }));
  return NextResponse.json(usersWithReviews);
};
type User = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DobOrRegistered;
  registered: DobOrRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};
interface Name {
  title: string;
  first: string;
  last: string;
}
interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}
interface Street {
  number: number;
  name: string;
}
interface Coordinates {
  latitude: string;
  longitude: string;
}
interface Timezone {
  offset: string;
  description: string;
}
interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
interface DobOrRegistered {
  date: string;
  age: number;
}
interface Id {
  name: string;
  value: string;
}
interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
