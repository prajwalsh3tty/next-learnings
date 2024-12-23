//import { db } from '../lib/db';
//import { products } from '../lib/db/schema';
//
//const mockProducts = [
//  {
//    name: 'Oversized Denim Jacket',
//    description: 'Classic oversized denim jacket with distressed details',
//    price: 45000, // $450.00
//    image: 'https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&fit=crop&q=80&w=800',
//  },
//  {
//    name: 'Minimal Leather Tote',
//    description: 'Handcrafted leather tote with minimal design',
//    price: 89900,
//    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
//  },
//  // Add more mock products here...
//];
//
//async function seed() {
//  console.log('Seeding database...');
//
//  try {
//    // Clear existing data
//    await db.delete(products);
//
//    // Insert new data
//    for (const product of mockProducts) {
//      await db.insert(products).values(product);
//    }
//
//    console.log('Seeding completed successfully');
//  } catch (error) {
//    console.error('Error seeding database:', error);
//    process.exit(1);
//  }
//}
//
//seed();
import { db } from '../lib/db';
import { products } from '../lib/db/schema';
//
const mockProducts = [
{
  name: 'Smart Home Hub Pro',
  description: 'Voice-controlled hub with multi-room audio support and smart home integration',
  price: 129900,
  image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=2671?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Ultra-Wide Gaming Monitor',
  description: '34-inch curved ultra-wide monitor, 165Hz refresh rate, 1ms response time',
  price: 549900,
  image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Mechanical Keyboard',
  description: 'RGB mechanical keyboard with hot-swappable switches and aluminum frame',
  price: 159900,
  image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Wireless Earbuds Pro',
  description: 'Active noise cancelling earbuds with spatial audio support',
  price: 199900,
  image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Smart Desk Lamp',
  description: 'Adjustable LED desk lamp with wireless charging base',
  price: 79900,
  image: 'https://images.unsplash.com/photo-1455792244736-3ed96c3d7f7e?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Portable SSD Drive',
  description: '1TB portable SSD with USB-C, 1050MB/s transfer speed',
  price: 129900,
  image: 'https://images.unsplash.com/photo-1725085815038-279c8139c8a4?auto=format&fit=crop&q=80&w=800',
},


  {
    name: 'Minimal Leather Tote',
    description: 'Handcrafted leather tote with minimal design',
    price: 89900,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Wool Blend Coat',
    description: 'Luxurious wool blend coat in camel',
    price: 129900,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800',
  },
  // Add 25 more products...
  {
    name: 'Cashmere Sweater',
    description: 'Pure cashmere sweater in cream',
    price: 79900,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
  },
  // ... adding more products with varying prices and styles
  {
    name: 'Leather Chelsea Boots',
    description: 'Classic leather Chelsea boots in black',
    price: 159900,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
  },
{
  name: 'Gaming Mouse',
  description: 'Wireless gaming mouse with 25K DPI sensor and 100-hour battery life',
  price: 149900,
  image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Smart Security Camera',
  description: '2K indoor security camera with night vision and two-way audio',
  price: 89900,
  image: 'https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'USB-C Hub',
  description: '8-in-1 USB-C hub with HDMI, ethernet, and power delivery',
  price: 59900,
  image: 'https://images.unsplash.com/photo-1573868388390-2739872961e6?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Wireless Charging Pad',
  description: '15W fast wireless charger with ambient light ring',
  price: 39900,
  image: 'https://images.unsplash.com/photo-1553556135-009e5858adce?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Smart Coffee Maker',
  description: 'WiFi-enabled coffee maker with mobile app control',
  price: 199900,
  image: 'https://images.unsplash.com/photo-1608354580875-30bd4168b351?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Desktop Webcam',
  description: '4K webcam with auto-focus and light correction',
  price: 129900,
  image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Smart Plant Sensor',
  description: 'Bluetooth plant monitor for moisture, light, and nutrients',
  price: 49900,
  image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Laptop Stand',
  description: 'Adjustable aluminum laptop stand with built-in cooling',
  price: 69900,
  image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Bluetooth Speaker',
  description: 'Waterproof portable speaker with 24-hour battery life',
  price: 159900,
  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Cable Management Kit',
  description: 'Complete desk cable management solution with clips and sleeves',
  price: 29900,
  image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Smart Light Strips',
  description: 'WiFi RGB light strips with music sync capability',
  price: 79900,
  image: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Wireless Presenter',
  description: 'RF presenter with laser pointer and timer vibration',
  price: 45900,
  image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'USB Microphone',
  description: 'Condenser USB microphone with gain control and zero-latency monitoring',
  price: 129900,
  image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Desk Mat',
  description: 'Large desk mat with wireless charging pad integration',
  price: 49900,
  image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'NFC Smart Tags',
  description: 'Pack of 10 programmable NFC tags for automation',
  price: 19900,
  image: 'https://images.unsplash.com/photo-1654263937079-f63a3ea4d48b?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Power Bank',
  description: '26800mAh power bank with 65W USB-C PD charging',
  price: 89900,
  image: 'https://images.unsplash.com/photo-1566554738544-d962991c3fee?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Ergonomic Mouse Pad',
  description: 'Memory foam mouse pad with wrist rest support',
  price: 34900,
  image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Cable Tester',
  description: 'Multi-function network cable tester with LCD display',
  price: 69900,
  image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Mini PC',
  description: 'Compact desktop PC with 16GB RAM and 512GB SSD',
  price: 599900,
  image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=800',
},

{
  name: 'Linen Blazer',
  description: 'Structured linen blazer in sage green',
  price: 72500,
  image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Crossbody Bag',
  description: 'Quilted leather crossbody with gold hardware',
  price: 55000,
  image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
},

{
  name: 'Merino Turtleneck',
  description: 'Fine merino wool turtleneck in burgundy',
  price: 48900,
  image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Pleated Midi Skirt',
  description: 'Metallic pleated midi skirt in champagne',
  price: 39900,
  image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800',
},

{
  name: 'Leather Mules',
  description: 'Block heel leather mules in tan',
  price: 62000,
  image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Statement Earrings',
  description: 'Architectural gold-plated statement earrings',
  price: 28900,
  image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Cropped Cardigan',
  description: 'Cotton-blend cropped cardigan with pearl buttons',
  price: 32000,
  image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
},
{
  name: 'Vintage Wash Jeans',
  description: 'High-rise straight leg jeans in vintage wash',
  price: 58900,
  image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
},

{
  name: 'Leather Belt Bag',
  description: 'Convertible leather belt bag in cognac',
  price: 36000,
  image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800',
},

{
  name: 'Platform Sandals',
  description: 'Leather platform sandals with ankle strap',
  price: 71900,
  image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
}
  // ... continue with more products
];
//const fetchProductImagesFromPexels = async () => {
//  const apiKey = "hJvKhQMagbPTMitr4JGQ62QP41zwT37uiBRhmmK7fsXfwFPeff92mF5V"; // Replace with your Pexels API key
//  const query = "product gadgets";
//  const perPage = 25; // Number of images to fetch
//
//  try {
//    const response = await fetch(
//      `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`,
//      {
//        headers: {
//          Authorization: apiKey,
//        },
//      }
//    );
//    const data = await response.json();
//
//    if (data.photos) {
//      const mockProducts = data.photos.map((photo) => ({
//        name: photo.alt || "Unnamed Product", // Use the 'alt' property as the name, fallback to 'Unnamed Product'
//        description: `Description for ${photo.alt || "Unnamed Product"}`,
//        price: (Math.random() * 200 + 20).toFixed(2), // Random price between 20 and 220
//        image: photo.src.medium, // Use medium-sized image URL
//      }));
//
//      console.log(mockProducts); // Use this or render the products in your app
//      return mockProducts;
//    }
//  } catch (error) {
//    console.error("Error fetching images from Pexels:", error);
//  }
//};
//
//
//// Generate additional products programmatically
//const additionalProducts = Array.from({ length: 20 }, (_, i) => ({
//  name: `Premium Item ${i + 1}`,
//  description: `Luxury fashion item with premium quality - ${i + 1}`,
//  price: Math.floor(Math.random() * 200000) + 30000, // Random price between 300-2000
//  image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&q=80&w=800`,
//}));
//
const allProducts = [...mockProducts];

async function seed() {
  console.log('Seeding database...');
  
  try {
    // Clear existing data
    await db.delete(products);
    
    // Insert new data
    for (const product of allProducts) {
      await db.insert(products).values(product);
    }
    
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
