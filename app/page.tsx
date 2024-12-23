import Link from 'next/link';
import Image from "next/image";
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto py-16">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Next.js Rendering Demo
      </h1>
      <div className="flex flex-col gap-4 max-w-md mx-auto px-4">
        <Image
          className="mx-auto m-4"
          src="/nextjs-icon.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link href="/csr">
          <Button className="w-full">
            CSR Example (Client-Side Rendering)
          </Button>
        </Link>
        <Link href="/ssr">
          <Button className="w-full">
            SSR Example (Server-Side Rendering)
          </Button>
        </Link>
        <Link href="/ssg">
          <Button className="w-full">
            SSG Example (Static Site Generation)
          </Button>
        </Link>
        <Link href="/isr">
          <Button className="w-full">
            ISR Example (Incremental Static Regeneration)
          </Button>
        </Link>

      </div>
    </div>
  );
}
