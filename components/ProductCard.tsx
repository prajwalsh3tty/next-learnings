import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  renderingType: 'isr' | 'ssr' | 'csr';
}

export function ProductCard({ product, renderingType }: ProductCardProps) {
  return (
    <Link href={`/${renderingType}/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:scale-[1.02]">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-muted-foreground">
            ${(product.price / 100).toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}