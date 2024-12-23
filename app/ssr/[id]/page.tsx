import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  headers(); // This forces Next.js to render this page dynamically
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, parseInt(params.id)))
    .get();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl">${(product.price / 100).toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
