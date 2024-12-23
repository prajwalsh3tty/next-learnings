import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { ProductList } from '@/components/ProductList';

export const revalidate = 60;

export default async function ISRPage() {
  const allProducts = await db.select().from(products);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Products (ISR)</h1>
      <ProductList products={allProducts} renderingType="isr" />
    </div>
  );
}
