import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">All Watches</h1>
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
                <div>
                  <h3 className="mb-4 text-sm font-medium">Categories</h3>
                  <div className="space-y-3">
                    <Link href="/collections/luxury" className="block text-sm text-muted-foreground hover:text-foreground">
                      Luxury
                    </Link>
                    <Link href="/collections/sport" className="block text-sm text-muted-foreground hover:text-foreground">
                      Sport
                    </Link>
                    <Link href="/collections/smart" className="block text-sm text-muted-foreground hover:text-foreground">
                      Smart
                    </Link>
                    <Link href="/collections/classic" className="block text-sm text-muted-foreground hover:text-foreground">
                      Classic
                    </Link>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-4 text-sm font-medium">Brands</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(products.map(p => p.brand))).map(brand => (
                      <div key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`brand-${brand.toLowerCase()}`}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label
                          htmlFor={`brand-${brand.toLowerCase()}`}
                          className="ml-2 text-sm text-muted-foreground"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-4 text-sm font-medium">Price Range</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <Separator />
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {/* Filters - Desktop */}
        <div className="hidden space-y-6 lg:block">
          <div>
            <h3 className="mb-4 text-sm font-medium">Categories</h3>
            <div className="space-y-3">
              <Link href="/collections/luxury" className="block text-sm text-muted-foreground hover:text-foreground">
                Luxury
              </Link>
              <Link href="/collections/sport" className="block text-sm text-muted-foreground hover:text-foreground">
                Sport
              </Link>
              <Link href="/collections/smart" className="block text-sm text-muted-foreground hover:text-foreground">
                Smart
              </Link>
              <Link href="/collections/classic" className="block text-sm text-muted-foreground hover:text-foreground">
                Classic
              </Link>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="mb-4 text-sm font-medium">Brands</h3>
            <div className="space-y-3">
              {Array.from(new Set(products.map(p => p.brand))).map(brand => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`desktop-brand-${brand.toLowerCase()}`}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label
                    htmlFor={`desktop-brand-${brand.toLowerCase()}`}
                    className="ml-2 text-sm text-muted-foreground"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="mb-4 text-sm font-medium">Price Range</h3>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="Min"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <Separator />
          <Button>Apply Filters</Button>
        </div>
        
        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
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
          
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 