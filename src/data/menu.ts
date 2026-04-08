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
    image: 'https://picsum.photos/seed/paneer/800/600',
    featured: true,
  },
  {
    id: '2',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with succulent chicken, saffron, and exotic spices.',
    price: 15.99,
    category: 'Non-Veg',
    image: 'https://picsum.photos/seed/biryani/800/600',
    featured: true,
  },
  {
    id: '3',
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, roasted to perfection in a clay oven.',
    price: 14.99,
    category: 'Non-Veg',
    image: 'https://picsum.photos/seed/tandoori/800/600',
    featured: true,
  },
  {
    id: '4',
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils with butter and cream.',
    price: 10.99,
    category: 'Veg',
    image: 'https://picsum.photos/seed/dal/800/600',
  },
  {
    id: '5',
    name: 'Butter Naan',
    description: 'Soft and fluffy leavened bread with a generous brush of butter.',
    price: 2.99,
    category: 'Veg',
    image: 'https://picsum.photos/seed/naan/800/600',
  },
  {
    id: '6',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink blended with sweet mango pulp.',
    price: 4.99,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/lassi/800/600',
  },
  {
    id: '7',
    name: 'Mutton Rogan Josh',
    description: 'Tender mutton cooked in a rich, spicy red gravy.',
    price: 18.99,
    category: 'Non-Veg',
    image: 'https://picsum.photos/seed/mutton/800/600',
  },
  {
    id: '8',
    name: 'Veg Manchurian',
    description: 'Deep-fried vegetable balls in a tangy and spicy gravy.',
    price: 11.99,
    category: 'Veg',
    image: 'https://picsum.photos/seed/manchurian/800/600',
  },
  {
    id: '9',
    name: 'Virgin Mojito',
    description: 'Refreshing blend of lime, mint, and soda.',
    price: 5.99,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/mojito/800/600',
  },
];
