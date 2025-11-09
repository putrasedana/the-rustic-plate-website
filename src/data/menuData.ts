import { MenuItem } from "../types";

const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,webp}", {
  eager: true,
}) as Record<string, { default: string }>;

const imageList = Object.values(images).map((img) => img.default);

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Heirloom Tomato Bruschetta",
    description:
      "Grilled sourdough topped with marinated heirloom tomatoes, fresh basil, and aged balsamic",
    price: "12",
    category: "starters",
    isVegetarian: true,
    image: imageList[0],
  },
  {
    id: "2",
    name: "Wild Mushroom Soup",
    description:
      "Creamy blend of seasonal wild mushrooms with truffle oil and fresh herbs",
    price: "10",
    category: "starters",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[1],
  },
  {
    id: "3",
    name: "Crispy Calamari",
    description: "Lightly fried calamari with spicy aioli and lemon",
    price: "14",
    category: "starters",
    isSpicy: true,
    image: imageList[2],
  },
  {
    id: "4",
    name: "Artisan Cheese Board",
    description:
      "Selection of local cheeses, house-made jam, honey, and crackers",
    price: "16",
    category: "starters",
    isVegetarian: true,
    image: imageList[3],
  },

  {
    id: "5",
    name: "Herb-Roasted Chicken",
    description:
      "Half chicken roasted with fresh rosemary and thyme, served with garlic mashed potatoes and seasonal vegetables",
    price: "24",
    category: "mains",
    isGlutenFree: true,
    image: imageList[4],
  },
  {
    id: "6",
    name: "Pan-Seared Salmon",
    description:
      "Wild-caught salmon with lemon butter sauce, asparagus, and herb quinoa",
    price: "28",
    category: "mains",
    isGlutenFree: true,
    image: imageList[5],
  },
  {
    id: "7",
    name: "Braised Short Rib",
    description:
      "Slow-braised beef short rib with red wine reduction, root vegetables, and creamy polenta",
    price: "32",
    category: "mains",
    isGlutenFree: true,
    image: imageList[6],
  },
  {
    id: "8",
    name: "Butternut Squash Risotto",
    description:
      "Creamy arborio rice with roasted butternut squash, sage, and parmesan",
    price: "22",
    category: "mains",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[7],
  },
  {
    id: "9",
    name: "Grilled Pork Chop",
    description:
      "Heritage pork chop with apple chutney, Brussels sprouts, and sweet potato mash",
    price: "26",
    category: "mains",
    isGlutenFree: true,
    image: imageList[8],
  },
  {
    id: "10",
    name: "Wild Mushroom Pasta",
    description:
      "House-made fettuccine with wild mushrooms, garlic, white wine, and fresh parsley",
    price: "20",
    category: "mains",
    isVegetarian: true,
    image: imageList[9],
  },

  {
    id: "11",
    name: "Garlic Mashed Potatoes",
    description: "Creamy Yukon gold potatoes with roasted garlic and butter",
    price: "7",
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[10],
  },
  {
    id: "12",
    name: "Roasted Seasonal Vegetables",
    description: "Market-fresh vegetables roasted with olive oil and herbs",
    price: "8",
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[11],
  },
  {
    id: "13",
    name: "Brussels Sprouts",
    description: "Crispy Brussels sprouts with bacon and balsamic glaze",
    price: "9",
    category: "sides",
    isGlutenFree: true,
    image: imageList[12],
  },
  {
    id: "14",
    name: "House Salad",
    description:
      "Mixed greens with cherry tomatoes, cucumber, and house vinaigrette",
    price: "6",
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[13],
  },

  {
    id: "15",
    name: "Warm Apple Crisp",
    description:
      "Spiced apple crisp with vanilla ice cream and caramel drizzle",
    price: "9",
    category: "desserts",
    isVegetarian: true,
    image: imageList[14],
  },
  {
    id: "16",
    name: "Chocolate Lava Cake",
    description:
      "Rich chocolate cake with molten center, served with fresh berries",
    price: "10",
    category: "desserts",
    isVegetarian: true,
    image: imageList[15],
  },
  {
    id: "17",
    name: "Seasonal Fruit Tart",
    description:
      "Buttery tart shell filled with pastry cream and fresh seasonal fruits",
    price: "8",
    category: "desserts",
    isVegetarian: true,
    image: imageList[16],
  },
  {
    id: "18",
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar crust",
    price: "9",
    category: "desserts",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[17],
  },

  {
    id: "19",
    name: "Craft Beer Selection",
    description: "Rotating selection of local craft beers",
    price: "7",
    category: "drinks",
    image: imageList[18],
  },
  {
    id: "20",
    name: "House Wine",
    description: "Red, white, or rosé by the glass",
    price: "9",
    category: "drinks",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[19],
  },
  {
    id: "21",
    name: "Seasonal Cocktail",
    description: "Ask your server about our rotating seasonal cocktails",
    price: "12",
    category: "drinks",
    image: imageList[20],
  },
  {
    id: "22",
    name: "Fresh-Squeezed Lemonade",
    description: "House-made lemonade with fresh herbs",
    price: "5",
    category: "drinks",
    isVegetarian: true,
    isGlutenFree: true,
    image: imageList[21],
  },
];
