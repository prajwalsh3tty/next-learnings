import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { ProductList } from '@/components/ProductList';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  headers();
  const allProducts = await db.select().from(products);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Products (SSR)</h1>
      <ProductList products={allProducts} renderingType="ssr" />
    </div>
  );
}
