export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Veg' | 'Non-Veg' | 'Drinks';
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Paneer Butter Masala',
    description: 'Creamy tomato-based curry with soft paneer cubes and aromatic spices.',
    price: 12.99,
    category: 'Veg',
    image: 'https://palatesdesire.com/wp-content/uploads/2021/03/paneer-butter-masala@palates_desire.jpg',
    featured: true,
  },
  {
    id: '2',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with succulent chicken, saffron, and exotic spices.',
    price: 15.99,
    category: 'Non-Veg',
    image: 'https://www.krupalufoods.com/wp-content/uploads/2024/11/Untitled-design-12.jpg',
    featured: true,
  },
  {
    id: '3',
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, roasted to perfection in a clay oven.',
    price: 14.99,
    category: 'Non-Veg',
    image: 'https://tse2.mm.bing.net/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3',
    featured: true,
  },
  {
    id: '4',
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils with butter and cream.',
    price: 10.99,
    category: 'Veg',
    image: 'https://img.freepik.com/premium-photo/veg-food-plate-placed-pristine-white-wooden-table-restaurant-setting-emphasize-textu_777526-21112.jpg?w=1060',
  },
  {
    id: '5',
    name: 'Butter Naan',
    description: 'Soft and fluffy leavened bread with a generous brush of butter.',
    price: 2.99,
    category: 'Veg',
    image: 'https://img.freepik.com/premium-photo/maharashtraian-veg-thali-from-indian-cuisine-food-platter-consists-variety-veggies-lentils-jeera-rice-roti-sweet-dish-curd-pickle-etc-selective-focus_726363-593.jpg?w=1380',
  },
  {
    id: '6',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink blended with sweet mango pulp.',
    price: 4.99,
    category: 'Drinks',
    image: 'https://img.freepik.com/premium-photo/table-with-drinks-drinks-drink-it_1041015-23470.jpg',
  },
  {
    id: '7',
    name: 'Mutton Rogan Josh',
    description: 'Tender mutton cooked in a rich, spicy red gravy.',
    price: 18.99,
    category: 'Non-Veg',
    image: 'https://thumbs.dreamstime.com/b/spicy-masala-mutton-fry-indian-food-steamed-rice-butter-chicken-dinner-table-restaurant-style-dinner-non-veg-thali-spicy-masala-202055314.jpg?w=768',
  },
  {
    id: '8',
    name: 'Veg Manchurian',
    description: 'Deep-fried vegetable balls in a tangy and spicy gravy.',
    price: 11.99,
    category: 'Veg',
    image: 'https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg',
  },
  {
    id: '9',
    name: 'Virgin Mojito',
    description: 'Refreshing blend of lime, mint, and soda.',
    price: 5.99,
    category: 'Drinks',
    image: 'https://www.illago.com.au/content/images/menus/drinks.jpg',
  },
];
