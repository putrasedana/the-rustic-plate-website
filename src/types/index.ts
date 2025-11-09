export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "starters" | "mains" | "sides" | "desserts" | "drinks";
  image?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
}
