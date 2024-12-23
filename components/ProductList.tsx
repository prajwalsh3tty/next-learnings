'use client';

import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductControls } from './ProductControls';
import { Button } from './ui/button';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
  renderingType: 'isr' | 'ssr' | 'csr';
}

export function ProductList({ products: initialProducts, renderingType }: ProductListProps) {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');
  
  const productsPerPage = 9;

  // Filter and sort products
  const filteredProducts = initialProducts
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      return 0;
    });

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <ProductControls
        onSearchChange={setSearch}
        onSortChange={setSortOrder}
        onViewChange={setView}
        view={view}
      />
      
      <div className={view === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        : "flex flex-col gap-6 lg:w-[50%] mx-auto"
      }>
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            renderingType={renderingType}
            view={view}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? 'default' : 'outline'}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
