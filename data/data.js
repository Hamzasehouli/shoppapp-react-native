import Category from '../models/Category';
import Apparel from '../models/Apparel';
export const MenCategories = [
  new Category(
    'c1',
    'Sneakers men',
    'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
  ),
  new Category(
    'c2',
    'Bags men',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c3',
    'Jeans men',
    'https://images.unsplash.com/photo-1624378442362-d3247e8126ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c4',
    'Cap men',
    'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ),
  new Category(
    'c5',
    'Pullover men',
    'https://images.unsplash.com/photo-1638366271972-6d902f4fb098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHB1bGxvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c6',
    'Shirts men',
    'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c7',
    'Jackets men',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c7h',
    'Suit men',
    'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c7ssh',
    'Sportwear men',
    'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnQlMjBhcGFyZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c7sssh',
    'Shoes men',
    'https://images.unsplash.com/photo-1641893843833-a006778dc00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsYXNzaWMlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  ),
];
export const WomenCategories = [
  new Category(
    'c8',
    'Shoes women',
    'https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c9',
    'Bags women',
    'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c10',
    'Jeans women',
    'https://images.unsplash.com/photo-1624378442362-d3247e8126ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c11',
    'Hats women',
    'https://images.unsplash.com/photo-1521500875084-9ad8838c5f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBoYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c12',
    'Pullover women',
    'https://images.unsplash.com/photo-1638366271972-6d902f4fb098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHB1bGxvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c13',
    'Dress women',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c14',
    'Jackets women',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  // new Category(
  //   'c199',
  //   'Bride Dress',
  //   'https://images.unsplash.com/photo-1525257944500-61a4fae4cf3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyaWRlJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  // ),
  // new Category(
  //   'c1999',
  //   'Sportswear women',
  //   'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBzcG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  // ),
  // new Category(
  //   'c19999',
  //   'Maternity women',
  //   'https://images.unsplash.com/photo-1457342813143-a1ae27448a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWF0ZXJuaXR5JTIwY2xvdGh8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  // ),
  // new Category(
  //   'c199999',
  //   'Uniform women',
  //   'https://images.unsplash.com/photo-1615349719958-8e6381dd2f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHx3b21lbiUyMHN1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  // ),
];
export const KidsCataegories = [
  new Category(
    'c15',
    'Shoes',
    'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
  ),
  new Category(
    'c16',
    'Bags',
    'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c17',
    'Jeans',
    'https://images.unsplash.com/photo-1624378442362-d3247e8126ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c18',
    'Cap',
    'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ),
  new Category(
    'c19',
    'Pullover',
    'https://images.unsplash.com/photo-1638366271972-6d902f4fb098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHB1bGxvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c20',
    'Shirts',
    'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c21',
    'Jackets',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
];

export const BabyCataegories = [
  new Category(
    'c22',
    'Shoes',
    'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
  ),
  new Category(
    'c23',
    'Bags',
    'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c24',
    'Jeans',
    'https://images.unsplash.com/photo-1624378442362-d3247e8126ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c25',
    'Cap',
    'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ),
  new Category(
    'c26',
    'Pullover',
    'https://images.unsplash.com/photo-1638366271972-6d902f4fb098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHB1bGxvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c27',
    'Shirts',
    'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c28',
    'Jackets',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
];

export const SaleCataegories = [
  new Category(
    'c29',
    'Shoes',
    'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80',
  ),
  new Category(
    'c30',
    'Bags',
    'https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c31',
    'Jeans',
    'https://images.unsplash.com/photo-1624378442362-d3247e8126ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c32',
    'Cap',
    'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ),
  new Category(
    'c33',
    'Pullover',
    'https://images.unsplash.com/photo-1638366271972-6d902f4fb098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHB1bGxvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c34',
    'Shirts',
    'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  ),
  new Category(
    'c35',
    'Jackets',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  ),
];
