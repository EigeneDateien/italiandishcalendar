export interface ItalianDish {
  id: number;
  name: string;
  description: string;
  region: string;
  image: string;
  ingredients: string[];
  servingTime: string;
}

export const italianDishes: Record<number, ItalianDish> = {
  1: {
    id: 1,
    name: "Pasta Carbonara",
    description: "A classic Roman pasta dish made with eggs, Pecorino Romano cheese, guanciale, and black pepper.",
    region: "Lazio",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Spaghetti", "Guanciale", "Eggs", "Pecorino Romano", "Black Pepper"],
    servingTime: "Lunch"
  },
  2: {
    id: 2,
    name: "Pizza Margherita",
    description: "The iconic Neapolitan pizza topped with tomato sauce, mozzarella, and fresh basil.",
    region: "Campania",
    image: "https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emElMjBtYXJnaGVyaXRhfGVufDF8fHx8MTc2OTI3NTA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Pizza Dough", "San Marzano Tomatoes", "Mozzarella", "Basil", "Olive Oil"],
    servingTime: "Dinner"
  },
  3: {
    id: 3,
    name: "Risotto alla Milanese",
    description: "Creamy saffron risotto from Milan, rich and golden in color.",
    region: "Lombardia",
    image: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmlzb3R0b3xlbnwxfHx8fDE3NjkyNzUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Arborio Rice", "Saffron", "Butter", "Parmesan", "Beef Broth"],
    servingTime: "Dinner"
  },
  4: {
    id: 4,
    name: "Tiramisu",
    description: "The beloved Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    region: "Veneto",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Ladyfingers", "Mascarpone", "Espresso", "Cocoa Powder", "Eggs"],
    servingTime: "Dessert"
  },
  5: {
    id: 5,
    name: "Lasagna al Forno",
    description: "Baked layers of pasta sheets with rich Bolognese sauce and creamy béchamel.",
    region: "Emilia-Romagna",
    image: "https://images.unsplash.com/photo-1646077978608-65ed63765302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbGFzYWduYXxlbnwxfHx8fDE3NjkyNTEzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Lasagna Sheets", "Ground Beef", "Béchamel Sauce", "Tomato Sauce", "Parmesan"],
    servingTime: "Dinner"
  },
  6: {
    id: 6,
    name: "Bruschetta",
    description: "Toasted bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.",
    region: "Lazio",
    image: "https://images.unsplash.com/photo-1626634896715-88334e9da24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYnJ1c2NoZXR0YXxlbnwxfHx8fDE3NjkyNzUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Bread", "Tomatoes", "Garlic", "Basil", "Olive Oil"],
    servingTime: "Appetizer"
  },
  7: {
    id: 7,
    name: "Osso Buco",
    description: "Braised veal shanks cooked with vegetables, white wine, and broth from Milan.",
    region: "Lombardia",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Veal Shanks", "White Wine", "Tomatoes", "Carrots", "Gremolata"],
    servingTime: "Dinner"
  },
  8: {
    id: 8,
    name: "Panna Cotta",
    description: "A silky Italian dessert made with sweetened cream thickened with gelatin.",
    region: "Piemonte",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Cream", "Sugar", "Gelatin", "Vanilla", "Berry Sauce"],
    servingTime: "Dessert"
  },
  9: {
    id: 9,
    name: "Arancini",
    description: "Sicilian rice balls stuffed with ragù, peas, and mozzarella, then breaded and fried.",
    region: "Sicilia",
    image: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmlzb3R0b3xlbnwxfHx8fDE3NjkyNzUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Risotto Rice", "Ragù", "Mozzarella", "Breadcrumbs", "Peas"],
    servingTime: "Appetizer"
  },
  10: {
    id: 10,
    name: "Caprese Salad",
    description: "Simple and fresh salad with tomatoes, mozzarella, and basil drizzled with olive oil.",
    region: "Campania",
    image: "https://images.unsplash.com/photo-1626634896715-88334e9da24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYnJ1c2NoZXR0YXxlbnwxfHx8fDE3NjkyNzUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive Oil", "Balsamic"],
    servingTime: "Lunch"
  },
  11: {
    id: 11,
    name: "Pasta all'Amatriciana",
    description: "Traditional pasta from Amatrice with tomato sauce, guanciale, and Pecorino cheese.",
    region: "Lazio",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Bucatini", "Guanciale", "Tomatoes", "Pecorino", "Chili Pepper"],
    servingTime: "Lunch"
  },
  12: {
    id: 12,
    name: "Gelato",
    description: "Italian ice cream known for its intense flavor and dense, creamy texture.",
    region: "Various",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Milk", "Cream", "Sugar", "Egg Yolks", "Flavorings"],
    servingTime: "Dessert"
  },
  13: {
    id: 13,
    name: "Saltimbocca",
    description: "Roman veal dish with prosciutto and sage, cooked in white wine and butter.",
    region: "Lazio",
    image: "https://images.unsplash.com/photo-1646077978608-65ed63765302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbGFzYWduYXxlbnwxfHx8fDE3NjkyNTEzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Veal", "Prosciutto", "Sage", "White Wine", "Butter"],
    servingTime: "Dinner"
  },
  14: {
    id: 14,
    name: "Focaccia",
    description: "Flat oven-baked bread similar to pizza dough, topped with olive oil and herbs.",
    region: "Liguria",
    image: "https://images.unsplash.com/photo-1626634896715-88334e9da24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYnJ1c2NoZXR0YXxlbnwxfHx8fDE3NjkyNzUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Flour", "Yeast", "Olive Oil", "Rosemary", "Sea Salt"],
    servingTime: "Appetizer"
  },
  15: {
    id: 15,
    name: "Pasta Puttanesca",
    description: "Bold Neapolitan pasta with tomatoes, olives, capers, and anchovies.",
    region: "Campania",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Spaghetti", "Tomatoes", "Olives", "Capers", "Anchovies"],
    servingTime: "Dinner"
  },
  16: {
    id: 16,
    name: "Bistecca alla Fiorentina",
    description: "Thick T-bone steak, grilled rare and seasoned simply with salt and pepper.",
    region: "Toscana",
    image: "https://images.unsplash.com/photo-1646077978608-65ed63765302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbGFzYWduYXxlbnwxfHx8fDE3NjkyNTEzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["T-bone Steak", "Olive Oil", "Sea Salt", "Black Pepper", "Lemon"],
    servingTime: "Dinner"
  },
  17: {
    id: 17,
    name: "Minestrone",
    description: "Hearty vegetable soup with beans, pasta, and seasonal vegetables.",
    region: "Various",
    image: "https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emElMjBtYXJnaGVyaXRhfGVufDF8fHx8MTc2OTI3NTA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Vegetables", "Beans", "Pasta", "Tomatoes", "Parmesan"],
    servingTime: "Lunch"
  },
  18: {
    id: 18,
    name: "Pesto Genovese",
    description: "Vibrant green sauce from Genoa made with basil, pine nuts, and Parmesan.",
    region: "Liguria",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Basil", "Pine Nuts", "Parmesan", "Garlic", "Olive Oil"],
    servingTime: "Lunch"
  },
  19: {
    id: 19,
    name: "Cannoli",
    description: "Sicilian pastry tubes filled with sweet ricotta cream and chocolate chips.",
    region: "Sicilia",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Pastry Shells", "Ricotta", "Sugar", "Chocolate Chips", "Pistachios"],
    servingTime: "Dessert"
  },
  20: {
    id: 20,
    name: "Pasta e Fagioli",
    description: "Comforting pasta and bean soup, a staple of Italian cucina povera.",
    region: "Veneto",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Pasta", "Cannellini Beans", "Tomatoes", "Garlic", "Rosemary"],
    servingTime: "Lunch"
  },
  21: {
    id: 21,
    name: "Vitello Tonnato",
    description: "Cold veal dish with creamy tuna-caper sauce from Piedmont.",
    region: "Piemonte",
    image: "https://images.unsplash.com/photo-1646077978608-65ed63765302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbGFzYWduYXxlbnwxfHx8fDE3NjkyNTEzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Veal", "Tuna", "Capers", "Anchovies", "Mayonnaise"],
    servingTime: "Appetizer"
  },
  22: {
    id: 22,
    name: "Ribollita",
    description: "Tuscan bread soup made with vegetables, beans, and day-old bread.",
    region: "Toscana",
    image: "https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emElMjBtYXJnaGVyaXRhfGVufDF8fHx8MTc2OTI3NTA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Bread", "Kale", "Cannellini Beans", "Tomatoes", "Onions"],
    servingTime: "Lunch"
  },
  23: {
    id: 23,
    name: "Pasta Aglio e Olio",
    description: "Simple yet delicious pasta with garlic, olive oil, and chili flakes.",
    region: "Campania",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Chili Flakes", "Parsley"],
    servingTime: "Dinner"
  },
  24: {
    id: 24,
    name: "Frittata",
    description: "Italian open-faced omelet with vegetables, cheese, or meats.",
    region: "Various",
    image: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmlzb3R0b3xlbnwxfHx8fDE3NjkyNzUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Eggs", "Vegetables", "Cheese", "Olive Oil", "Herbs"],
    servingTime: "Lunch"
  },
  25: {
    id: 25,
    name: "Polenta",
    description: "Creamy cornmeal dish from Northern Italy, served soft or grilled.",
    region: "Lombardia",
    image: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmlzb3R0b3xlbnwxfHx8fDE3NjkyNzUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Cornmeal", "Water", "Butter", "Parmesan", "Salt"],
    servingTime: "Dinner"
  },
  26: {
    id: 26,
    name: "Cacio e Pepe",
    description: "Roman pasta with Pecorino Romano cheese and black pepper - simple perfection.",
    region: "Lazio",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Tonnarelli", "Pecorino Romano", "Black Pepper", "Pasta Water"],
    servingTime: "Lunch"
  },
  27: {
    id: 27,
    name: "Panettone",
    description: "Sweet bread loaf from Milan, traditionally enjoyed during Christmas.",
    region: "Lombardia",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Flour", "Butter", "Eggs", "Candied Fruit", "Raisins"],
    servingTime: "Dessert"
  },
  28: {
    id: 28,
    name: "Pasta alla Norma",
    description: "Sicilian pasta with eggplant, tomato sauce, and ricotta salata.",
    region: "Sicilia",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Rigatoni", "Eggplant", "Tomato Sauce", "Ricotta Salata", "Basil"],
    servingTime: "Dinner"
  },
  29: {
    id: 29,
    name: "Zabaglione",
    description: "Light Italian custard dessert made with egg yolks, sugar, and sweet wine.",
    region: "Piemonte",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Egg Yolks", "Sugar", "Marsala Wine", "Berries"],
    servingTime: "Dessert"
  },
  30: {
    id: 30,
    name: "Gnocchi al Pesto",
    description: "Soft potato dumplings tossed in vibrant basil pesto sauce.",
    region: "Liguria",
    image: "https://images.unsplash.com/photo-1655662844229-d2c2a81f09ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBjYXJib25hcmF8ZW58MXx8fHwxNzY5Mjc1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Potatoes", "Flour", "Eggs", "Pesto", "Parmesan"],
    servingTime: "Lunch"
  },
  31: {
    id: 31,
    name: "Affogato",
    description: "A simple yet elegant dessert - vanilla gelato 'drowned' in hot espresso.",
    region: "Various",
    image: "https://images.unsplash.com/photo-1553683315-dbc11cde81ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2OTI1MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Vanilla Gelato", "Espresso"],
    servingTime: "Dessert"
  }
};
