import { notFound } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/data/products";

type CategoryType = "luxury" | "sport" | "smart" | "classic";

const categoryInfo = {
  luxury: {
    title: "Luxury Watches",
    description: "Timeless elegance and precision craftsmanship",
  },
  sport: {
    title: "Sport Watches",
    description: "Durable timepieces for active lifestyles",
  },
  smart: {
    title: "Smart Watches",
    description: "Connected watches with modern features",
  },
  classic: {
    title: "Classic Watches",
    description: "Timeless designs that never go out of style",
  },
};

export function generateStaticParams() {
  return [
    { category: "luxury" },
    { category: "sport" },
    { category: "smart" },
    { category: "classic" },
  ];
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category as CategoryType;
  
  if (!Object.keys(categoryInfo).includes(category)) {
    notFound();
  }
  
  const { title, description } = categoryInfo[category];
  const categoryProducts = products.filter(product => product.category === category);

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{categoryProducts.length}</span> results
        </p>
        <div className="flex items-center gap-2">
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <SlidersHorizontal className="h-5 w-5" />
                <span className="sr-only">Filter products</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your product search with filters.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {/* Filters would go here */}
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            salePrice={product.salePrice}
            image={product.images[0]}
            brand={product.brand}
            isNew={product.isNew}
            isSale={product.isSale}
          />
        ))}
      </div>
      
      {categoryProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="mb-2 text-xl font-semibold">No products found</h2>
          <p className="mb-6 text-center text-muted-foreground">
            We couldn&apos;t find any products in this category.
          </p>
          <Button asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
} 